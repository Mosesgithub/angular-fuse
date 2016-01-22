public partial class MenuIcon: Fuse.Controls.Text
{
    static MenuIcon()
    {
    }
    public MenuIcon()
    {
        InitializeUX();
    }
    internal void InitializeUX()
    {
        this.FontSize = 20f;
        this.TextAlignment = Fuse.Elements.TextAlignment.Center;
        this.TextColor = float4(1f, 1f, 1f, 1f);
        this.Margin = float4(10f, 10f, 10f, 10f);
        this.Font = YooStyle.YoobicF;
    }
}
