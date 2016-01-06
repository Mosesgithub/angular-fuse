using Uno;
using Uno.Collections;
using Fuse;
using Fuse.Scripting;
using Fuse.Reactive;
using Fuse.Controls;
using Fuse.Gestures;
using Fuse.Scripting;

// private class ClickHandlerClosure {
// 		Function _f;
// 		public ClickHandlerClosure(Function f)
// 		{
// 			_f = f;
// 		}
// 		public void Handler(object sender,  Fuse.Gestures.ClickedArgs args)
// 		{
// 			// here you have to dispatch a call to _f onto the
// 			// JS thread, which isn't possible in the current version
// 		}
// 	}


public class Reflection {

	private static bool Acceptor(object obj) {
		return true;
	}

	private static Fuse.Drawing.Brush GetBrush(string color) {
		object res;
		debug_log(color);
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
		// if (type == "WhilePressed") {
		// 	return new Fuse.Gestures.WhilePressed();
		// }
		return null;
	}

	public static string SetAttribute(object node, string attribute, object value) {
		if (node != null) {
			debug_log(attribute + ' ' + value);
			if (attribute == "Background") {
				((Rectangle)node).Background = GetBrush(value.ToString()) ;
				return "ok";
			}
			if (attribute == "Dock") {
				if (value.ToString() == "Top") {
					debug_log("value found top");
					Fuse.Controls.DockPanel.SetDock((Rectangle)node, Fuse.Layouts.Dock.Top);
					return "ok";
				}
				if (value.ToString() == "Bottom") {
					Fuse.Controls.DockPanel.SetDock((Rectangle)node, Fuse.Layouts.Dock.Bottom);
					return "ok";
				}
			}
			if (attribute == "Height") {
				((Rectangle)node).Height = int.Parse(value.ToString());// 60;// (float)value;
				return "ok";
			}
			if (attribute == "Width") {
				((Rectangle)node).Width = int.Parse(value.ToString());// 60;// (float)value;
				return "ok";
			}
			if (attribute == "Margin") {
				((Rectangle)node).Margin = float4(float.Parse(value.ToString()));// 60;// (float)value;
				return "ok";
			}
			if (attribute == "Value") {
				((Text)node).Value = value.ToString();
				return "ok";
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
}


public class InsertChildUIClass {

	private Node Parent;
	private Node Child;

	public InsertChildUIClass(Node parent, Node child) {
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

	public AngularRenderer() {
		AddMember(new NativeFunction("addElement", (NativeCallback)AddElement));
		AddMember(new NativeFunction("renderElement", (NativeCallback)RenderElement));
		AddMember(new NativeFunction("setAttribute", (NativeCallback)SetAttribute));
		AddMember(new NativeFunction("setEventListener", (NativeCallback)SetEventListener));

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
		string parentName = null;
		if (args.Length > 1) {
			parentName = args[1] as string;
		}

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
			Fuse.UpdateManager.PostAction(new InsertChildUIClass(parent, node).Insert);
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
		var ev = args[1] as string;
		debug_log(args[2]);

		Node node = FindNode(name);
		//Fuse.Gestures.Clicked.AddHandler(node, new ClickHandlerClosure((Function)args[2]));

		return true;
	}
}
