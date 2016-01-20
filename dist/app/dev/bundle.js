if (typeof window === "undefined") {window = global;}
if (typeof window["webpackJsonp"]) {webpackJsonp = window.webpackJsonp;}

webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var bootstrap_1 = __webpack_require__(1);
	var routerapp_component_1 = __webpack_require__(508);
	console.log('defining root component');
	if (!window.fusejs) {
	    bootstrap_1.fuseBootstraper().bootstrap(routerapp_component_1.RouterAppComponent);
	}
	else {
	    window.fusejs.rootComponent = routerapp_component_1.RouterAppComponent;
	    if (!window.fusejs.bootstraper) {
	        window.fusejs.bootstraper = bootstrap_1.fuseBootstraper();
	    }
	}


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	var lang_1 = __webpack_require__(2);
	var core_1 = __webpack_require__(3);
	var di_1 = __webpack_require__(6);
	var dom_adapter_1 = __webpack_require__(113);
	var api_1 = __webpack_require__(91);
	var renderer_1 = __webpack_require__(114);
	var dom_adapter_2 = __webpack_require__(116);
	var xhr_1 = __webpack_require__(154);
	var xhr_2 = __webpack_require__(155);
	var exception_handler_1 = __webpack_require__(15);
	var application_common_providers_1 = __webpack_require__(110);
	var compiler_1 = __webpack_require__(156);
	var platform_common_providers_1 = __webpack_require__(109);
	var common_1 = __webpack_require__(185);
	var http_1 = __webpack_require__(228);
	var router_1 = __webpack_require__(243);
	var fuse_location_strategy_1 = __webpack_require__(267);
	function fuseBootstraper(customProviders) {
	    if (customProviders === void 0) { customProviders = null; }
	    dom_adapter_2.FuseDomAdapter.makeCurrent();
	    var fuseProviders = [
	        renderer_1.FuseRenderer,
	        di_1.provide(api_1.Renderer, {
	            useClass: renderer_1.FuseRenderer
	        }),
	        renderer_1.FuseRootRenderer,
	        di_1.provide(api_1.RootRenderer, {
	            useClass: renderer_1.FuseRootRenderer
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
	        http_1.JSONP_PROVIDERS
	    ];
	    var appProviders = [
	        router_1.ROUTER_PROVIDERS,
	        di_1.provide(router_1.LocationStrategy, {
	            useClass: fuse_location_strategy_1.FuseLocationStrategy
	        })
	    ];
	    if (lang_1.isPresent(customProviders)) {
	        appProviders.push(customProviders);
	    }
	    var app = core_1.platform(fuseProviders).application(appProviders);
	    return app;
	}
	exports.fuseBootstraper = fuseBootstraper;


/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var router_1 = __webpack_require__(243);
	var FuseLocationStrategy = (function (_super) {
	    __extends(FuseLocationStrategy, _super);
	    function FuseLocationStrategy() {
	        console.log('FuseLocationStrategy');
	        _super.call(this);
	        this.baseHref = '/';
	    }
	    FuseLocationStrategy.prototype.onPopState = function (fn) {
	    };
	    FuseLocationStrategy.prototype.getBaseHref = function () {
	        return this.baseHref;
	    };
	    FuseLocationStrategy.prototype.prepareExternalUrl = function (internal) {
	        return this.baseHref + '/' + internal;
	    };
	    FuseLocationStrategy.prototype.path = function () {
	        return this.baseHref;
	    };
	    FuseLocationStrategy.prototype.pushState = function (state, title, url, queryParams) {
	    };
	    FuseLocationStrategy.prototype.replaceState = function (state, title, url, queryParams) {
	    };
	    FuseLocationStrategy.prototype.forward = function () {
	    };
	    FuseLocationStrategy.prototype.back = function () {
	    };
	    FuseLocationStrategy = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], FuseLocationStrategy);
	    return FuseLocationStrategy;
	})(router_1.LocationStrategy);
	exports.FuseLocationStrategy = FuseLocationStrategy;


