'use strict';
var Observable = require('FuseJS/Observable');

if (!window.angularRenderer) {
    delete window.requireCache;

    window.isFuse = true;
    window.context = {
        depth: 0,
        children: Observable()
    };
    var AngularRendererClass = require('AngularRenderer');
    window.angularRenderer = new AngularRendererClass(window.context);
    require('common');
    require('vendor');
}

console.log('clear require cache');
//window.requireCache = {};
delete window.requireCache[274];
console.log('bundle');
require('bundle');
if (window.angularRenderer) {
    console.log('disposing');
    if (window.applicationRef) {
        window.applicationRef.dispose();
    }
    console.log('angularRenderer reset');
    window.angularRenderer.reset();
    window.context.children.clear();
}
console.log('bootstraping 1');
window.bootstraper.bootstrap(window.rootComponent).then(function(applicationRef) {
    window.applicationRef = applicationRef;
});

module.exports = window.context;
