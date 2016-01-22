public partial class SidebarIcon: Fuse.Controls.Image
{
    static SidebarIcon()
    {
    }
    public SidebarIcon()
    {
        InitializeUX();
    }
    internal void InitializeUX()
    {
        this.Color = float4(0.4784314f, 0.5882353f, 0.6980392f, 1f);
        this.Width = 22f;
        this.Height = 22f;
        this.Margin = float4(0f, 24f, 0f, 9f);
    }
}
