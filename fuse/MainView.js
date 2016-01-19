'use strict';
var Observable = require('FuseJS/Observable');
window.isFuse = true;
window.fusejs = window.fusejs || {
    isFuse: true,
    renderer: null,
    requireCacheAfterVendor: {},
    timers: [],
    context: {
        id: 'root',
        depth: 0,
        children: Observable()
    }
};

function debounce(fn, delay) {
    return function() {
        var context = this;
        var args = arguments;
        if (window.fusejs.timers.length > 0) {
            for (var i = 0; i < window.fusejs.timers.length; i++) {
                clearTimeout(window.fusejs.timers[i]);
            }
            window.fusejs.timers = [];
        }
        var timer = setTimeout(function() {
            fn.apply(context, args);
        }, delay);
        window.fusejs.timers.push(timer);
    };
}

function loadRenderer() {
    if (!window.fusejs.angularRenderer) {
        window.context = {
            id: 'root',
            depth: 0,
            children: Observable()
        };
        var AngularRendererClass = require('AngularRenderer');
        window.fusejs.angularRenderer = new AngularRendererClass(window.fusejs.context);
        require('common');
        require('vendor');
        window.fusejs.requireCacheAfterVendor = {};

        for (var moduleId in window.requireCache) {
            if (window.requireCache[moduleId]) {
                window.fusejs.requireCacheAfterVendor[moduleId] = true;
            }
        }
    }
}

function reloadBundle() {
    /// BUNDLE: REFRESH ON EVERY CHANGE
    if (window.clearWebpackCache) {
        window.clearWebpackCache(window.fusejs.requireCacheAfterVendor);
    }
    console.log('LOADING BUNDLE');
    require('bundle');
}

function bootstrapAngular() {
    /// DISPOSE PREVIOUS APPLICATION : ON EVERY CHANGE
    if (window.fusejs.angularRenderer) {
        window.fusejs.angularRenderer.reset();
        window.fusejs.context.children.clear();
        if (window.fusejs.applicationRef) {
            console.log('APPLICATIONREF DISPOSE');
            window.fusejs.applicationRef.dispose();
        }

    }
    /// BOOTSTRAP APPLICATION : ON EVERY CHANGE
    console.log('BOOSTRAP');
    return window.fusejs.bootstraper.bootstrap(window.fusejs.rootComponent);
}

function reloadAngular() {
    window.isLoading = true;
    loadRenderer();
    reloadBundle();
    bootstrapAngular().then(function(applicationRef) {
        window.fusejs.applicationRef = applicationRef;
        window.fusejs.angularRenderer.print();
    });
}

debounce(reloadAngular, 3000)();

module.exports = window.fusejs.context;
