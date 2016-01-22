public partial class MenuLabel: Fuse.Controls.Text
{
    static MenuLabel()
    {
    }
    public MenuLabel()
    {
        InitializeUX();
    }
    internal void InitializeUX()
    {
        this.FontSize = 15f;
        this.TextAlignment = Fuse.Elements.TextAlignment.Center;
        this.TextColor = float4(1f, 1f, 1f, 1f);
        this.Margin = float4(0f, 0f, 0f, 0f);
    }
}
