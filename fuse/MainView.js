//var Observable = require('FuseJS/Observable');
'use strict';
var AngularRenderer = require('AngularRenderer');

// try {
//     console.log('loading');
//     require('bundle');
//     console.log('bundle is loaded 2');
//     } catch (error) {
//     console.log(JSON.stringify(error));
// }

var dockPanelId = AngularRenderer.addElement('DockPanel');
var topRectangleId = AngularRenderer.addElement('Rectangle', dockPanelId);

AngularRenderer.setAttribute(topRectangleId, 'Dock', 'Top');
AngularRenderer.setAttribute(topRectangleId, 'Background', 'Green');
AngularRenderer.setAttribute(topRectangleId, 'Height', 200);
AngularRenderer.setEventListener(topRectangleId, 'Click', function() {
    console.log("clicked");
});

module.exports = {

};
