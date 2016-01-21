public partial class Clicky: Fuse.Controls.Panel
{
    string _field_BackgroundUrl;
    [global::Uno.UX.UXValueChangedEvent("SetBackgroundUrl", "BackgroundUrlChanged")]
    public string BackgroundUrl
    {
        get { return _field_BackgroundUrl; }
        set { SetBackgroundUrl(value, null); }
    }
    public event global::Uno.UX.ValueChangedHandler<string> BackgroundUrlChanged;
    public void SetBackgroundUrl(string value, object origin)
    {
        if (value != _field_BackgroundUrl)
        {
            _field_BackgroundUrl = value;
            var args = new global::Uno.UX.ValueChangedArgs<string>(value, origin);
            if (BackgroundUrlChanged != null) BackgroundUrlChanged(this, args);
        }
    }
    FuseComponents_FuseDrawingImageFill_string_Url_Property TheImage_Url_inst;
    FuseComponents_Clicky_string_BackgroundUrl_Property this_BackgroundUrl_inst;
    internal Fuse.Drawing.ImageFill TheImage;
    static Clicky()
    {
    }
    public Clicky()
    {
        InitializeUX();
    }
    internal void InitializeUX()
    {
        TheImage = new Fuse.Drawing.ImageFill();
        TheImage_Url_inst = new FuseComponents_FuseDrawingImageFill_string_Url_Property(TheImage);
        this_BackgroundUrl_inst = new FuseComponents_Clicky_string_BackgroundUrl_Property(this);
        var temp = new Fuse.Gestures.Clicked();
        var temp1 = new Fuse.Controls.PropertyBinding<string>(TheImage_Url_inst, this_BackgroundUrl_inst);
        this.Name = "Myself";
        TheImage.StretchMode = Fuse.Elements.StretchMode.UniformToFill;
        TheImage.Opacity = 0.5f;
        temp.Handler += OnClicked;
        this.Background = TheImage;
        this.Behaviors.Add(temp1);
        this.Behaviors.Add(temp);
    }
}
