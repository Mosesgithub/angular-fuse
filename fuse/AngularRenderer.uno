using Uno;
using Uno.Collections;
using Fuse;
using Fuse.Scripting;
using Fuse.Reactive;
using Fuse.Controls;
using Fuse.Gestures;
using Fuse.Scripting;


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

	public static Node CreateFromType(string type) {

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
		// if (type == "WhilePressed") {
		// 	return new Fuse.Gestures.WhilePressed();
		// }
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

	public static void InsertChild(Node parent, Node child) {
		var parentType = parent.GetType();
		if (parentType == typeof(ScrollView)) {
			((ScrollView)parent).Content = (Fuse.Elements.Element)child;
		}
		else {
			((Panel)parent).Children.Add(child);
		}
	}

	public static void SetEventHandler(Node node,object[] args, NativeEvent nativeEvent ){
		var clicked=new Fuse.Gestures.Clicked();
		((Rectangle)node).Behaviors.Add(clicked);
		clicked.Handler += new EventHandlerAction(args, nativeEvent).Trigger;
	}
}

public class EventHandlerAction {
	private object[] Arg;
	private NativeEvent NativeEvent;

	public EventHandlerAction(object[] arg, NativeEvent nativeEvent){
		Arg=arg;
		NativeEvent=nativeEvent;
	}

	public void Trigger(object sender, ClickedArgs args) {
		NativeEvent.RaiseAsync(Arg);
	}
}


public class InsertChildUIAction {

	private Node Parent;
	private Node Child;

	public InsertChildUIAction(Node parent, Node child) {
		Parent = parent;
		Child = child;
	}

	public void Insert() {
		Reflection.InsertChild(Parent, Child);
	}
}


public class AngularRenderer : NativeModule
{

	public static Dictionary<string, Node> Tree;
	private int NodeCounter = 0;
	private NativeEvent _nativeEvent;

	public AngularRenderer() {
		AddMember(new NativeFunction("addElement", (NativeCallback)AddElement));
		AddMember(new NativeFunction("renderElement", (NativeCallback)RenderElement));
		AddMember(new NativeFunction("setAttribute", (NativeCallback)SetAttribute));
		AddMember(new NativeFunction("setEventListener", (NativeCallback)SetEventListener));
		_nativeEvent = new NativeEvent("onEventTriggered");
		AddMember(_nativeEvent);

		Tree = new Dictionary<string, Node>();

		Evaluated += OnJsInitialized;
	}

	void OnJsInitialized(object sender, Uno.EventArgs args)
	{
		if (App.Current.RootNode == null) {
			App.Current.RootNode = new Fuse.Controls.Panel();
		}
	}

	private Node FindNode(string name) {
		if (name != null  && Tree.ContainsKey(name)) {
			return Tree[name];
		}
		else if (name == null) {
			return App.Current.RootNode;
		}
		else {
			return null;
		}
	}

	string AddElement(Context c, object[] args) {
		var type = args[0] as string;
		Node node = Reflection.CreateFromType(type);

		if (node != null) {
			node.Name = "obj_" + NodeCounter++;
			Tree.Add(node.Name, node);
			return node.Name;
		}
		else {
			return "Type not found :" + type;
		}
	}

	string RenderElement(Context c , object[] args) {
		var name = args[0] as string;
		var parentName = args[1] as string;
		var node = FindNode(name);
		var parent = FindNode(parentName);

		if (parent != null && node != null ) {
			//Reflection.InsertChild(parent, node);
			Fuse.UpdateManager.PostAction(new InsertChildUIAction(parent, node).Insert);
			return name + " insert in " + parentName;
		}
		else {
			if (parent == null) {
				debug_log("parent not found " + parentName);
			}
			if (node == null) {
				debug_log("node not found " + name);
			}
			return "could not find node or parent";
		}
	}

	object SetAttribute(Context c, object[] args) {
		var name = args[0] as string;
		var attribute = args[1] as string;
		var value = args[2] as object;

		Node node = FindNode(name);
		return Reflection.SetAttribute(node, attribute, value);
	}



	object SetEventListener(Context c, object[] args) {
		var name = args[0] as string;
		//var eventName = args[1] as string;
		//var callback = args[2] as object;
		//debug_log("SetEventListener " + name + " " + eventName); //+' '+args[2].GetType().ToString());

		Node node = FindNode(name);
		Reflection.SetEventHandler(node, args, _nativeEvent);

		
		//Node node = FindNode(name);
		//Fuse.Gestures.Clicked.AddHandler(node, new ClickHandlerClosure((Function)args[2]));

		return "ok";
	}
}