/***/ },

/***/ 508:
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
	var router_1 = __webpack_require__(243);
	var page1_component_1 = __webpack_require__(509);
	var page2_component_1 = __webpack_require__(510);
	__webpack_require__(513);
	var RouterAppComponent = (function () {
	    function RouterAppComponent() {
	        this.activePage = '';
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

/***/ 509:
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
	var router_1 = __webpack_require__(243);
	__webpack_require__(517);
	var Page1 = (function () {
	    function Page1(router) {
	        this.router = router;
	        this.background = '#f00';
	    }
	    Page1.prototype.navigate = function (param) {
	        console.log('navigating to Page 2');
	        this.router.parent.navigate(['Page2', {
	                param: param
	            }]);
	    };
	    Page1 = __decorate([
	        core_1.Component({
	            selector: 'Page1',
	            template: __webpack_require__(514),
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router])
	    ], Page1);
	    return Page1;
	})();
	exports.Page1 = Page1;


/***/ },

/***/ 510:
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
	var router_1 = __webpack_require__(243);
	__webpack_require__(516);
	var Page2 = (function () {
	    function Page2(router, routeParams) {
	        this.router = router;
	        this.routeParams = routeParams;
	        this.clickedOn = '';
	    }
	    Page2.prototype.ngOnInit = function () {
	        console.log(this.routeParams.get('param'));
	        this.clickedOn = this.routeParams.get('param');
	    };
	    Page2.prototype.navigate = function () {
	        console.log('navigating to Page 1');
	        this.router.parent.navigate(['Page1']);
	    };
	    Page2 = __decorate([
	        core_1.Component({
	            selector: 'Page2',
	            template: __webpack_require__(515),
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams])
	    ], Page2);
	    return Page2;
	})();
	exports.Page2 = Page2;


/***/ },

/***/ 512:
/***/ function(module, exports) {

	module.exports = "<RouterApp_Scope0 [var0]=\"activePage\">\n    <router-outlet >\n    </router-outlet>\n</RouterApp_Scope0>\n";

/***/ },

/***/ 513:
/***/ function(module, exports) {

	/*eslint-disable */
	/*jshint ignore:start*/
	'use strict';
	
	window.ngux_types = window.ngux_types || {};
	
	window.ngux_types['RouterApp_Scope0'] = function(id, parentId, Observable, EventFactory) {
	    this.var0 = Observable();
	    this.children0 = Observable();
	};
	
	/*jshint ignore:end*/
	/*eslint-enable */


/***/ },

/***/ 514:
/***/ function(module, exports) {

	module.exports = "<Page1_Scope0 [var0]=\"background\" (callback0)=\"navigate()\">\n</Page1_Scope0>\n";

/***/ },

/***/ 515:
/***/ function(module, exports) {

	module.exports = "<Page2_Scope0>\n</Page2_Scope0>\n";

/***/ },

/***/ 516:
/***/ function(module, exports) {

	/*eslint-disable */
	/*jshint ignore:start*/
	'use strict';
	
	window.ngux_types = window.ngux_types || {};
	
	window.ngux_types['Page2_Scope0'] = function(id, parentId, Observable, EventFactory) {
	};
	
	/*jshint ignore:end*/
	/*eslint-enable */


/***/ },

/***/ 517:
/***/ function(module, exports) {

	/*eslint-disable */
	/*jshint ignore:start*/
	'use strict';
	
	window.ngux_types = window.ngux_types || {};
	
	window.ngux_types['Page1_Scope0'] = function(id, parentId, Observable, EventFactory) {
	    this.var0 = Observable();
	    this.callback0_event = new EventFactory();
	    this.callback0 = this.callback0_event.raise;
	};
	
	/*jshint ignore:end*/
	/*eslint-enable */


/***/ }

});
//# sourceMappingURL=bundle.js.map
/***/