public partial class Main: Fuse.Controls.Panel
{
    public partial class Factory: Uno.UX.Factory
    {
        internal readonly Main __parent;
        public Factory(Main parent): base("Login_Scope0", false)
        {
            __parent = parent;
        }
        static Factory()
        {
        }
        public override object New()
        {
            var self = new Login();
            return self;
        }
    }
    public partial class Factory1: Uno.UX.Factory
    {
        internal readonly Main __parent;
        public Factory1(Main parent): base("Menu_Scope0", false)
        {
            __parent = parent;
        }
        static Factory1()
        {
        }
        public override object New()
        {
            var self = new Menu();
            return self;
        }
    }
    yoobic_FuseControlsPanel_object_Items_Property temp_Items_inst;
    static Main()
    {
    }
    public Main()
    {
        InitializeUX();
    }
    internal void InitializeUX()
    {
        var temp = new Fuse.Controls.Panel();
        temp_Items_inst = new yoobic_FuseControlsPanel_object_Items_Property(temp);
        var temp1 = new YooStyle();
        var temp2 = new Factory(this);
        var temp3 = new Factory1(this);
        var temp4 = new Fuse.Reactive.DataBinding<object>(temp_Items_inst, "router_outlet");
        temp.MatchKey = "type";
        temp.Factories.Add(temp2);
        temp.Factories.Add(temp3);
        temp.Behaviors.Add(temp4);
        this.Children.Add(temp);
        this.Styles.Add(temp1);
    }
}
