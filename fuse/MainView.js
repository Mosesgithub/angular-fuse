'use strict';
var Observable = require('FuseJS/Observable');

if (!window.angularLoaded) {
    window.context = {
        depth: 0,
        children: Observable()
    };
    var AngularRendererClass = require('AngularRenderer');
    window.AngularRenderer = new AngularRendererClass(window.context);
    //console.dir(window.AngularRenderer);
    // window.AngularRenderer.onEventTriggered = function(viewName, eventName, callback) {
    //     callback();
    // };
    require('common');
    require('vendor');
    require('bundle');

    //console.log('bundle is loaded');
    window.angularLoaded = true;
}

module.exports = window.context;
