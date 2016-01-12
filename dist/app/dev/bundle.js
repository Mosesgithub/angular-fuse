if (typeof window === "undefined") {window = global;}
if (typeof window["webpackJsonp"]) {webpackJsonp = window.webpackJsonp;}

webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var bootstrap_1 = __webpack_require__(1);
	var routerapp_component_1 = __webpack_require__(273);
	bootstrap_1.fuseBootstrap(routerapp_component_1.RouterAppComponent);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	var lang_1 = __webpack_require__(2);
	var core_1 = __webpack_require__(3);
	var di_1 = __webpack_require__(6);
	var dom_adapter_1 = __webpack_require__(119);
	var api_1 = __webpack_require__(87);
	var renderer_1 = __webpack_require__(120);
	var dom_adapter_2 = __webpack_require__(125);
	var xhr_1 = __webpack_require__(163);
	var xhr_2 = __webpack_require__(164);
	var exception_handler_1 = __webpack_require__(15);
	var application_common_providers_1 = __webpack_require__(118);
	var compiler_1 = __webpack_require__(165);
	var platform_common_providers_1 = __webpack_require__(117);
	var common_1 = __webpack_require__(191);
	var http_1 = __webpack_require__(234);
	var router_1 = __webpack_require__(249);
	function fuseBootstrap(appComponentType, customProviders) {
	    if (customProviders === void 0) { customProviders = null; }
	    dom_adapter_2.FuseDomAdapter.makeCurrent();
	    var fuseProviders = [
	        renderer_1.FuseRenderer,
	        di_1.provide(api_1.Renderer, {
	            useClass: renderer_1.FuseRenderer
	        }),
	        di_1.provide(xhr_1.XHR, {
	            useClass: xhr_2.FileSystemXHR
	        }),
	        di_1.provide(exception_handler_1.ExceptionHandler, {
	            useFactory: function () { return new exception_handler_1.ExceptionHandler(dom_adapter_1.DOM, true); },
	            deps: []
	        }),
	        di_1.provide(core_1.PLATFORM_PIPES, {
	            useValue: common_1.COMMON_PIPES,
	            multi: true
	        }),
	        di_1.provide(core_1.PLATFORM_DIRECTIVES, {
	            useValue: common_1.COMMON_DIRECTIVES,
	            multi: true
	        }),
	        application_common_providers_1.APPLICATION_COMMON_PROVIDERS,
	        compiler_1.COMPILER_PROVIDERS,
	        platform_common_providers_1.PLATFORM_COMMON_PROVIDERS,
	        common_1.FORM_PROVIDERS,
	        http_1.HTTP_PROVIDERS,
	        http_1.JSONP_PROVIDERS,
	        router_1.ROUTER_PROVIDERS,
	        di_1.provide(router_1.LocationStrategy, {
	            useClass: router_1.HashLocationStrategy
	        })
	    ];
	    var appProviders = [];
	    if (lang_1.isPresent(customProviders)) {
	        appProviders.push(customProviders);
	    }
	    var app = core_1.platform(fuseProviders).application(appProviders);
	    return app.bootstrap(appComponentType);
	}
	exports.fuseBootstrap = fuseBootstrap;


/***/ },

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(249);
	var page1_component_1 = __webpack_require__(274);
	var page2_component_1 = __webpack_require__(276);
	var RouterAppComponent = (function () {
	    function RouterAppComponent() {
	    }
	    RouterAppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            directives: [router_1.ROUTER_DIRECTIVES],
	            template: __webpack_require__(512)
	        }),
	        router_1.RouteConfig([{
	                path: '/',
	                redirectTo: ['/Page1'],
	                name: 'root'
	            }, {
	                path: '/page1',
	                name: 'Page1',
	                component: page1_component_1.Page1
	            }, {
	                path: '/page2',
	                name: 'Page2',
	                component: page2_component_1.Page2
	            }]), 
	        __metadata('design:paramtypes', [])
	    ], RouterAppComponent);
	    return RouterAppComponent;
	})();
	exports.RouterAppComponent = RouterAppComponent;


/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(249);
	var Page1 = (function () {
	    function Page1() {
	    }
	    Page1 = __decorate([
	        core_1.Component({
	            selector: 'Page1',
	            template: __webpack_require__(275),
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Page1);
	    return Page1;
	})();
	exports.Page1 = Page1;


/***/ },

/***/ 275:
/***/ function(module, exports) {

	module.exports = "<Scope1></Scope1>";

/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(249);
	var Page2 = (function () {
	    function Page2() {
	    }
	    Page2 = __decorate([
	        core_1.Component({
	            selector: 'Page2',
	            template: __webpack_require__(277),
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Page2);
	    return Page2;
	})();
	exports.Page2 = Page2;


/***/ },

/***/ 277:
/***/ function(module, exports) {

	module.exports = "<Scope2></Scope2>";

/***/ },

/***/ 512:
/***/ function(module, exports) {

	module.exports = "<router-outlet></router-outlet>\n";

/***/ }

});
//# sourceMappingURL=bundle.js.map