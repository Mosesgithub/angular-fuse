public partial class MainView: Fuse.App
{
    [global::Uno.UX.UXGlobalResource("AngularRenderer")] public static readonly AngularRenderer AngularRenderer;
    static MainView()
    {
        AngularRenderer = new AngularRenderer();
        global::Uno.UX.Resource.SetGlobalKey(AngularRenderer, "AngularRenderer");
    }
    public MainView()
    {
        InitializeUX();
    }
    internal void InitializeUX()
    {
        var temp = new Fuse.Reactive.JavaScript();
        temp.LineNumber = 9;
        temp.FileName = "fuse/MainView.ux";
        temp.File = new global::Uno.UX.BundleFileSource(import global::Uno.BundleFile("../../../../fuse/MainView.js"));
        this.Theme = Fuse.BasicTheme.BasicTheme.Singleton;
        this.Behaviors.Add(temp);
    }
}
