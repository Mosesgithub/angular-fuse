public partial class Login: Fuse.Controls.DockPanel
{
    yoobic_FuseElementsElement_float_Opacity_Property this_Opacity_inst;
    internal Fuse.Reactive.EventBinding temp_eb0;
    internal Fuse.Reactive.EventBinding temp_eb1;
    internal Fuse.Controls.Button SignUpButton;
    internal Fuse.Reactive.EventBinding temp_eb2;
    static Login()
    {
    }
    public Login()
    {
        InitializeUX();
    }
    internal void InitializeUX()
    {
        this_Opacity_inst = new yoobic_FuseElementsElement_float_Opacity_Property(this);
        var temp = new Fuse.Controls.Rectangle();
        var temp1 = new Fuse.Controls.Image();
        var temp2 = new Fuse.Controls.StackPanel();
        var temp3 = new Fuse.Controls.Grid();
        var temp4 = new Fuse.Controls.Button();
        temp_eb0 = new Fuse.Reactive.EventBinding("callback0");
        var temp5 = new Fuse.Controls.Button();
        temp_eb1 = new Fuse.Reactive.EventBinding("callback1");
        SignUpButton = new Fuse.Controls.Button();
        temp_eb2 = new Fuse.Reactive.EventBinding("callback2");
        var temp6 = new Fuse.Controls.Video();
        var temp7 = new Fuse.Controls.Rectangle();
        var temp8 = new Fuse.Triggers.AddingAnimation();
        var temp9 = new Fuse.Animations.Move();
        var temp10 = new Fuse.Triggers.RemovingAnimation();
        var temp11 = new Fuse.Animations.Move();
        var temp12 = new Fuse.Animations.Change<float>(this_Opacity_inst);
        this.Name = "MySelf";
        temp.Height = 200f;
        temp.Children.Add(temp1);
        temp1.File = new global::Uno.UX.BundleFileSource(import global::Uno.BundleFile("../../scripts/yoobic/components/login/ressources/logo_collective_w.png"));
        temp2.Margin = float4(30f, 30f, 30f, 30f);
        global::Fuse.Controls.DockPanel.SetDock(temp2, Fuse.Layouts.Dock.Bottom);
        temp2.Children.Add(temp3);
        temp3.RowCount = 2;
        temp3.ColumnCount = 2;
        temp3.Margin = float4(0f, 0f, 0f, 0f);
        temp3.Children.Add(temp4);
        temp3.Children.Add(temp5);
        temp3.Children.Add(SignUpButton);
        temp4.Text = "Sign Up here";
        temp4.Height = 45f;
        temp4.Margin = float4(10f, 0f, 10f, 15f);
        global::Fuse.Controls.Grid.SetColumnSpan(temp4, 2);
        global::Fuse.Gestures.Clicked.AddHandler(temp4, temp_eb0.OnEvent);
        temp4.Behaviors.Add(temp_eb0);
        temp5.Text = "Login";
        temp5.Height = 45f;
        temp5.Margin = float4(10f, 0f, 5f, 10f);
        global::Fuse.Gestures.Clicked.AddHandler(temp5, temp_eb1.OnEvent);
        temp5.Behaviors.Add(temp_eb1);
        SignUpButton.Text = "Sign up";
        SignUpButton.Height = 45f;
        SignUpButton.Margin = float4(5f, 0f, 10f, 10f);
        SignUpButton.Name = "SignUpButton";
        global::Fuse.Gestures.Clicked.AddHandler(SignUpButton, temp_eb2.OnEvent);
        SignUpButton.Behaviors.Add(temp_eb2);
        temp6.IsLooping = true;
        temp6.AutoPlay = true;
        temp6.StretchMode = Fuse.Elements.StretchMode.UniformToFill;
        temp6.Padding = float4(-10f, -10f, -10f, -10f);
        temp6.Opacity = 0.3f;
        temp6.Layer = Fuse.Layer.Background;
        temp6.File = new global::Uno.UX.BundleFileSource(import global::Uno.BundleFile("../../scripts/yoobic/components/login/ressources/market.mp4"));
        temp6.Background = YooStyle.DarkBg;
        temp7.Layer = Fuse.Layer.Background;
        temp7.Fill = YooStyle.DarkBg;
        temp8.Animators.Add(temp9);
        temp9.X = -1f;
        temp9.Easing = Fuse.Animations.Easing.CircularInOut;
        temp9.Duration = 0.5;
        temp9.RelativeTo = Fuse.TranslationModes.Size;
        temp10.Animators.Add(temp11);
        temp10.Animators.Add(temp12);
        temp11.X = -0.5f;
        temp11.Easing = Fuse.Animations.Easing.CircularInOut;
        temp11.Duration = 0.5;
        temp11.RelativeTo = Fuse.TranslationModes.Size;
        temp12.Value = 0f;
        temp12.Easing = Fuse.Animations.Easing.CircularInOut;
        temp12.Duration = 0.5;
        this.Children.Add(temp);
        this.Children.Add(temp2);
        this.Children.Add(temp6);
        this.Children.Add(temp7);
        this.Behaviors.Add(temp8);
        this.Behaviors.Add(temp10);
    }
}
