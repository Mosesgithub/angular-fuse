using Uno;
using Uno.Collections;
using Fuse;
using Fuse.Scripting;
using Fuse.Reactive;


public class AngularRenderer : NativeModule
{
	public AngularRenderer(){
		AddMember(new NativeFunction("addElement", (NativeCallback)AddElement));
	}

	object AddElement(Context c, object[] args){
		debug_log(args);

		var panel = new Fuse.Controls.Panel();		
        panel.Background = Fuse.Drawing.Brushes.Green;
        App.Current.RootNode=panel;
		return null;
	}
}
