sealed class yoobic_FuseControlsPanel_object_Items_Property: Uno.UX.Property<object>
{
    Fuse.Controls.Panel _obj;
    public yoobic_FuseControlsPanel_object_Items_Property(Fuse.Controls.Panel obj) { _obj = obj;  }
    protected override object OnGet() { return _obj.Items; }
    protected override void OnSet(object v, object origin) { _obj.Items = v; }
}
sealed class yoobic_FuseControlsEdgeNavigator_FuseNode_Active_Property: Uno.UX.Property<Fuse.Node>
{
    Fuse.Controls.EdgeNavigator _obj;
    public yoobic_FuseControlsEdgeNavigator_FuseNode_Active_Property(Fuse.Controls.EdgeNavigator obj) { _obj = obj;  }
    protected override Fuse.Node OnGet() { return _obj.Active; }
    protected override void OnSet(Fuse.Node v, object origin) { _obj.Active = v; }
}
sealed class yoobic_FuseDrawingImageFill_string_Url_Property: Uno.UX.Property<string>
{
    Fuse.Drawing.ImageFill _obj;
    public yoobic_FuseDrawingImageFill_string_Url_Property(Fuse.Drawing.ImageFill obj) { _obj = obj;  }
    protected override string OnGet() { return _obj.Url; }
    protected override void OnSet(string v, object origin) { _obj.Url = v; }
}
sealed class yoobic_FuseControlsTextControl_string_Value_Property: Uno.UX.Property<string>
{
    Fuse.Controls.TextControl _obj;
    public yoobic_FuseControlsTextControl_string_Value_Property(Fuse.Controls.TextControl obj) { _obj = obj; obj.ValueChanged += this.OnValueChanged; }
    protected override string OnGet() { return _obj.Value; }
    protected override void OnSet(string v, object origin) { _obj.SetValue(v, origin); }
    protected override void OnAddListener(Uno.UX.ValueChangedHandler<string> listener) { _obj.ValueChanged += listener; }
    protected override void OnRemoveListener(Uno.UX.ValueChangedHandler<string> listener) { _obj.ValueChanged -= listener; }
}
sealed class yoobic_FuseControlsTextControl_float4_TextColor_Property: Uno.UX.Property<float4>
{
    Fuse.Controls.TextControl _obj;
    public yoobic_FuseControlsTextControl_float4_TextColor_Property(Fuse.Controls.TextControl obj) { _obj = obj;  }
    protected override float4 OnGet() { return _obj.TextColor; }
    protected override void OnSet(float4 v, object origin) { _obj.TextColor = v; }
}
sealed class yoobic_Clicky_string_BackgroundUrl_Property: Uno.UX.Property<string>
{
    Clicky _obj;
    public yoobic_Clicky_string_BackgroundUrl_Property(Clicky obj) { _obj = obj; obj.BackgroundUrlChanged += this.OnValueChanged; }
    protected override string OnGet() { return _obj.BackgroundUrl; }
    protected override void OnSet(string v, object origin) { _obj.SetBackgroundUrl(v, origin); }
    protected override void OnAddListener(Uno.UX.ValueChangedHandler<string> listener) { _obj.BackgroundUrlChanged += listener; }
    protected override void OnRemoveListener(Uno.UX.ValueChangedHandler<string> listener) { _obj.BackgroundUrlChanged -= listener; }
}
sealed class yoobic_FuseTranslation_float_X_Property: Uno.UX.Property<float>
{
    Fuse.Translation _obj;
    public yoobic_FuseTranslation_float_X_Property(Fuse.Translation obj) { _obj = obj;  }
    protected override float OnGet() { return _obj.X; }
    protected override void OnSet(float v, object origin) { _obj.X = v; }
}
