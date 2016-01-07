exports.ids = [0];
exports.modules = {

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./vendor\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var app_component_1 = __webpack_require__(1);
	var bootstrap_1 = __webpack_require__(123);
	console.log('fuseBootStrap AppComponent');
	bootstrap_1.fuseBootstrap(app_component_1.AppComponent);


/***/ },

/***/ 1:
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
	var core_1 = __webpack_require__(2);
	var hero_service_1 = __webpack_require__(119);
	var login_component_1 = __webpack_require__(120);
	var AppComponent = (function () {
	    function AppComponent(heroService) {
	        this.heroService = heroService;
	        this.title = 'Tour Of Heroes';
	        this.dock = 'Top';
	        this.height = 160;
	        this.clickCount = 0;
	        this.background = 'Red';
	        this.mywidth = 100;
	        console.log('AppComponent constructor');
	    }
	    AppComponent.prototype.ngOnInit = function () {
	        this.getHeroes();
	    };
	    AppComponent.prototype.getHeroes = function () {
	        this.heroes = this.heroService.getHeroes();
	    };
	    AppComponent.prototype.onSelect = function (hero) {
	        this.selectedHero = hero;
	    };
	    AppComponent.prototype.onHeaderClick = function () {
	        this.clickCount++;
	        if (this.background === 'Red') {
	            this.height += 40;
	            this.background = 'Blue';
	        }
	        else {
	            this.height -= 40;
	            this.background = 'Red';
	        }
	    };
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            providers: [hero_service_1.HeroService],
	            directives: [login_component_1.Login],
	            template: __webpack_require__(122)
	        }), 
	        __metadata('design:paramtypes', [hero_service_1.HeroService])
	    ], AppComponent);
	    return AppComponent;
	})();
	exports.AppComponent = AppComponent;


/***/ },

/***/ 119:
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
	var core_1 = __webpack_require__(2);
	var heroes = [
	    { id: 11, name: 'Mr. Nice!' },
	    { id: 12, name: 'Narco' },
	    { id: 13, name: 'Bombasto' },
	    { id: 14, name: 'Celeritas' },
	    { id: 15, name: 'Magneta' },
	    { id: 16, name: 'RubberMan' },
	    { id: 17, name: 'Dynama' },
	    { id: 18, name: 'Dr IQ' },
	    { id: 19, name: 'Magma' },
	    { id: 20, name: 'Tornado' }
	];
	var HeroService = (function () {
	    function HeroService() {
	    }
	    HeroService.prototype.getHeroes = function () {
	        return heroes;
	    };
	    HeroService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], HeroService);
	    return HeroService;
	})();
	exports.HeroService = HeroService;


/***/ },

/***/ 120:
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
	var core_1 = __webpack_require__(2);
	var Login = (function () {
	    function Login() {
	    }
	    Login = __decorate([
	        core_1.Component({
	            selector: 'Login',
	            template: __webpack_require__(121)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Login);
	    return Login;
	})();
	exports.Login = Login;


/***/ },

/***/ 121:
/***/ function(module, exports) {

	module.exports = "<LoginUX></LoginUX>";

/***/ },

/***/ 122:
/***/ function(module, exports) {

	module.exports = "<DockPanel>\n    <Rectangle Dock=\"Top\" [Height]=\"height\" [Background]=\"background\" (click)=\"onHeaderClick()\"></Rectangle>\n    <!--  <TextInput (topchange)=\"name = $event.text\" height=\"40\" fontSize=\"30\" placeholder=\"name\"></TextInput>\n      (click)=\"onSelect(hero)\"-->\n    <ScrollView>\n        <StackPanel>\n            <!-- <TextInput #myname (keyup)></TextInput>\n        \t<Text Value=\"{{myname.value}}\" ></Text> -->\n            <Text Value=\"Hello, {{title}}. I have been clicked {{clickCount}} times.\"></Text>\n            <MyRectangle [MyWidth]=\"mywidth\"></MyRectangle>\n            <Rectangle *ngFor=\"#hero of heroes\" Background=\"Yellow\" Height=\"40\">\n                <Text Value=\"{{hero.name}}\"></Text>\n            </Rectangle>\n        </StackPanel>\n    </ScrollView>\n</DockPanel>\n\n";

/***/ },

/***/ 123:
/***/ function(module, exports, __webpack_require__) {

	var lang_1 = __webpack_require__(5);
	var core_1 = __webpack_require__(2);
	var di_1 = __webpack_require__(6);
	var dom_adapter_1 = __webpack_require__(150);
	var api_1 = __webpack_require__(87);
	var renderer_1 = __webpack_require__(151);
	var dom_adapter_2 = __webpack_require__(156);
	var xhr_1 = __webpack_require__(193);
	var xhr_2 = __webpack_require__(194);
	var exception_handler_1 = __webpack_require__(15);
	var application_common_providers_1 = __webpack_require__(118);
	var compiler_1 = __webpack_require__(195);
	var platform_common_providers_1 = __webpack_require__(117);
	var common_1 = __webpack_require__(221);
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
	    ];
	    var appProviders = [];
	    if (lang_1.isPresent(customProviders)) {
	        appProviders.push(customProviders);
	    }
	    var app = core_1.platform(fuseProviders).application(appProviders);
	    console.log('starting bootstrap');
	    return app.bootstrap(appComponentType);
	}
	exports.fuseBootstrap = fuseBootstrap;


/***/ }

};;
//# sourceMappingURL=bundle.js.map