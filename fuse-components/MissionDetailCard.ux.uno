using Uno;
using Uno.UX;

using Fuse;
using Fuse.Elements;
using Fuse.Controls;

public partial class MissionDetailCard {
	void SelectItem(object s, UserEventArgs args) {
		BackImage.Url = BigImage.Url;
		BigImage.Url = args.Args["ImageUrl"].ToString();
		BigTrans.From = (Element)args.Args["SourceNode"];
		debug_log "MissionDetailCard SelectItem " ;
	}
}
