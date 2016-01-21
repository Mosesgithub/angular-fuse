using Uno;
using Uno.Collections;
using Fuse;

public partial class HeaderBar
{

   public IList<Node> LeftIcons {
        get { return leftIcons.Children; }
    }

    public IList<Node> RightIcons {
        get { return rightIcons.Children; }
    }

    public string Title {
        get { return title.Value; }
        set { title.Value = value; }
    }
}
