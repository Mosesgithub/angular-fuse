public partial class Stats: Fuse.Controls.Text
{
    static Stats()
    {
    }
    public Stats()
    {
        InitializeUX();
    }
    internal void InitializeUX()
    {
        this.FontSize = 16f;
        this.TextAlignment = Fuse.Elements.TextAlignment.Center;
        this.TextColor = float4(0.1960784f, 0.8235294f, 0.7137255f, 1f);
    }
}
