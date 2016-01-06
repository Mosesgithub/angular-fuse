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
    window.assert = function() {

    }
    var old = EventTarget;
    EventTarget = {};
    EventTarget.prototype = {
        addEventListener: old.addEventListener,
        removeEventListener: old.removeEventListener,
        dispatchEvent: old.dispatchEvent
    };
    window.EventTarget = EventTarget;

    //window.EventTarget=null;
    console.warn = console.log;
    console.error = console.log;
    // console.log(JSON.stringify(window.EventTarget));
    // console.dir(es6Shim);

    window.AngularRenderer = require('AngularRenderer');
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
