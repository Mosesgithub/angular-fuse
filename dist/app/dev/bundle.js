if (typeof window === "undefined") {window = global;}
if (typeof window["webpackJsonp"]) {webpackJsonp = window.webpackJsonp;}

webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var bootstrap_1 = __webpack_require__(1);
	var routerapp_component_1 = __webpack_require__(274);
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
	var fuse_location_strategy_1 = __webpack_require__(273);
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
	    return app.bootstrap(appComponentType).catch(function (err) { return console.error(err); });
	}
	exports.fuseBootstrap = fuseBootstrap;


/***/ },

/***/ 273:
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
	var router_1 = __webpack_require__(249);
	var FuseLocationStrategy = (function (_super) {
	    __extends(FuseLocationStrategy, _super);
	    function FuseLocationStrategy() {
	        console.log('FuseLocationStrategy');
	        _super.call(this);
	        this._baseHref = '/';
	    }
	    FuseLocationStrategy.prototype.onPopState = function (fn) { };
	    FuseLocationStrategy.prototype.getBaseHref = function () {
	        return this._baseHref;
	    };
	    FuseLocationStrategy.prototype.prepareExternalUrl = function (internal) {
	        return this._baseHref + '/' + internal;
	    };
	    FuseLocationStrategy.prototype.path = function () {
	        return this._baseHref;
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
	var page1_component_1 = __webpack_require__(275);
	var page2_component_1 = __webpack_require__(277);
	var RouterAppComponent = (function () {
	    function RouterAppComponent() {
	        this.activePage = '';
	    }
	    RouterAppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            directives: [router_1.ROUTER_DIRECTIVES],
	            template: __webpack_require__(279)
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

/***/ 275:
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
	    function Page1(router) {
	        this.router = router;
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
	            template: __webpack_require__(276),
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router])
	    ], Page1);
	    return Page1;
	})();
	exports.Page1 = Page1;


/***/ },

/***/ 276:
/***/ function(module, exports) {

	module.exports = "<Scope2 (callback1)=\"navigate('Button 1')\" (callback2)=\"navigate('Button 2')\"></Scope2>";

/***/ },

/***/ 277:
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
	            template: __webpack_require__(278),
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams])
	    ], Page2);
	    return Page2;
	})();
	exports.Page2 = Page2;


/***/ },

/***/ 278:
/***/ function(module, exports) {

	module.exports = "<Scope3 [var1]=\"clickedOn\" (callback1)=\"navigate()\"></Scope3>\n";

/***/ },

/***/ 279:
/***/ function(module, exports) {

	module.exports = "<Scope1 [var1]=\"activePage\">\n    <router-outlet></router-outlet>\n</Scope1>\n";

/***/ }

});
//# sourceMappingURL=bundle.js.map