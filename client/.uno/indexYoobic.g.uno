public partial class indexYoobic: Fuse.App
{
    [global::Uno.UX.UXGlobalResource("common")] public static readonly Fuse.Reactive.JavaScript common;
    [global::Uno.UX.UXGlobalResource("vendor")] public static readonly Fuse.Reactive.JavaScript vendor;
    [global::Uno.UX.UXGlobalResource("bundle")] public static readonly Fuse.Reactive.JavaScript bundle;
    [global::Uno.UX.UXGlobalResource("AngularRenderer")] public static readonly Fuse.Reactive.JavaScript AngularRenderer;
    static indexYoobic()
    {
        common = new Fuse.Reactive.JavaScript();
        vendor = new Fuse.Reactive.JavaScript();
        bundle = new Fuse.Reactive.JavaScript();
        AngularRenderer = new Fuse.Reactive.JavaScript();
        global::Uno.UX.Resource.SetGlobalKey(common, "common");
        common.File = new global::Uno.UX.BundleFileSource(import global::Uno.BundleFile("../../dist/yoobic/dev/common.js"));
        global::Uno.UX.Resource.SetGlobalKey(vendor, "vendor");
        vendor.File = new global::Uno.UX.BundleFileSource(import global::Uno.BundleFile("../../dist/yoobic/dev/vendor.js"));
        global::Uno.UX.Resource.SetGlobalKey(bundle, "bundle");
        bundle.File = new global::Uno.UX.BundleFileSource(import global::Uno.BundleFile("../../dist/yoobic/dev/bundle.js"));
        global::Uno.UX.Resource.SetGlobalKey(AngularRenderer, "AngularRenderer");
        AngularRenderer.File = new global::Uno.UX.BundleFileSource(import global::Uno.BundleFile("../../fuse/AngularRenderer.js"));
    }
    public indexYoobic()
    {
        InitializeUX();
    }
    internal void InitializeUX()
    {
        var temp = new Fuse.Reactive.JavaScript();
        var temp1 = new Main();
        temp.LineNumber = 6;
        temp.FileName = "/Users/ghaiat/Documents/Phonegap/fuse/angular2-fuse/client/indexYoobic.ux";
        temp.File = new global::Uno.UX.BundleFileSource(import global::Uno.BundleFile("../../fuse/AngularBootstrap.js"));
        this.RootNode = temp1;
        this.Theme = Fuse.BasicTheme.BasicTheme.Singleton;
        this.Behaviors.Add(temp);
    }
}
