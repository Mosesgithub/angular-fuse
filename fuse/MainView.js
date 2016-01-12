'use strict';
var Observable = require('FuseJS/Observable');

if (!window.angularLoaded) {
    window.context = {
        depth: 0,
        children0: Observable()
    };
    var AngularRendererClass = require('AngularRenderer');
    window.AngularRenderer = new AngularRendererClass(window.context);
    require('common');
    require('vendor');
    require('bundle');
    window.angularLoaded = true;
}

module.exports = window.context;
