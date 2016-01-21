public partial class HeaderBar: Fuse.Controls.Grid
{
    FuseComponents_FuseControlsTextControl_float4_TextColor_Property title_TextColor_inst;
    FuseComponents_FuseControlsTextControl_FuseFont_Font_Property title_Font_inst;
    FuseComponents_FuseControlsShape_FuseDrawingBrush_Fill_Property temp_Fill_inst;
    FuseComponents_FuseControlsShape_FuseDrawingBrush_Fill_Property temp1_Fill_inst;
    internal Fuse.Controls.StackPanel leftIcons;
    internal Fuse.Controls.Text title;
    internal Fuse.Controls.StackPanel rightIcons;
    static HeaderBar()
    {
    }
    public HeaderBar()
    {
        InitializeUX();
    }
    internal void InitializeUX()
    {
        title = new Fuse.Controls.Text();
        title_TextColor_inst = new FuseComponents_FuseControlsTextControl_float4_TextColor_Property(title);
        title_Font_inst = new FuseComponents_FuseControlsTextControl_FuseFont_Font_Property(title);
        var temp = new Fuse.Controls.Rectangle();
        temp_Fill_inst = new FuseComponents_FuseControlsShape_FuseDrawingBrush_Fill_Property(temp);
        var temp1 = new Fuse.Controls.Rectangle();
        temp1_Fill_inst = new FuseComponents_FuseControlsShape_FuseDrawingBrush_Fill_Property(temp1);
        leftIcons = new Fuse.Controls.StackPanel();
        var temp2 = new Fuse.Resources.ResourceBinding<float4>(title_TextColor_inst, "TextColor");
        var temp3 = new Fuse.Resources.ResourceBinding<Fuse.Font>(title_Font_inst, "Font");
        rightIcons = new Fuse.Controls.StackPanel();
        var temp4 = new Fuse.Resources.ResourceBinding<Fuse.Drawing.Brush>(temp_Fill_inst, "BorderColor");
        var temp5 = new Fuse.Resources.ResourceBinding<Fuse.Drawing.Brush>(temp1_Fill_inst, "Background");
        this.RowData = "1*,1";
        this.ColumnData = "auto,1*,auto";
        leftIcons.Name = "leftIcons";
        title.TextAlignment = Fuse.Elements.TextAlignment.Center;
        title.Alignment = Fuse.Elements.Alignment.VerticalCenter;
        title.Name = "title";
        title.Behaviors.Add(temp2);
        title.Behaviors.Add(temp3);
        rightIcons.Name = "rightIcons";
        temp.Height = 1f;
        global::Fuse.Controls.Grid.SetColumnSpan(temp, 3);
        temp.Behaviors.Add(temp4);
        temp1.Layer = Fuse.Layer.Background;
        temp1.Behaviors.Add(temp5);
        this.Children.Add(leftIcons);
        this.Children.Add(title);
        this.Children.Add(rightIcons);
        this.Children.Add(temp);
        this.Children.Add(temp1);
    }
}
