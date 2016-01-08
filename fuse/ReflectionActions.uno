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


public class RemoveElementAction {
	private object Parent;
	private object Child;

	public RemoveElementAction(object parent, object child) {
		Parent = parent;
		Child = child;
	}



	public void Execute() {
		Reflection.RemoveChild(Parent, Child);
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
