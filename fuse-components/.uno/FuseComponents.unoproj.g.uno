sealed class FuseComponents_FuseDrawingImageFill_string_Url_Property: Uno.UX.Property<string>
{
    Fuse.Drawing.ImageFill _obj;
    public FuseComponents_FuseDrawingImageFill_string_Url_Property(Fuse.Drawing.ImageFill obj) { _obj = obj;  }
    protected override string OnGet() { return _obj.Url; }
    protected override void OnSet(string v, object origin) { _obj.Url = v; }
}
sealed class FuseComponents_FuseControlsTextControl_float4_TextColor_Property: Uno.UX.Property<float4>
{
    Fuse.Controls.TextControl _obj;
    public FuseComponents_FuseControlsTextControl_float4_TextColor_Property(Fuse.Controls.TextControl obj) { _obj = obj;  }
    protected override float4 OnGet() { return _obj.TextColor; }
    protected override void OnSet(float4 v, object origin) { _obj.TextColor = v; }
}
sealed class FuseComponents_FuseControlsTextControl_FuseFont_Font_Property: Uno.UX.Property<Fuse.Font>
{
    Fuse.Controls.TextControl _obj;
    public FuseComponents_FuseControlsTextControl_FuseFont_Font_Property(Fuse.Controls.TextControl obj) { _obj = obj;  }
    protected override Fuse.Font OnGet() { return _obj.Font; }
    protected override void OnSet(Fuse.Font v, object origin) { _obj.Font = v; }
}
sealed class FuseComponents_FuseControlsShape_FuseDrawingBrush_Fill_Property: Uno.UX.Property<Fuse.Drawing.Brush>
{
    Fuse.Controls.Shape _obj;
    public FuseComponents_FuseControlsShape_FuseDrawingBrush_Fill_Property(Fuse.Controls.Shape obj) { _obj = obj;  }
    protected override Fuse.Drawing.Brush OnGet() { return _obj.Fill; }
    protected override void OnSet(Fuse.Drawing.Brush v, object origin) { _obj.Fill = v; }
}
sealed class FuseComponents_FuseControlsTextControl_string_Value_Property: Uno.UX.Property<string>
{
    Fuse.Controls.TextControl _obj;
    public FuseComponents_FuseControlsTextControl_string_Value_Property(Fuse.Controls.TextControl obj) { _obj = obj; obj.ValueChanged += this.OnValueChanged; }
    protected override string OnGet() { return _obj.Value; }
    protected override void OnSet(string v, object origin) { _obj.SetValue(v, origin); }
    protected override void OnAddListener(Uno.UX.ValueChangedHandler<string> listener) { _obj.ValueChanged += listener; }
    protected override void OnRemoveListener(Uno.UX.ValueChangedHandler<string> listener) { _obj.ValueChanged -= listener; }
}
sealed class FuseComponents_Clicky_string_BackgroundUrl_Property: Uno.UX.Property<string>
{
    Clicky _obj;
    public FuseComponents_Clicky_string_BackgroundUrl_Property(Clicky obj) { _obj = obj; obj.BackgroundUrlChanged += this.OnValueChanged; }
    protected override string OnGet() { return _obj.BackgroundUrl; }
    protected override void OnSet(string v, object origin) { _obj.SetBackgroundUrl(v, origin); }
    protected override void OnAddListener(Uno.UX.ValueChangedHandler<string> listener) { _obj.BackgroundUrlChanged += listener; }
    protected override void OnRemoveListener(Uno.UX.ValueChangedHandler<string> listener) { _obj.BackgroundUrlChanged -= listener; }
}
sealed class FuseComponents_FuseElementsElement_float_Opacity_Property: Uno.UX.Property<float>
{
    Fuse.Elements.Element _obj;
    public FuseComponents_FuseElementsElement_float_Opacity_Property(Fuse.Elements.Element obj) { _obj = obj;  }
    protected override float OnGet() { return _obj.Opacity; }
    protected override void OnSet(float v, object origin) { _obj.Opacity = v; }
}
sealed class FuseComponents_FuseElementsElement_FuseElementsVisibility_Visibility_Property: Uno.UX.Property<Fuse.Elements.Visibility>
{
    Fuse.Elements.Element _obj;
    public FuseComponents_FuseElementsElement_FuseElementsVisibility_Visibility_Property(Fuse.Elements.Element obj) { _obj = obj;  }
    protected override Fuse.Elements.Visibility OnGet() { return _obj.Visibility; }
    protected override void OnSet(Fuse.Elements.Visibility v, object origin) { _obj.Visibility = v; }
}
sealed class FuseComponents_FuseEffectsBlur_float_Radius_Property: Uno.UX.Property<float>
{
    Fuse.Effects.Blur _obj;
    public FuseComponents_FuseEffectsBlur_float_Radius_Property(Fuse.Effects.Blur obj) { _obj = obj;  }
    protected override float OnGet() { return _obj.Radius; }
    protected override void OnSet(float v, object origin) { _obj.Radius = v; }
}
sealed class FuseComponents_FuseElementsElement_float_Height_Property: Uno.UX.Property<float>
{
    Fuse.Elements.Element _obj;
    public FuseComponents_FuseElementsElement_float_Height_Property(Fuse.Elements.Element obj) { _obj = obj;  }
    protected override float OnGet() { return _obj.Height; }
    protected override void OnSet(float v, object origin) { _obj.Height = v; }
}
