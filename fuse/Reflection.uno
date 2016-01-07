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
		//CUSTOM

		if(type=="Login"){
			return new Panel();
		}
		if (type == "LoginUX") {
			return new LoginUX();
		}
		if (type == "MyRectangle") {
			return new MyRectangle();
		}

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

			if (attribute == "MyWidth") {
				((MyRectangle)node).MyWidth = (float.Parse(value.ToString()));// 60;// (float)value;
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
			debug_log("attribute not supported " + attribute);
			return "";
		}
		else {
			debug_log("object not found");
			return "";
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