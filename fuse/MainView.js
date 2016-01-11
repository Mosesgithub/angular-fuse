'use strict';

if (!window.angularLoaded) {
    window.AngularRenderer = require('AngularRenderer');
    window.AngularRenderer.onEventTriggered = function(viewName, eventName, callback) {
        callback();
    };
    require('common');
    require('vendor');
    require('bundle');
    //console.log('bundle is loaded');
    window.angularLoaded = true;
}

module.exports = {

};
