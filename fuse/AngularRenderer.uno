using Uno;
using Uno.Collections;
using Fuse;
using Fuse.Scripting;
using Fuse.Reactive;
using Fuse.Controls;
using Fuse.Gestures;
using Fuse.Scripting;
using Fuse.Animations;

//Why do i need to create this
public class Height_Property: Uno.UX.Property<float> {
	Fuse.Elements.Element _obj;
	public Height_Property(Fuse.Elements.Element obj) { _obj = obj; }
	protected override float OnGet() { return _obj.Height; }
	protected override void OnSet(float v, object origin) { _obj.Height = v; }
}

public class Reflection {

	private static bool Acceptor(object obj) {
		return true;
	}

	private static Fuse.Drawing.Brush GetBrush(string color) {
		object res;
		//not working
		var found = Uno.UX.Resource.TryFindGlobal(color, Acceptor, out res);
		if (found) {
			return (Fuse.Drawing.Brush)res;
		}
		else {
			if (color == "Red") {
				return Fuse.Drawing.Brushes.Red;
			}
			if (color == "Green") {
				return Fuse.Drawing.Brushes.Green;
			}
			if (color == "Blue") {
				return Fuse.Drawing.Brushes.Blue;
			}
			if (color == "Yellow") {
				return Fuse.Drawing.Brushes.Yellow;
			}
			return Fuse.Drawing.Brushes.Black;
		}
	}

	public static object CreateFromType(string type, object parent) {

		if (type == "Rectangle") {
			return new Rectangle();
		}
		if (type == "StackPanel") {
			return new StackPanel();
		}
		if (type == "DockPanel") {
			return new DockPanel();
		}
		if (type == "Panel" || type == "app") {
			return new Panel();
		}
		if (type == "ScrollView") {
			return new ScrollView();
		}
		if (type == "Text") {
			return new Text();
		}
		if (type == "TextInput") {
			return new TextInput();
		}
		if (type == "WhilePressed") {
			return new WhilePressed();
		}
		if (type == "Change") {
			if (parent != null) {
				debug_log(parent.GetType());
				var rect_Height_inst = new Height_Property((Rectangle)parent);
				var change = new Fuse.Animations.Change<float>(rect_Height_inst);
				change.Value = 400f;
				change.Duration = 0.2;
				debug_log(change.GetType());

				return change;
			}
		}
		return null;
	}

	public static string SetAttribute(object node, string attribute, object value) {
		if (node != null) {
			//debug_log(attribute + ' ' + value);
			if (attribute == "Background") {
				((Rectangle)node).Background = GetBrush(value.ToString()) ;
				return "";
			}
			if (attribute == "Dock") {
				if (value.ToString() == "Top") {
					debug_log("value found top");
					Fuse.Controls.DockPanel.SetDock((Rectangle)node, Fuse.Layouts.Dock.Top);
					return "";
				}
				if (value.ToString() == "Bottom") {
					Fuse.Controls.DockPanel.SetDock((Rectangle)node, Fuse.Layouts.Dock.Bottom);
					return "";
				}
			}
			if (attribute == "Height") {
				((Rectangle)node).Height = int.Parse(value.ToString());// 60;// (float)value;
				return "";
			}
			if (attribute == "Width") {
				((Rectangle)node).Width = int.Parse(value.ToString());// 60;// (float)value;
				return "";
			}
			if (attribute == "Margin") {
				((Rectangle)node).Margin = float4(float.Parse(value.ToString()));// 60;// (float)value;
				return "";
			}
			if (attribute == "Value") {
				((Text)node).Value = value.ToString();
				return "";
			}
			return "attribute not supported " + attribute;
		}
		else {
			return "object not found";
		}
	}

	public static void InsertChild(object parent, object child) {
		var parentType = parent.GetType();
		var childType = child.GetType();

		if (parentType == typeof(ScrollView)) {
			((ScrollView)parent).Content = (Fuse.Elements.Element)child;
		}
		else if (childType == typeof(WhilePressed)) {
			((Panel)parent).Behaviors.Add((WhilePressed)child);
		}
		else if (parentType == typeof(WhilePressed)) {
			((WhilePressed)parent).Animators.Add((Fuse.Animations.Animator)child);
		}
		else {
			((Panel)parent).Children.Add((Node)child);
		}
	}

