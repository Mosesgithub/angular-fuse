'use strict';
var Observable = require('FuseJS/Observable');

if (!window.isLoading) {
    window.isFuse = true;
    window.isLoading = true;
    setTimeout(function() {

        /// ANGULAR RENDERER: DEFINE ONCE
        if (!window.angularRenderer) {
            window.context = {
                id: 'root',
                depth: 0,
                children: Observable()
            };
            var AngularRendererClass = require('AngularRenderer');
            window.angularRenderer = new AngularRendererClass(window.context);
            require('common');
            require('vendor');
        } 

        /// BUNDLE: REFRESH ON EVERY CHANGE
        if (window.clearWebpackCache) {
            window.clearWebpackCache();
        }
        console.log('LOADING BUNDLE');
        require('bundle');
 
        /// DISPOSE PREVIOUS APPLICATION : ON EVERY CHANGE
        if (window.angularRenderer) {
            window.angularRenderer.reset();
            window.context.children.clear();
            if (window.applicationRef) {
                console.log('APPLICATIONREF DISPOSE');
                window.applicationRef.dispose();
            }

        }
        /// BOOTSTRAP APPLICATION : ON EVERY CHANGE
        console.log('BOOSTRAP');
        window.bootstraper.bootstrap(window.rootComponent).then(function(applicationRef) {
            window.applicationRef = applicationRef;
            window.isLoading = false;
            window.angularRenderer.print();
        });
    }, 1000);
}
module.exports = window.context;
