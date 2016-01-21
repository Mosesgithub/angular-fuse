public partial class MissionCard: Fuse.Controls.Panel
{
    yoobic_FuseControlsTextControl_float4_TextColor_Property temp_TextColor_inst;
    yoobic_FuseControlsTextControl_string_Value_Property temp_Value_inst;
    yoobic_Clicky_string_BackgroundUrl_Property temp1_BackgroundUrl_inst;
    yoobic_FuseControlsTextControl_float4_TextColor_Property temp2_TextColor_inst;
    yoobic_FuseControlsTextControl_string_Value_Property temp2_Value_inst;
    yoobic_FuseControlsTextControl_float4_TextColor_Property temp3_TextColor_inst;
    yoobic_FuseControlsTextControl_string_Value_Property temp3_Value_inst;
    internal Fuse.Controls.DockPanel missionCard;
    static MissionCard()
    {
    }
    public MissionCard()
    {
        InitializeUX();
    }
    internal void InitializeUX()
    {
        var temp = new Fuse.Controls.Text();
        temp_TextColor_inst = new yoobic_FuseControlsTextControl_float4_TextColor_Property(temp);
        temp_Value_inst = new yoobic_FuseControlsTextControl_string_Value_Property(temp);
        var temp1 = new Clicky();
        temp1_BackgroundUrl_inst = new yoobic_Clicky_string_BackgroundUrl_Property(temp1);
        var temp2 = new Fuse.Controls.Text();
        temp2_TextColor_inst = new yoobic_FuseControlsTextControl_float4_TextColor_Property(temp2);
        temp2_Value_inst = new yoobic_FuseControlsTextControl_string_Value_Property(temp2);
        var temp3 = new Fuse.Controls.Text();
        temp3_TextColor_inst = new yoobic_FuseControlsTextControl_float4_TextColor_Property(temp3);
        temp3_Value_inst = new yoobic_FuseControlsTextControl_string_Value_Property(temp3);
        missionCard = new Fuse.Controls.DockPanel();
        var temp4 = new Fuse.Controls.Rectangle();
        var temp5 = new Fuse.Drawing.Stroke();
        var temp6 = new Fuse.Controls.Rectangle();
        var temp7 = new Fuse.Controls.Grid();
        var temp8 = new Fuse.Controls.Rectangle();
        var temp9 = new Fuse.Controls.Panel();
        var temp10 = new Fuse.Resources.ResourceBinding<float4>(temp_TextColor_inst, "Light");
        var temp11 = new Fuse.Reactive.DataBinding<string>(temp_Value_inst, "var0");
        var temp12 = new Fuse.Controls.Rectangle();
        var temp13 = new Fuse.Reactive.DataBinding<string>(temp1_BackgroundUrl_inst, "var1");
        var temp14 = new Fuse.Controls.StackPanel();
        var temp15 = new Fuse.Resources.ResourceBinding<float4>(temp2_TextColor_inst, "Dark");
        var temp16 = new Fuse.Reactive.DataBinding<string>(temp2_Value_inst, "var2");
        var temp17 = new Fuse.Resources.ResourceBinding<float4>(temp3_TextColor_inst, "Dark");
        var temp18 = new Fuse.Reactive.DataBinding<string>(temp3_Value_inst, "var3");
        Fuse.Elements.Element.WidthProperty.Set(this, 100f, global::Fuse.Elements.SizeUnit.Percent);
        this.Height = 320f;
        this.ClipToBounds = true;
        missionCard.Padding = float4(0f, 0f, 0f, 20f);
        missionCard.Name = "missionCard";
        missionCard.Children.Add(temp4);
        missionCard.Children.Add(temp6);
        missionCard.Children.Add(temp14);
        temp4.CornerRadius = float4(2f, 2f, 2f, 2f);
        temp4.ClipToBounds = true;
        temp4.Layer = Fuse.Layer.Background;
        temp4.Fill = YooStyle.LightBg;
        temp4.Strokes.Add(temp5);
        temp5.Width = 1f;
        temp5.Brush = YooStyle.BorderGreyBg;
        temp6.CornerRadius = float4(2f, 2f, 2f, 2f);
        temp6.Height = 180f;
        temp6.ClipToBounds = true;
        global::Fuse.Controls.DockPanel.SetDock(temp6, Fuse.Layouts.Dock.Top);
        temp6.Background = YooStyle.DarkBg;
        temp6.Children.Add(temp7);
        temp6.Children.Add(temp9);
        temp6.Children.Add(temp1);
        temp7.RowData = "1";
        temp7.ColumnData = "17,1*";
        temp7.Width = 76f;
        temp7.Height = 36f;
        temp7.Alignment = Fuse.Elements.Alignment.TopLeft;
        temp7.Margin = float4(10f, 10f, 10f, 10f);
        temp7.Padding = float4(10f, 10f, 10f, 10f);
        temp7.Children.Add(temp8);
        temp8.CornerRadius = float4(25f, 25f, 25f, 25f);
        temp8.Layer = Fuse.Layer.Background;
        temp8.Fill = YooStyle.BalancedBg;
        temp9.Alignment = Fuse.Elements.Alignment.Bottom;
        temp9.Children.Add(temp);
        temp9.Children.Add(temp12);
        temp.FontSize = 16f;
        temp.Alignment = Fuse.Elements.Alignment.CenterLeft;
        temp.Visibility = Fuse.Elements.Visibility.Collapsed;
        temp.Margin = float4(10f, 0f, 10f, 0f);
        temp.Font = YooStyle.BoldF;
        temp.Behaviors.Add(temp10);
        temp.Behaviors.Add(temp11);
        temp12.Height = 50f;
        temp12.Alignment = Fuse.Elements.Alignment.Bottom;
        temp12.Opacity = 0.5f;
        temp12.Fill = YooStyle.BlackBg;
        temp1.Behaviors.Add(temp13);
        temp14.Height = 120f;
        temp14.Padding = float4(10f, 10f, 10f, 10f);
        temp14.ClipToBounds = true;
        temp14.Children.Add(temp2);
        temp14.Children.Add(temp3);
        temp2.TextWrapping = Fuse.Elements.TextWrapping.Wrap;
        temp2.FontSize = 15f;
        temp2.Margin = float4(0f, 3f, 0f, 6f);
        temp2.ClipToBounds = true;
        temp2.Font = YooStyle.BoldF;
        temp2.Behaviors.Add(temp15);
        temp2.Behaviors.Add(temp16);
        temp3.TextWrapping = Fuse.Elements.TextWrapping.Wrap;
        temp3.FontSize = 13f;
        temp3.ClipToBounds = true;
        temp3.Behaviors.Add(temp17);
        temp3.Behaviors.Add(temp18);
        this.Children.Add(missionCard);
    }
}
