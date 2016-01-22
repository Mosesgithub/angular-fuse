public partial class Relations: Fuse.Controls.Text
{
    static Relations()
    {
    }
    public Relations()
    {
        InitializeUX();
    }
    internal void InitializeUX()
    {
        this.FontSize = 11f;
        this.TextAlignment = Fuse.Elements.TextAlignment.Center;
        this.TextColor = float4(1f, 1f, 1f, 1f);
    }
}
