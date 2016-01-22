public partial class MenuContent: Fuse.Controls.StackPanel
{
    public partial class Factory: Uno.UX.Factory
    {
        internal readonly MenuContent __parent;
        public Factory(MenuContent parent): base("MenuContent_Scope1", false)
        {
            __parent = parent;
        }
        yoobic_FuseDrawingImageFill_string_Url_Property temp_Url_inst;
        yoobic_FuseControlsTextControl_string_Value_Property temp1_Value_inst;
        static Factory()
        {
        }
        public override object New()
        {
            var self = new Fuse.Controls.StackPanel();
            var temp = new Fuse.Drawing.ImageFill();
            temp_Url_inst = new yoobic_FuseDrawingImageFill_string_Url_Property(temp);
            var temp1 = new Username();
            temp1_Value_inst = new yoobic_FuseControlsTextControl_string_Value_Property(temp1);
            var temp2 = new Fuse.Controls.Panel();
            var temp3 = new Fuse.Controls.Circle();
            var temp4 = new Fuse.Drawing.Stroke();
            var temp5 = new Fuse.Reactive.DataBinding<string>(temp_Url_inst, "var0");
            var temp6 = new Fuse.Reactive.DataBinding<string>(temp1_Value_inst, "var1");
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
            self.Children.Add(temp2);
            self.Children.Add(temp3);
            self.Children.Add(temp1);
            return self;
        }
    }
    public partial class Factory1: Uno.UX.Factory
    {
        internal readonly MenuContent __parent;
        public Factory1(MenuContent parent): base("MenuContent_Scope2", false)
        {
            __parent = parent;
        }
        yoobic_FuseControlsTextControl_string_Value_Property temp_Value_inst;
        yoobic_FuseControlsTextControl_string_Value_Property temp1_Value_inst;
        yoobic_FuseElementsElement_float_Opacity_Property self_Opacity_inst;
        yoobic_FuseAnimationsTrackAnimator_double_DelayBack_Property temp2_DelayBack_inst;
        yoobic_FuseAnimationsTrackAnimator_double_DelayBack_Property temp3_DelayBack_inst;
        internal Fuse.Reactive.EventBinding temp_eb4;
        static Factory1()
        {
        }
        public override object New()
        {
            var self = new Fuse.Controls.StackPanel();
            var temp = new MenuIcon();
            temp_Value_inst = new yoobic_FuseControlsTextControl_string_Value_Property(temp);
            var temp1 = new MenuLabel();
            temp1_Value_inst = new yoobic_FuseControlsTextControl_string_Value_Property(temp1);
            self_Opacity_inst = new yoobic_FuseElementsElement_float_Opacity_Property(self);
            var temp2 = new Fuse.Animations.Move();
            temp2_DelayBack_inst = new yoobic_FuseAnimationsTrackAnimator_double_DelayBack_Property(temp2);
            var temp3 = new Fuse.Animations.Change<float>(self_Opacity_inst);
            temp3_DelayBack_inst = new yoobic_FuseAnimationsTrackAnimator_double_DelayBack_Property(temp3);
            var temp4 = new Fuse.Reactive.DataToResourceBinding<string>(temp_Value_inst, "icon");
            var temp5 = new Fuse.Reactive.DataBinding<string>(temp1_Value_inst, "var0");
            var temp6 = new Fuse.Navigation.WhileInactive();
            var temp7 = new Fuse.Reactive.DataBinding<double>(temp2_DelayBack_inst, "var1");
            var temp8 = new Fuse.Reactive.DataBinding<double>(temp3_DelayBack_inst, "var2");
            var temp_eb4 = new Fuse.Reactive.EventBinding("callback0");
            self.HitTestMode = Fuse.Elements.HitTestMode.LocalBounds;
            self.Margin = float4(10f, 10f, 10f, 10f);
            self.Name = "menuContent";
            global::Fuse.Gestures.Clicked.AddHandler(self, temp_eb4.OnEvent);
            temp.Behaviors.Add(temp4);
            temp1.Behaviors.Add(temp5);
            temp6.Animators.Add(temp2);
            temp6.Animators.Add(temp3);
            temp2.X = -1f;
            temp2.Easing = Fuse.Animations.Easing.CircularIn;
            temp2.Duration = 0.3;
            temp2.RelativeTo = Fuse.TranslationModes.Size;
            temp3.Value = 0f;
            temp3.Easing = Fuse.Animations.Easing.CircularIn;
            temp3.Duration = 0.3;
            self.Children.Add(temp);
            self.Children.Add(temp1);
            self.Behaviors.Add(temp7);
            self.Behaviors.Add(temp8);
            self.Behaviors.Add(temp_eb4);
            self.Behaviors.Add(temp6);
            return self;
        }
    }
    yoobic_FuseElementsElement_float_Opacity_Property stats_Opacity_inst;
    yoobic_FuseControlsPanel_object_Items_Property temp_Items_inst;
    yoobic_FuseControlsPanel_object_Items_Property this_Items_inst;
    internal Fuse.Controls.Grid stats;
    static MenuContent()
    {
    }
    public MenuContent()
    {
        InitializeUX();
    }
    internal void InitializeUX()
    {
        stats = new Fuse.Controls.Grid();
        stats_Opacity_inst = new yoobic_FuseElementsElement_float_Opacity_Property(stats);
        var temp = new Fuse.Controls.StackPanel();
        temp_Items_inst = new yoobic_FuseControlsPanel_object_Items_Property(temp);
        this_Items_inst = new yoobic_FuseControlsPanel_object_Items_Property(this);
        var user = new Factory(this);
        var temp1 = new Fuse.Controls.StackPanel();
        var temp2 = new Stats();
        var temp3 = new Relations();
        var temp4 = new Fuse.Controls.Rectangle();
        var temp5 = new Fuse.Drawing.SolidColor();
        var temp6 = new Fuse.Controls.StackPanel();
        var temp7 = new Stats();
        var temp8 = new Relations();
        var temp9 = new Fuse.Navigation.WhileInactive();
        var temp10 = new Fuse.Animations.Move();
        var temp11 = new Fuse.Animations.Change<float>(stats_Opacity_inst);
        var menuContent = new Factory1(this);
        var temp12 = new Fuse.Reactive.DataBinding<object>(temp_Items_inst, "children1");
        var temp13 = new Fuse.Reactive.DataBinding<object>(this_Items_inst, "children0");
        this.MatchKey = "type";
        stats.ColumnCount = 3;
        stats.Alignment = Fuse.Elements.Alignment.HorizontalCenter;
        stats.Margin = float4(0f, 30f, 0f, 15f);
        stats.Name = "stats";
        stats.Children.Add(temp1);
        stats.Children.Add(temp4);
        stats.Children.Add(temp6);
        stats.Behaviors.Add(temp9);
        temp1.Width = 70f;
        temp1.Children.Add(temp2);
        temp1.Children.Add(temp3);
        temp2.Value = "139";
        temp3.Value = "Finished";
        temp4.Width = 1f;
        temp4.Height = 40f;
        temp4.Fills.Add(temp5);
        temp5.Color = float4(0.254902f, 0.3098039f, 0.3686275f, 1f);
        temp6.Width = 70f;
        temp6.Children.Add(temp7);
        temp6.Children.Add(temp8);
        temp7.Value = "100";
        temp8.Value = "Validated";
        temp9.Animators.Add(temp10);
        temp9.Animators.Add(temp11);
        temp10.X = -1f;
        temp10.Easing = Fuse.Animations.Easing.CircularIn;
        temp10.Duration = 0.3;
        temp10.RelativeTo = Fuse.TranslationModes.Size;
        temp11.Value = 0f;
        temp11.Duration = 0.3;
        temp.MatchKey = "type";
        temp.Factories.Add(menuContent);
        temp.Behaviors.Add(temp12);
        this.Children.Add(stats);
        this.Children.Add(temp);
        this.Factories.Add(user);
        this.Behaviors.Add(temp13);
    }
}
