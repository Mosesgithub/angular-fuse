using Uno;
using Uno.Collections;

using Fuse;

public partial class Clicky {
	public void OnClicked(object s, object a) {
		var args = new Dictionary<string, object>();
		args["SourceNode"] = this;
		args["ImageUrl"] = TheImage.Url;
		UserEvent.RaiseEvent(this, "SelectItem", args);
		debug_log "Clicky OnClicked";
	}
}