	public static void SetEventHandler(object node, object[] args, NativeEvent nativeEvent ) {
		var clicked = new Fuse.Gestures.Clicked();
		((Rectangle)node).Behaviors.Add(clicked);
		clicked.Handler += new EventHandlerAction(args, nativeEvent).Trigger;
	}
}

public class EventHandlerAction {
	private object[] Arg;
	private NativeEvent NativeEvent;

	public EventHandlerAction(object[] arg, NativeEvent nativeEvent) {
		Arg = arg;
		NativeEvent = nativeEvent;
	}

	public void Trigger(object sender, ClickedArgs args) {
		NativeEvent.RaiseAsync(Arg);
	}
}


public class InsertChildUIAction {
	private object Parent;
	private object Child;
	public InsertChildUIAction(object parent, object child) {
		Parent = parent;
		Child = child;
	}

	public void Insert() {
		Reflection.InsertChild(Parent, Child);
	}
}


public class AngularRenderer : NativeModule
{
	public static Dictionary<string, object> Tree;
	public static Dictionary<string, string> Parents;
	private int NodeCounter = 0;
	private NativeEvent _nativeEvent;

	public AngularRenderer() {
		AddMember(new NativeFunction("addElement", (NativeCallback)AddElement));
		AddMember(new NativeFunction("renderElement", (NativeCallback)RenderElement));
		AddMember(new NativeFunction("setAttribute", (NativeCallback)SetAttribute));
		AddMember(new NativeFunction("setEventListener", (NativeCallback)SetEventListener));
		_nativeEvent = new NativeEvent("onEventTriggered");
		AddMember(_nativeEvent);

		Tree = new Dictionary<string, object>();
		Parents = new Dictionary<string, string>();

		Evaluated += OnJsInitialized;
	}

	void OnJsInitialized(object sender, Uno.EventArgs args)
	{
		if (App.Current.RootNode == null) {
			App.Current.RootNode = new Fuse.Controls.Panel();
		}
	}

	private object FindNode(string id) {
		if (id != null  && Tree.ContainsKey(id)) {
			return Tree[id];
		}
		else if (id == null) {
			return App.Current.RootNode;
		}
		else {
			return null;
		}
	}

	string AddElement(Context c, object[] args) {
		var type = args[0] as string;
		var parentId = args[1] as string;
		if (type == "Change") {
			parentId = Parents[parentId];
			debug_log("Change real parent id " + parentId);
		}
		var parent = FindNode(parentId);

		object node = Reflection.CreateFromType(type, parent);

		if (node != null) {
			var id = "obj_" + NodeCounter++;
			Tree.Add(id, node);
			Parents.Add(id, parentId);
			return id;
		}
		else {
			return "Type not found :" + type;
		}
	}

	string RenderElement(Context c , object[] args) {
		var id = args[0] as string;
		var parentId = args[1] as string;
		var node = FindNode(id);
		var parent = FindNode(parentId);

		if (parent != null && node != null ) {
			//Reflection.InsertChild(parent, node);
			Fuse.UpdateManager.PostAction(new InsertChildUIAction(parent, node).Insert);
			return id + " insert in " + parentId;
		}
		else {
			if (parent == null) {
				debug_log("parent not found " + parentId);
			}
			if (node == null) {
				debug_log("node not found " + id);
			}
			return "could not find node or parent";
		}
	}

	object SetAttribute(Context c, object[] args) {
		var id = args[0] as string;
		var attribute = args[1] as string;
		var value = args[2] as object;

		var node = FindNode(id);
		return Reflection.SetAttribute(node, attribute, value);
	}



	object SetEventListener(Context c, object[] args) {
		var id = args[0] as string;
		//var eventName = args[1] as string;
		//var callback = args[2] as object;
		//debug_log("SetEventListener " + name + " " + eventName); //+' '+args[2].GetType().ToString());

		var node = FindNode(id);
		Reflection.SetEventHandler(node, args, _nativeEvent);


		//Node node = FindNode(name);
		//Fuse.Gestures.Clicked.AddHandler(node, new ClickHandlerClosure((Function)args[2]));

		return "ok";
	}
}
