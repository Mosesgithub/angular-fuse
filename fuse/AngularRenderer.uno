using Uno;
using Uno.Collections;
using Fuse;
using Fuse.Scripting;
using Fuse.Reactive;
using Fuse.Controls;
using Fuse.Gestures;
using Fuse.Scripting;
using Fuse.Animations;
using Fuse.Triggers;


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
			Fuse.UpdateManager.PostAction(new RenderElementAction(parent, node).Execute);
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
		Fuse.UpdateManager.PostAction(new SetAttributeAction(node, attribute, value).Execute);
		return "";
		//return Reflection.SetAttribute(node, attribute, value);
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


public class RenderElementAction {
	private object Parent;
	private object Child;
	public RenderElementAction(object parent, object child) {
		Parent = parent;
		Child = child;
	}

	public void Execute() {
		Reflection.InsertChild(Parent, Child);
	}
}

public class SetAttributeAction {
	private object Node;
	private string Attribute;
	private object Value;

	public SetAttributeAction(object node, string attribute, object value) {
		Node = node;
		Attribute = attribute;
		Value = value;
	}

	public void Execute() {
		Reflection.SetAttribute(Node, Attribute, Value);
	}
}

