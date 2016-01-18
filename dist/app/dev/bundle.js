if (typeof window === "undefined") {window = global;}
if (typeof window["webpackJsonp"]) {webpackJsonp = window.webpackJsonp;}

webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var bootstrap_1 = __webpack_require__(1);
	var nguxapp_1 = __webpack_require__(274);
	console.log('defining root component 1 2 3');
	window.rootComponent = nguxapp_1.NGUXApp;
	if (!window.bootstraper) {
	    window.bootstraper = bootstrap_1.fuseBootstraper();
	}


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
	function fuseBootstraper(customProviders) {
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
	    return app;
	}
	exports.fuseBootstraper = fuseBootstraper;


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
	var nguxchild_1 = __webpack_require__(275);
	__webpack_require__(278);
	var NGUXApp = (function () {
	    function NGUXApp() {
	        this.text = 'Default value';
	        this.foo = ['First', 'Second', 'Third'];
	        console.log('NGUXApp constructor 1');
	        this.backgroundColor = '#00f';
	        console.log(this.backgroundColor);
	    }
	    NGUXApp.prototype.changeColor = function () {
	        this.backgroundColor = this.backgroundColor !== '#0f0' ? '#0f0' : '#00f';
	    };
	    NGUXApp.prototype.valueChanged = function (args) {
	        if (args && args.value && this.text !== args.value) {
	            this.text = args.value;
	        }
	    };
	    NGUXApp = __decorate([
	        core_1.Component({
	            selector: 'NGUXApp',
	            directives: [nguxchild_1.NGUXChild],
	            template: __webpack_require__(279)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NGUXApp);
	    return NGUXApp;
	})();
	exports.NGUXApp = NGUXApp;


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
	__webpack_require__(276);
	var NGUXChild = (function () {
	    function NGUXChild() {
	        this.backgroundColor = '#f00';
	    }
	    NGUXChild.prototype.changeColor = function () {
	    };
	    NGUXChild = __decorate([
	        core_1.Component({
	            selector: 'NGUXChild',
	            template: __webpack_require__(277),
	            properties: ['prop']
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NGUXChild);
	    return NGUXChild;
	})();
	exports.NGUXChild = NGUXChild;


/***/ },

/***/ 276:
/***/ function(module, exports) {

	/*eslint-disable */
	/*jshint ignore:start*/
	'use strict';
	
	window.ngux_types = window.ngux_types || {};
	
	window.ngux_types['NGUXChild_Scope0'] =  function(id, parentId, Observable, EventFactory) {
	};
	
	/*jshint ignore:end*/
	/*eslint-enable */

/***/ },

/***/ 277:
/***/ function(module, exports) {

	module.exports = "<NGUXChild_Scope0 >\n</NGUXChild_Scope0>\n";

/***/ },

/***/ 278:
/***/ function(module, exports) {

	/*eslint-disable */
	/*jshint ignore:start*/
	'use strict';
	
	window.ngux_types = window.ngux_types || {};
	
	window.ngux_types['NGUXApp_Scope0'] =  function(id, parentId, Observable, EventFactory) {
		this.var0 = Observable();
	};
	
	/*jshint ignore:end*/
	/*eslint-enable */

/***/ },

/***/ 279:
/***/ function(module, exports) {

	module.exports = "<NGUXApp_Scope0 [var0]=\"backgroundColor\" >\n</NGUXApp_Scope0>\n";

/***/ }

});
//# sourceMappingURL=bundle.js.map