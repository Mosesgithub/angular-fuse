public partial class Menu: Fuse.Controls.Panel
{
    public partial class Factory: Uno.UX.Factory
    {
        internal readonly Menu __parent;
        public Factory(Menu parent): base("MissionsList_Scope0", false)
        {
            __parent = parent;
        }
        static Factory()
        {
        }
        public override object New()
        {
            var self = new MissionsList();
            return self;
        }
    }
    public partial class Factory1: Uno.UX.Factory
    {
        internal readonly Menu __parent;
        public Factory1(Menu parent): base("MissionForm_Scope0", false)
        {
            __parent = parent;
        }
        static Factory1()
        {
        }
        public override object New()
        {
            var self = new MissionForm();
            return self;
        }
    }
    public partial class Factory2: Uno.UX.Factory
    {
        internal readonly Menu __parent;
        public Factory2(Menu parent): base("Menu_Scope3", false)
        {
            __parent = parent;
        }
        static Factory2()
        {
        }
        public override object New()
        {
            var self = new MenuContent();
            return self;
        }
    }
    yoobic_FuseControlsPanel_object_Items_Property temp_Items_inst;
    yoobic_FuseTranslation_float_X_Property mainAppTranslation_X_inst;
    yoobic_FuseControlsPanel_object_Items_Property menu_Items_inst;
    yoobic_FuseControlsEdgeNavigator_FuseNode_Active_Property temp1_Active_inst;
    internal Fuse.Controls.DockPanel main;
    internal Fuse.Translation mainAppTranslation;
    internal Fuse.Controls.Panel menu;
    internal Fuse.Reactive.EventBinding temp_eb3;
    static Menu()
    {
    }
    public Menu()
    {
        InitializeUX();
    }
    internal void InitializeUX()
    {
        var temp = new Fuse.Controls.Panel();
        temp_Items_inst = new yoobic_FuseControlsPanel_object_Items_Property(temp);
        mainAppTranslation = new Fuse.Translation();
        mainAppTranslation_X_inst = new yoobic_FuseTranslation_float_X_Property(mainAppTranslation);
        menu = new Fuse.Controls.Panel();
        menu_Items_inst = new yoobic_FuseControlsPanel_object_Items_Property(menu);
        var temp1 = new Fuse.Controls.EdgeNavigator();
        temp1_Active_inst = new yoobic_FuseControlsEdgeNavigator_FuseNode_Active_Property(temp1);
        main = new Fuse.Controls.DockPanel();
        var temp2 = new Factory(this);
        var temp3 = new Factory1(this);
        var temp4 = new Fuse.Reactive.DataBinding<object>(temp_Items_inst, "router_outlet");
        var temp5 = new Factory2(this);
        var temp6 = new Fuse.Navigation.ActivatingAnimation();
        var temp7 = new Fuse.Animations.Change<float>(mainAppTranslation_X_inst);
        var temp8 = new Fuse.Reactive.DataBinding<object>(menu_Items_inst, "children1");
        temp_eb3 = new Fuse.Reactive.EventBinding("callback0");
        var temp9 = new Fuse.Reactive.DataBinding<Fuse.Node>(temp1_Active_inst, "var0");
        temp1.HitTestMode = Fuse.Elements.HitTestMode.LocalBoundsAndChildren;
        temp1.Children.Add(main);
        temp1.Children.Add(menu);
        temp1.Behaviors.Add(temp9);
        main.ClipToBounds = true;
        main.Name = "main";
        main.Children.Add(temp);
        main.Transforms.Add(mainAppTranslation);
        temp.MatchKey = "type";
        temp.Factories.Add(temp2);
        temp.Factories.Add(temp3);
        temp.Behaviors.Add(temp4);
        menu.MatchKey = "type";
        menu.Width = 250f;
        menu.Name = "menu";
        global::Fuse.Navigation.EdgeNavigation.SetEdge(menu, Fuse.Navigation.NavigationEdge.Left);
        global::Fuse.Gestures.Clicked.AddHandler(menu, temp_eb3.OnEvent);
        menu.Background = YooStyle.DarkBg;
        menu.Factories.Add(temp5);
        menu.Behaviors.Add(temp8);
        menu.Behaviors.Add(temp_eb3);
        menu.Behaviors.Add(temp6);
        temp6.Animators.Add(temp7);
        temp7.Value = 250f;
        this.Children.Add(temp1);
    }
}
