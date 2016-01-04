//var Observable = require('FuseJS/Observable');
'use strict';

if (!window.angularLoaded) {
    console.log('loading');
    var es6Shim = require('es6Shim');
    window.RegExp = RegExp;
    window.Map = Map;
    window.Set = Set;
    window.Reflect = Reflect;
    window.Promise = Promise;
    window.Math = Math;
    console.warn = console.log;
    console.error = console.log;

    var AngularRenderer = require('AngularRenderer');
    require('bundle');
    console.log('bundle is loaded');
    window.angularLoaded = true;
}

// // var dockPanelId = AngularRenderer.addElement('DockPanel');
// // var topRectangleId = AngularRenderer.addElement('Rectangle', dockPanelId);

// // AngularRenderer.setAttribute(topRectangleId, 'Dock', 'Top');
// // AngularRenderer.setAttribute(topRectangleId, 'Background', 'Green');
// // AngularRenderer.setAttribute(topRectangleId, 'Height', 200);
// // AngularRenderer.setEventListener(topRectangleId, 'Click', function() {
// //     console.log("clicked");
// // });

module.exports = {

};
