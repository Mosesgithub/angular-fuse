public partial class MissionForm: Fuse.Controls.Panel
{
    public partial class Factory: Uno.UX.Factory
    {
        internal readonly MissionForm __parent;
        public Factory(MissionForm parent): base("MissionForm_Scope1", false)
        {
            __parent = parent;
        }
        public partial class Factory1: Uno.UX.Factory
        {
            internal readonly Factory __parent;
            public Factory1(Factory parent): base("MissionForm_Scope2", false)
            {
                __parent = parent;
            }
            public partial class Factory2: Uno.UX.Factory
            {
                internal readonly Factory1 __parent;
                public Factory2(Factory1 parent): base("MissionForm_Scope3", false)
                {
                    __parent = parent;
                }
                yoobic_FuseControlsTextControl_string_Value_Property temp_Value_inst;
                internal Fuse.Reactive.EventBinding temp_eb7;
                static Factory2()
                {
                }
                public override object New()
                {
                    var self = new Fuse.Controls.Rectangle();
                    var temp = new Fuse.Controls.Text();
                    temp_Value_inst = new yoobic_FuseControlsTextControl_string_Value_Property(temp);
                    var temp1 = new Fuse.Drawing.Stroke();
                    var temp2 = new Fuse.Drawing.StaticSolidColor(float4(0.9176471f, 0.9176471f, 0.9176471f, 1f));
                    var temp3 = new Fuse.Reactive.DataBinding<string>(temp_Value_inst, "var0");
                    var temp_eb7 = new Fuse.Reactive.EventBinding("callback0");
                    self.Height = 30f;
                    self.Margin = float4(10f, 10f, 10f, 10f);
                    temp1.Width = 1f;
                    temp1.Brush = temp2;
                    temp.Alignment = Fuse.Elements.Alignment.VerticalCenter;
                    temp.Margin = float4(3f, 3f, 3f, 3f);
                    global::Fuse.Gestures.Clicked.AddHandler(temp, temp_eb7.OnEvent);
                    temp.Behaviors.Add(temp3);
                    temp.Behaviors.Add(temp_eb7);
                    self.Fill = YooStyle.LightBg;
                    self.Strokes.Add(temp1);
                    self.Children.Add(temp);
                    return self;
                }
            }
            yoobic_FuseControlsTextControl_float4_TextColor_Property temp_TextColor_inst;
            yoobic_FuseControlsTextControl_string_Value_Property temp_Value_inst;
            yoobic_FuseControlsTextControl_float4_TextColor_Property temp1_TextColor_inst;
            yoobic_FuseControlsTextControl_string_Value_Property temp1_Value_inst;
            yoobic_HeaderBar_string_Title_Property temp2_Title_inst;
            yoobic_FuseControlsImage_string_Url_Property headerImage_Url_inst;
            yoobic_FuseControlsTextControl_string_Value_Property headerText_Value_inst;
            yoobic_FuseControlsPanel_object_Items_Property temp3_Items_inst;
            internal Fuse.Reactive.EventBinding temp_eb6;
            internal Fuse.Controls.Rectangle headerOverlayMask;
            internal Fuse.Controls.Image headerImage;
            internal Fuse.Controls.Text headerText;
            static Factory1()
            {
            }
            public override object New()
            {
                var self = new MyPage();
                var temp = new Fuse.Controls.Text();
                temp_TextColor_inst = new yoobic_FuseControlsTextControl_float4_TextColor_Property(temp);
                temp_Value_inst = new yoobic_FuseControlsTextControl_string_Value_Property(temp);
                var temp1 = new Fuse.Controls.Text();
                temp1_TextColor_inst = new yoobic_FuseControlsTextControl_float4_TextColor_Property(temp1);
                temp1_Value_inst = new yoobic_FuseControlsTextControl_string_Value_Property(temp1);
                var temp2 = new HeaderBar();
                temp2_Title_inst = new yoobic_HeaderBar_string_Title_Property(temp2);
                var headerImage = new Fuse.Controls.Image();
                headerImage_Url_inst = new yoobic_FuseControlsImage_string_Url_Property(headerImage);
                var headerText = new Fuse.Controls.Text();
                headerText_Value_inst = new yoobic_FuseControlsTextControl_string_Value_Property(headerText);
                var temp3 = new Fuse.Controls.StackPanel();
                temp3_Items_inst = new yoobic_FuseControlsPanel_object_Items_Property(temp3);
                var temp4 = new Fuse.Controls.DockPanel();
                var temp5 = new Fuse.Controls.Rectangle();
                var temp6 = new Fuse.Resources.ResourceBinding<float4>(temp_TextColor_inst, "Balanced");
                var temp7 = new Fuse.Resources.ResourceBinding<string>(temp_Value_inst, "yo-menu");
                var temp_eb6 = new Fuse.Reactive.EventBinding("callback0");
                var temp8 = new Fuse.Controls.Rectangle();
                var temp9 = new Fuse.Resources.ResourceBinding<float4>(temp1_TextColor_inst, "Balanced");
                var temp10 = new Fuse.Resources.ResourceBinding<string>(temp1_Value_inst, "yo-refresh");
                var temp11 = new Fuse.Reactive.DataBinding<string>(temp2_Title_inst, "var0");
                var temp12 = new Fuse.Controls.Panel();
                var headerOverlayMask = new Fuse.Controls.Rectangle();
                var temp13 = new Fuse.Reactive.DataBinding<string>(headerImage_Url_inst, "var1");
                var temp14 = new Fuse.Reactive.DataBinding<string>(headerText_Value_inst, "var2");
                var temp15 = new Fuse.Controls.Panel();
                var temp16 = new Fuse.Controls.ScrollView();
                var temp17 = new Factory2(this);
                var temp18 = new Fuse.Reactive.DataBinding<object>(temp3_Items_inst, "children0");
                var temp19 = new Fuse.Triggers.ScrollingAnimation();
                var temp20 = new Fuse.Animations.Scale();
                var temp21 = new Fuse.Animations.Scale();
                var temp22 = new Fuse.Animations.Move();
                var temp23 = new Fuse.Animations.Move();
                var temp24 = new Fuse.Animations.Move();
                self.Name = "summary";
                temp4.Children.Add(temp2);
                temp4.Children.Add(temp12);
                temp4.Children.Add(temp15);
                global::Fuse.Controls.DockPanel.SetDock(temp2, Fuse.Layouts.Dock.Top);
                temp2.Background = YooStyle.LightBg;
                temp2.LeftIcons.Add(temp5);
                temp2.RightIcons.Add(temp8);
                temp2.Behaviors.Add(temp11);
                temp5.Width = 45f;
                temp5.Height = 45f;
                temp5.Children.Add(temp);
                temp.FontSize = 24f;
                temp.Alignment = Fuse.Elements.Alignment.Center;
                temp.Padding = float4(5f, 5f, 5f, 5f);
                global::Fuse.Controls.DockPanel.SetDock(temp, Fuse.Layouts.Dock.Left);
                global::Fuse.Gestures.Clicked.AddHandler(temp, temp_eb6.OnEvent);
                temp.Font = YooStyle.YoobicF;
                temp.Behaviors.Add(temp6);
                temp.Behaviors.Add(temp7);
                temp.Behaviors.Add(temp_eb6);
                temp8.Width = 45f;
                temp8.Height = 45f;
                temp8.Children.Add(temp1);
                temp1.FontSize = 24f;
                temp1.Alignment = Fuse.Elements.Alignment.Center;
                temp1.Padding = float4(5f, 5f, 5f, 5f);
                global::Fuse.Controls.DockPanel.SetDock(temp1, Fuse.Layouts.Dock.Left);
                temp1.Font = YooStyle.YoobicF;
                temp1.Behaviors.Add(temp9);
                temp1.Behaviors.Add(temp10);
                global::Fuse.Controls.DockPanel.SetDock(temp12, Fuse.Layouts.Dock.Top);
                temp12.Children.Add(headerOverlayMask);
                temp12.Children.Add(headerImage);
                temp12.Children.Add(headerText);
                headerOverlayMask.Opacity = 0.6f;
                headerOverlayMask.Name = "headerOverlayMask";
                headerOverlayMask.Fill = YooStyle.BlackBg;
                headerImage.Name = "headerImage";
                headerImage.Behaviors.Add(temp13);
                headerText.TextColor = float4(1f, 1f, 1f, 1f);
                headerText.Alignment = Fuse.Elements.Alignment.Center;
                headerText.Name = "headerText";
                headerText.Layer = Fuse.Layer.Overlay;
                headerText.Behaviors.Add(temp14);
                global::Fuse.Controls.DockPanel.SetDock(temp15, Fuse.Layouts.Dock.Fill);
                temp15.Children.Add(temp16);
                temp16.Content = temp3;
                temp16.Behaviors.Add(temp19);
                temp3.MatchKey = "type";
                temp3.Factories.Add(temp17);
                temp3.Behaviors.Add(temp18);
                temp19.From = 0f;
                temp19.To = -1000f;
                temp19.Animators.Add(temp20);
                temp19.Animators.Add(temp21);
                temp19.Animators.Add(temp22);
                temp19.Animators.Add(temp23);
                temp19.Animators.Add(temp24);
                temp20.Factor = 4f;
                temp20.Target = headerImage;
                temp21.Factor = 4f;
                temp21.Target = headerOverlayMask;
                temp22.Y = 200f;
                temp22.Target = headerImage;
                temp23.Y = 200f;
                temp23.Target = headerOverlayMask;
                temp24.Y = 200f;
                temp24.Target = headerText;
                self.Children.Add(temp4);
                return self;
            }
        }
        public partial class Factory2: Uno.UX.Factory
        {
            internal readonly Factory __parent;
            public Factory2(Factory parent): base("MissionForm_Scope4", false)
            {
                __parent = parent;
            }
            public partial class Factory3: Uno.UX.Factory
            {
                internal readonly Factory2 __parent;
                public Factory3(Factory2 parent): base("MissionForm_Scope5", false)
                {
                    __parent = parent;
                }
                yoobic_FuseControlsTextControl_string_Value_Property self_Value_inst;
                static Factory3()
                {
                }
                public override object New()
                {
                    var self = new Fuse.Controls.Text();
                    self_Value_inst = new yoobic_FuseControlsTextControl_string_Value_Property(self);
                    var temp = new Fuse.Reactive.DataBinding<string>(self_Value_inst, "var0");
                    self.Behaviors.Add(temp);
                    return self;
                }
            }
            public partial class Factory4: Uno.UX.Factory
            {
                internal readonly Factory2 __parent;
                public Factory4(Factory2 parent): base("MissionForm_Scope6", false)
                {
                    __parent = parent;
                }
                public partial class Factory5: Uno.UX.Factory
                {
                    internal readonly Factory4 __parent;
                    public Factory5(Factory4 parent): base("MissionForm_Scope7", false)
                    {
                        __parent = parent;
                    }
                    static Factory5()
                    {
                    }
                    public override object New()
                    {
                        var self = new Fuse.Controls.Text();
                        self.Value = "*";
                        return self;
                    }
                }
                yoobic_FuseControlsPanel_object_Items_Property temp_Items_inst;
                static Factory4()
                {
                }
                public override object New()
                {
                    var self = new Fuse.Controls.Panel();
                    var temp = new Fuse.Controls.StackPanel();
                    temp_Items_inst = new yoobic_FuseControlsPanel_object_Items_Property(temp);
                    var temp1 = new Factory5(this);
                    var temp2 = new Fuse.Reactive.DataBinding<object>(temp_Items_inst, "children0");
                    temp.MatchKey = "type";
                    temp.Factories.Add(temp1);
                    temp.Behaviors.Add(temp2);
                    self.Background = Fuse.Drawing.Brushes.Yellow;
                    self.Children.Add(temp);
                    return self;
                }
            }
            yoobic_FuseControlsPanel_object_Items_Property temp_Items_inst;
            yoobic_FuseNode_string_Name_Property self_Name_inst;
            static Factory2()
            {
            }
            public override object New()
            {
                var self = new MyPage();
                var temp = new Fuse.Controls.StackPanel();
                temp_Items_inst = new yoobic_FuseControlsPanel_object_Items_Property(temp);
                self_Name_inst = new yoobic_FuseNode_string_Name_Property(self);
                var temp1 = new Fuse.Controls.Panel();
                var temp2 = new Factory3(this);
                var temp3 = new Factory4(this);
                var temp4 = new Fuse.Reactive.DataBinding<object>(temp_Items_inst, "children0");
                var temp5 = new Fuse.Reactive.DataBinding<string>(self_Name_inst, "var0");
                temp1.Children.Add(temp);
                temp.MatchKey = "type";
                temp.Factories.Add(temp2);
                temp.Factories.Add(temp3);
                temp.Behaviors.Add(temp4);
                self.Children.Add(temp1);
                self.Behaviors.Add(temp5);
                return self;
            }
        }
        yoobic_FuseControlsPanel_object_Items_Property self_Items_inst;
        yoobic_FuseControlsPageControl_FuseNode_Active_Property self_Active_inst;
        static Factory()
        {
        }
        public override object New()
        {
            var self = new Fuse.Controls.PageControl();
            self_Items_inst = new yoobic_FuseControlsPanel_object_Items_Property(self);
            self_Active_inst = new yoobic_FuseControlsPageControl_FuseNode_Active_Property(self);
            var summary = new Factory1(this);
            var var0 = new Factory2(this);
            var temp = new Fuse.Reactive.DataBinding<object>(self_Items_inst, "children0");
            var temp1 = new Fuse.Reactive.DataBinding<Fuse.Node>(self_Active_inst, "var0");
            self.MatchKey = "type";
            self.Factories.Add(summary);
            self.Factories.Add(var0);
            self.Behaviors.Add(temp);
            self.Behaviors.Add(temp1);
            return self;
        }
    }
    yoobic_FuseControlsPanel_object_Items_Property this_Items_inst;
    static MissionForm()
    {
    }
    public MissionForm()
    {
        InitializeUX();
    }
    internal void InitializeUX()
    {
        this_Items_inst = new yoobic_FuseControlsPanel_object_Items_Property(this);
        var temp = new Fuse.Controls.Rectangle();
        var temp1 = new Factory(this);
        var temp2 = new Fuse.Reactive.DataBinding<object>(this_Items_inst, "children0");
        this.MatchKey = "type";
        temp.Layer = Fuse.Layer.Background;
        temp.Fill = YooStyle.DarkBg;
        this.Background = YooStyle.StableBg;
        this.Children.Add(temp);
        this.Factories.Add(temp1);
        this.Behaviors.Add(temp2);
    }
}
