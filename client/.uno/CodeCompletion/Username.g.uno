public partial class Username: Fuse.Controls.Text
{
    static Username()
    {
    }
    public Username()
    {
        InitializeUX();
    }
    internal void InitializeUX()
    {
        this.FontSize = 18f;
        this.TextAlignment = Fuse.Elements.TextAlignment.Center;
        this.TextColor = float4(1f, 1f, 1f, 1f);
        this.Margin = float4(0f, 8f, 0f, 0f);
    }
}
