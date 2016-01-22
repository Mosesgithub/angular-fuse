public partial class MissionDetailCard: Fuse.Controls.Panel
{
    yoobic_FuseElementsElement_float_Opacity_Property BackImageR_Opacity_inst;
    yoobic_FuseElementsElement_FuseElementsVisibility_Visibility_Property this_Visibility_inst;
    internal Fuse.Controls.Rectangle BigImageR;
    internal Fuse.Drawing.ImageFill BigImage;
    internal Fuse.Controls.Rectangle BackImageR;
    internal Fuse.Drawing.ImageFill BackImage;
    internal Fuse.Triggers.Actions.TransitionLayout BigTrans;
    static MissionDetailCard()
    {
    }
    public MissionDetailCard()
    {
        InitializeUX();
    }
    internal void InitializeUX()
    {
        BackImageR = new Fuse.Controls.Rectangle();
        BackImageR_Opacity_inst = new yoobic_FuseElementsElement_float_Opacity_Property(BackImageR);
        this_Visibility_inst = new yoobic_FuseElementsElement_FuseElementsVisibility_Visibility_Property(this);
        BigImageR = new Fuse.Controls.Rectangle();
        BigImage = new Fuse.Drawing.ImageFill();
        var temp = new Fuse.Triggers.LayoutAnimation();
        var temp1 = new Fuse.Animations.Move();
        var temp2 = new Fuse.Animations.Resize();
        var temp3 = new Fuse.Animations.Change<float>(BackImageR_Opacity_inst);
        BackImage = new Fuse.Drawing.ImageFill();
        var temp4 = new Fuse.Controls.Rectangle();
        var temp5 = new Fuse.Drawing.StaticSolidColor(float4(1f, 1f, 1f, 1f));
        var temp6 = new Fuse.Triggers.OnUserEvent();
        var temp7 = new Fuse.Triggers.Actions.Set<Fuse.Elements.Visibility>(this_Visibility_inst);
        BigTrans = new Fuse.Triggers.Actions.TransitionLayout();
        this.Height = 250f;
        this.Visibility = Fuse.Elements.Visibility.Collapsed;
        this.Name = "MySelf";
        BigImageR.Name = "BigImageR";
        BigImageR.Fills.Add(BigImage);
        BigImageR.Behaviors.Add(temp);
        BigImage.StretchMode = Fuse.Elements.StretchMode.UniformToFill;
        temp.Animators.Add(temp1);
        temp.Animators.Add(temp2);
        temp.Animators.Add(temp3);
        temp1.Vector = float3(1f, 1f, 1f);
        temp1.Easing = Fuse.Animations.Easing.SinusoidalInOut;
        temp1.Duration = 0.3;
        temp1.RelativeTo = Fuse.Triggers.LayoutTransition.WorldPositionChange;
        temp2.Vector = float2(1f, 1f);
        temp2.Easing = Fuse.Animations.Easing.SinusoidalInOut;
        temp2.Duration = 0.3;
        temp2.RelativeTo = Fuse.Triggers.LayoutTransition.ResizeSizeChange;
        temp3.Value = 1f;
        temp3.Duration = 0.3;
        BackImageR.Opacity = 0f;
        BackImageR.Name = "BackImageR";
        BackImageR.Fills.Add(BackImage);
        BackImage.StretchMode = Fuse.Elements.StretchMode.UniformToFill;
        temp4.Fill = temp5;
        temp6.Name = "SelectItem";
        temp6.Handler += SelectItem;
        temp6.Actions.Add(temp7);
        temp6.Actions.Add(BigTrans);
        temp7.Value = Fuse.Elements.Visibility.Visible;
        BigTrans.TargetNode = BigImageR;
        this.Children.Add(BigImageR);
        this.Children.Add(BackImageR);
        this.Children.Add(temp4);
        this.Behaviors.Add(temp6);
    }
}
