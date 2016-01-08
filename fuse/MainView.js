//var Observable = require('FuseJS/Observable');
'use strict';

if (!window.angularLoaded) {
    //console.log('loading');
    var es6Shim = require('es6Shim');
    assert = function() {};

    //console.log(typeof JSON + 'typeof JSON');
    window.JSON = JSON;
    window.RegExp = RegExp;
    window.Map = Map;
    window.Set = Set;
    window.Reflect = Reflect;
    window.Promise = Promise;
    window.Math = Math;

    var EventTargetOld = EventTarget;
    EventTarget = {};
    EventTarget.prototype = {
        addEventListener: EventTargetOld.addEventListener,
        removeEventListener: EventTargetOld.removeEventListener,
        dispatchEvent: EventTargetOld.dispatchEvent
    };
    window.EventTarget = EventTarget;

    var xhrHack = window.XMLHttpRequest;
    xhrHack.prototype.addEventListener = function(e, func) {
        if (e === 'load') {
            this.onload = func;
        }
        if (e === 'error') {
            this.onerror = func;
        }
    };
    XMLHttpRequest = window.XMLHttpRequest = xhrHack;

    //window.EventTarget=null;
    console.warn = console.log;
    console.error = console.log;
    // console.log(JSON.stringify(window.EventTarget));
    // console.dir(es6Shim);

    window.AngularRenderer = require('AngularRenderer');
    window.AngularRenderer.onEventTriggered = function(viewName, eventName, callback) {
        //console.log('onEventTriggered ' + viewName + ' ' + eventName);
        callback();
    };
    require('bundle');
    //console.log('bundle is loaded');
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
