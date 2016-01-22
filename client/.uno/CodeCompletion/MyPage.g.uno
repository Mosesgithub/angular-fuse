public partial class MyPage: Fuse.Controls.Page
{
    string _field_test;
    [global::Uno.UX.UXValueChangedEvent("Settest", "testChanged")]
    public string test
    {
        get { return _field_test; }
        set { Settest(value, null); }
    }
    public event global::Uno.UX.ValueChangedHandler<string> testChanged;
    public void Settest(string value, object origin)
    {
        if (value != _field_test)
        {
            _field_test = value;
            var args = new global::Uno.UX.ValueChangedArgs<string>(value, origin);
            if (testChanged != null) testChanged(this, args);
        }
    }
    static MyPage()
    {
    }
    public MyPage()
    {
        InitializeUX();
    }
    internal void InitializeUX()
    {
        var temp = new Fuse.Controls.Rectangle();
        var temp1 = new Fuse.Scaling();
        var temp2 = new Fuse.Navigation.EnteringAnimation();
        var temp3 = new Fuse.Animations.Move();
        var temp4 = new Fuse.Navigation.ExitingAnimation();
        var temp5 = new Fuse.Animations.Move();
        Fuse.Elements.Element.WidthProperty.Set(this, 100f, global::Fuse.Elements.SizeUnit.Percent);
        Fuse.Elements.Element.HeightProperty.Set(this, 100f, global::Fuse.Elements.SizeUnit.Percent);
        this.Alignment = Fuse.Elements.Alignment.Center;
        this.test = "apap";
        temp.Layer = Fuse.Layer.Background;
        temp.Fill = YooStyle.StableBg;
        temp1.Factor = 0.5f;
        temp2.Scale = 0.05f;
        temp2.Animators.Add(temp3);
        temp3.X = -2f;
        temp3.Easing = Fuse.Animations.Easing.CubicOut;
        temp3.RelativeTo = Fuse.TranslationModes.Size;
        temp4.Scale = 0.05f;
        temp4.Animators.Add(temp5);
        temp5.X = 2f;
        temp5.Easing = Fuse.Animations.Easing.CubicOut;
        temp5.RelativeTo = Fuse.TranslationModes.Size;
        this.Children.Add(temp);
        this.Behaviors.Add(temp2);
        this.Behaviors.Add(temp4);
        this.Transforms.Add(temp1);
    }
}
