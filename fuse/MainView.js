//var Observable = require('FuseJS/Observable');
'use strict';
var AngularRenderer = require('AngularRenderer');
window.RegExp = RegExp;

console.warn = console.log;

//console.dir(window);
//console.log(typeof window.RegExp);

try {
    console.log('loading2');
    require('bundle');
    console.log('bundle is loaded');
} catch (error) {
    console.log(JSON.stringify(error));
}

// var dockPanelId = AngularRenderer.addElement('DockPanel');
// var topRectangleId = AngularRenderer.addElement('Rectangle', dockPanelId);

// AngularRenderer.setAttribute(topRectangleId, 'Dock', 'Top');
// AngularRenderer.setAttribute(topRectangleId, 'Background', 'Green');
// AngularRenderer.setAttribute(topRectangleId, 'Height', 200);
// AngularRenderer.setEventListener(topRectangleId, 'Click', function() {
//     console.log("clicked");
// });

module.exports = {

};
