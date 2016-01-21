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
        public Factory1(Menu parent): base("Menu_Scope2", false)
        {
            __parent = parent;
        }
        yoobic_FuseDrawingImageFill_string_Url_Property temp_Url_inst;
        yoobic_FuseControlsTextControl_string_Value_Property temp1_Value_inst;
        internal Fuse.Reactive.EventBinding temp_eb4;
        static Factory1()
        {
        }
        public override object New()
        {
            var self = new Fuse.Controls.StackPanel();
            var temp = new Fuse.Drawing.ImageFill();
            temp_Url_inst = new yoobic_FuseDrawingImageFill_string_Url_Property(temp);
            var temp1 = new Fuse.Controls.Text();
            temp1_Value_inst = new yoobic_FuseControlsTextControl_string_Value_Property(temp1);
            var temp2 = new Fuse.Controls.Panel();
            var temp3 = new Fuse.Controls.Circle();
            var temp4 = new Fuse.Drawing.Stroke();
            var temp5 = new Fuse.Reactive.DataBinding<string>(temp_Url_inst, "var0");
            var temp6 = new Fuse.Reactive.DataBinding<string>(temp1_Value_inst, "var1");
            var temp7 = new Fuse.Controls.Text();
            var temp_eb4 = new Fuse.Reactive.EventBinding("callback0");
            self.Name = "user";
            temp2.Height = 30f;
            temp3.Width = 85f;
            temp3.Height = 85f;
            temp3.Fills.Add(temp);
            temp3.Strokes.Add(temp4);
            temp3.Behaviors.Add(temp5);
            temp4.Width = 1f;
            temp4.Brush = YooStyle.BalancedBg;
            temp1.Behaviors.Add(temp6);
            temp7.Value = "Logout";
            global::Fuse.Gestures.Clicked.AddHandler(temp7, temp_eb4.OnEvent);
            temp7.Behaviors.Add(temp_eb4);
            self.Children.Add(temp2);
            self.Children.Add(temp3);
            self.Children.Add(temp1);
            self.Children.Add(temp7);
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
        var temp3 = new Fuse.Reactive.DataBinding<object>(temp_Items_inst, "router_outlet");
        var user = new Factory1(this);
        var temp4 = new Fuse.Navigation.ActivatingAnimation();
        var temp5 = new Fuse.Animations.Change<float>(mainAppTranslation_X_inst);
        var temp6 = new Fuse.Reactive.DataBinding<object>(menu_Items_inst, "children1");
        temp_eb3 = new Fuse.Reactive.EventBinding("callback0");
        var temp7 = new Fuse.Reactive.DataBinding<Fuse.Node>(temp1_Active_inst, "var0");
        temp1.HitTestMode = Fuse.Elements.HitTestMode.LocalBoundsAndChildren;
        temp1.Children.Add(main);
        temp1.Children.Add(menu);
        temp1.Behaviors.Add(temp7);
        main.ClipToBounds = true;
        main.Name = "main";
        main.Children.Add(temp);
        main.Transforms.Add(mainAppTranslation);
        temp.MatchKey = "type";
        temp.Factories.Add(temp2);
        temp.Behaviors.Add(temp3);
        menu.MatchKey = "type";
        menu.Width = 250f;
        menu.Name = "menu";
        global::Fuse.Navigation.EdgeNavigation.SetEdge(menu, Fuse.Navigation.NavigationEdge.Left);
        global::Fuse.Gestures.Clicked.AddHandler(menu, temp_eb3.OnEvent);
        menu.Background = YooStyle.DarkBg;
        menu.Factories.Add(user);
        menu.Behaviors.Add(temp6);
        menu.Behaviors.Add(temp_eb3);
        menu.Behaviors.Add(temp4);
        temp4.Animators.Add(temp5);
        temp5.Value = 250f;
        this.Children.Add(temp1);
    }
}
