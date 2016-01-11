if (typeof window === "undefined") {window = global;}
if (typeof window["webpackJsonp"]) {webpackJsonp = window.webpackJsonp;}

webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var bootstrap_1 = __webpack_require__(1);
	var app_component_1 = __webpack_require__(249);
	console.log('bootstrapping app');
	bootstrap_1.fuseBootstrap(app_component_1.AppComponent);


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
	    var appProviders = [];
	    if (lang_1.isPresent(customProviders)) {
	        appProviders.push(customProviders);
	    }
	    var app = core_1.platform(fuseProviders).application(appProviders);
	    return app.bootstrap(appComponentType);
	}
	exports.fuseBootstrap = fuseBootstrap;


/***/ },

/***/ 249:
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
	var circle_component_1 = __webpack_require__(483);
	var AppComponent = (function () {
	    function AppComponent() {
	        this.amount = 30;
	        this.background = 'Yellow';
	        this.textvalue = 'Hello World';
	        this.foo = [];
	    }
	    AppComponent.prototype.clickHandler = function (amount) {
	        this.amount += amount;
	        this.textvalue += ' ' + amount;
	        console.log('you clicked me ' + amount);
	    };
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'MyApp',
	            directives: [circle_component_1.MyCircle],
	            template: __webpack_require__(482)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	})();
	exports.AppComponent = AppComponent;


/***/ },

/***/ 482:
/***/ function(module, exports) {

	module.exports = "<Scope1 [var1]=\"amount\" [var3]=\"textvalue\" (callback1)=\"clickHandler(amount)\">\n    <Scope2 *ngFor=\"#f of foo\" [var2]=\"f.background\">\n    \t<MyCircleComponent></MyCircleComponent>\n    </Scope2>\n</Scope1>\n";

/***/ },

/***/ 483:
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
	var MyCircle = (function () {
	    function MyCircle() {
	        this.message = 'Circle binding';
	    }
	    MyCircle = __decorate([
	        core_1.Component({
	            selector: 'MyCircleComponent',
	            template: __webpack_require__(484)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MyCircle);
	    return MyCircle;
	})();
	exports.MyCircle = MyCircle;


/***/ },

/***/ 484:
/***/ function(module, exports) {

	module.exports = "<Scope3 [var5]=\"message\"></Scope3>\n";

/***/ }

});
//# sourceMappingURL=bundle.js.map