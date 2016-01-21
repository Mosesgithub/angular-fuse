public partial class MissionsList: Fuse.Controls.DockPanel
{
    public partial class Factory: Uno.UX.Factory
    {
        internal readonly MissionsList __parent;
        public Factory(MissionsList parent): base("MissionsList_Scope1", false)
        {
            __parent = parent;
        }
        public partial class Factory1: Uno.UX.Factory
        {
            internal readonly Factory __parent;
            public Factory1(Factory parent): base("MissionsList_Scope2", false)
            {
                __parent = parent;
            }
            static Factory1()
            {
            }
            public override object New()
            {
                var self = new MissionCard();
                return self;
            }
        }
        yoobic_FuseControlsPanel_object_Items_Property self_Items_inst;
        static Factory()
        {
        }
        public override object New()
        {
            var self = new Fuse.Controls.Panel();
            self_Items_inst = new yoobic_FuseControlsPanel_object_Items_Property(self);
            var temp = new Factory1(this);
            var temp1 = new Fuse.Reactive.DataBinding<object>(self_Items_inst, "children0");
            self.MatchKey = "type";
            self.Margin = float4(10f, 10f, 10f, 5f);
            self.Factories.Add(temp);
            self.Behaviors.Add(temp1);
            return self;
        }
    }
    yoobic_FuseControlsTextControl_float4_TextColor_Property temp_TextColor_inst;
    yoobic_FuseControlsTextControl_string_Value_Property temp_Value_inst;
    yoobic_FuseControlsTextControl_float4_TextColor_Property temp1_TextColor_inst;
    yoobic_FuseControlsTextControl_string_Value_Property temp1_Value_inst;
    yoobic_FuseControlsPanel_object_Items_Property temp2_Items_inst;
    internal Fuse.Reactive.EventBinding temp_eb5;
    internal Fuse.Reactive.EventBinding temp_eb6;
    internal Fuse.Controls.ScrollView mainLayout;
    static MissionsList()
    {
    }
    public MissionsList()
    {
        InitializeUX();
    }
    internal void InitializeUX()
    {
        var temp = new Fuse.Controls.Text();
        temp_TextColor_inst = new yoobic_FuseControlsTextControl_float4_TextColor_Property(temp);
        temp_Value_inst = new yoobic_FuseControlsTextControl_string_Value_Property(temp);
        var temp1 = new Fuse.Controls.Text();
        temp1_TextColor_inst = new yoobic_FuseControlsTextControl_float4_TextColor_Property(temp1);
        temp1_Value_inst = new yoobic_FuseControlsTextControl_string_Value_Property(temp1);
        var temp2 = new Fuse.Controls.StackPanel();
        temp2_Items_inst = new yoobic_FuseControlsPanel_object_Items_Property(temp2);
        var temp3 = new HeaderBar();
        var temp4 = new Fuse.Controls.Rectangle();
        var temp5 = new Fuse.Resources.ResourceBinding<float4>(temp_TextColor_inst, "Balanced");
        var temp6 = new Fuse.Resources.ResourceBinding<string>(temp_Value_inst, "yo-menu");
        temp_eb5 = new Fuse.Reactive.EventBinding("callback0");
        var temp7 = new Fuse.Controls.Rectangle();
        var temp8 = new Fuse.Resources.ResourceBinding<float4>(temp1_TextColor_inst, "Balanced");
        var temp9 = new Fuse.Resources.ResourceBinding<string>(temp1_Value_inst, "yo-refresh");
        temp_eb6 = new Fuse.Reactive.EventBinding("callback1");
        var temp10 = new Fuse.UserEvent("SelectItem");
        var temp11 = new MissionDetailCard();
        mainLayout = new Fuse.Controls.ScrollView();
        var temp12 = new Factory(this);
        var temp13 = new Fuse.Reactive.DataBinding<object>(temp2_Items_inst, "children0");
        var temp14 = new Fuse.Triggers.AddingAnimation();
        var temp15 = new Fuse.Animations.Move();
        var temp16 = new Fuse.Triggers.RemovingAnimation();
        var temp17 = new Fuse.Animations.Move();
        temp3.Title = "My Missions";
        global::Fuse.Controls.DockPanel.SetDock(temp3, Fuse.Layouts.Dock.Top);
        temp3.Background = YooStyle.LightBg;
        temp3.LeftIcons.Add(temp4);
        temp3.RightIcons.Add(temp7);
        temp4.Width = 45f;
        temp4.Height = 45f;
        temp4.Children.Add(temp);
        temp.FontSize = 24f;
        temp.Alignment = Fuse.Elements.Alignment.Center;
        temp.Padding = float4(5f, 5f, 5f, 5f);
        global::Fuse.Controls.DockPanel.SetDock(temp, Fuse.Layouts.Dock.Left);
        global::Fuse.Gestures.Clicked.AddHandler(temp, temp_eb5.OnEvent);
        temp.Font = YooStyle.YoobicF;
        temp.Behaviors.Add(temp5);
        temp.Behaviors.Add(temp6);
        temp.Behaviors.Add(temp_eb5);
        temp7.Width = 45f;
        temp7.Height = 45f;
        temp7.Children.Add(temp1);
        temp1.FontSize = 24f;
        temp1.Alignment = Fuse.Elements.Alignment.Center;
        temp1.Padding = float4(5f, 5f, 5f, 5f);
        global::Fuse.Controls.DockPanel.SetDock(temp1, Fuse.Layouts.Dock.Left);
        global::Fuse.Gestures.Clicked.AddHandler(temp1, temp_eb6.OnEvent);
        temp1.Font = YooStyle.YoobicF;
        temp1.Behaviors.Add(temp8);
        temp1.Behaviors.Add(temp9);
        temp1.Behaviors.Add(temp_eb6);
        global::Fuse.Controls.DockPanel.SetDock(temp11, Fuse.Layouts.Dock.Top);
        mainLayout.Name = "mainLayout";
        mainLayout.Content = temp2;
        temp2.MatchKey = "type";
        temp2.Factories.Add(temp12);
        temp2.Behaviors.Add(temp13);
        temp14.Animators.Add(temp15);
        temp15.X = -1f;
        temp15.Easing = Fuse.Animations.Easing.CircularInOut;
        temp15.Duration = 0.5;
        temp15.RelativeTo = Fuse.TranslationModes.Size;
        temp16.Animators.Add(temp17);
        temp17.X = 1f;
        temp17.Easing = Fuse.Animations.Easing.CircularInOut;
        temp17.Duration = 0.5;
        temp17.RelativeTo = Fuse.TranslationModes.Size;
        this.Background = YooStyle.StableBg;
        this.Children.Add(temp3);
        this.Children.Add(temp11);
        this.Children.Add(mainLayout);
        this.Behaviors.Add(temp10);
        this.Behaviors.Add(temp14);
        this.Behaviors.Add(temp16);
    }
}
