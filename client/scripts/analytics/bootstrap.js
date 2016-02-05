var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var app_1 = require('./components/app/app');
var authToken_1 = require('../yoobic/services/authToken');
var ng2_translate_1 = require('ng2-translate');
browser_1.bootstrap(app_1.App, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, core_1.provide(router_1.LocationStrategy, {
        useClass: router_1.HashLocationStrategy
    }), ng2_translate_1.TranslateService, authToken_1.AuthToken]);
//# sourceMappingURL=bootstrap.js.map