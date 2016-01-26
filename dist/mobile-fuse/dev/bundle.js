if (typeof window === "undefined") {window = global;}
if (typeof window["webpackJsonp"]) {webpackJsonp = window.webpackJsonp;}

webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var bootstrap_1 = __webpack_require__(1);
	var main_1 = __webpack_require__(268);
	var authToken_1 = __webpack_require__(271);
	var ng2_translate_1 = __webpack_require__(290);
	var providers = [authToken_1.AuthToken, ng2_translate_1.TranslateService];
	if (!window.fusejs) {
	    bootstrap_1.fuseBootstraper(providers).bootstrap(main_1.Main);
	}
	else {
	    window.fusejs.rootComponent = main_1.Main;
	    if (!window.fusejs.bootstraper) {
	        window.fusejs.bootstraper = bootstrap_1.fuseBootstraper(providers);
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

/***/ 268:
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
	var login_1 = __webpack_require__(269);
	var menu_1 = __webpack_require__(276);
	var router_1 = __webpack_require__(243);
	var ng2_translate_1 = __webpack_require__(290);
	__webpack_require__(308);
	var Main = (function () {
	    function Main(translate) {
	        this.translate = translate;
	        translate.setDefaultLang('en');
	        translate.setTranslation('en', __webpack_require__(309));
	        translate.use('en');
	    }
	    Main = __decorate([
	        core_1.Component({
	            selector: 'Main',
	            directives: [router_1.ROUTER_DIRECTIVES],
	            template: __webpack_require__(310)
	        }),
	        router_1.RouteConfig([{
	                path: '/',
	                redirectTo: ['/Login'],
	                name: 'root'
	            }, {
	                path: '/login',
	                name: 'Login',
	                component: login_1.Login
	            }, {
	                path: '/menu/...',
	                name: 'Menu',
	                component: menu_1.Menu
	            }]), 
	        __metadata('design:paramtypes', [ng2_translate_1.TranslateService])
	    ], Main);
	    return Main;
	})();
	exports.Main = Main;


/***/ },

/***/ 269:
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
	var requestor_1 = __webpack_require__(270);
	var authentication_1 = __webpack_require__(272);
	__webpack_require__(274);
	var Login = (function () {
	    function Login(router, authentication) {
	        this.router = router;
	        this.authentication = authentication;
	        this.goToLogin = function (param) {
	            var _this = this;
	            this.authentication.login(null, null).then(function (res) {
	                _this.router.navigate(['Menu/MissionsList', {
	                        param: param
	                    }]);
	            });
	        };
	        if (!window.fusejs) {
	            this.router.navigate(['Menu/MissionsList']);
	        }
	    }
	    Login = __decorate([
	        core_1.Component({
	            selector: 'Login',
	            template: __webpack_require__(275),
	            providers: [requestor_1.Requestor, authentication_1.Authentication],
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, authentication_1.Authentication])
	    ], Login);
	    return Login;
	})();
	exports.Login = Login;


/***/ },

/***/ 270:
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
	var http_1 = __webpack_require__(228);
	var core_1 = __webpack_require__(3);
	var authToken_1 = __webpack_require__(271);
	var Requestor = (function () {
	    function Requestor(http, authToken) {
	        this.http = http;
	        this.authToken = authToken;
	    }
	    Requestor.prototype.post = function (url, body) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            _this.http.post(url, body ? JSON.stringify(body) : null, {
	                headers: _this._buildHeaders()
	            })
	                .map(function (res) { return res.json(); })
	                .subscribe(function (res) {
	                if (res.error) {
	                    reject(res.error);
	                }
	                else {
	                    resolve(res);
	                }
	            });
	        });
	    };
	    Requestor.prototype.get = function (url) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            _this.http.get(url, {
	                headers: _this._buildHeaders()
	            })
	                .map(function (res) { return res.json(); })
	                .subscribe(function (res) {
	                if (res.error) {
	                    reject(res.error);
	                }
	                else {
	                    resolve(res);
	                }
	            });
	        });
	    };
	    Requestor.prototype.put = function (url, body) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            _this.http.put(url, body ? JSON.stringify(body) : null, {
	                headers: _this._buildHeaders()
	            })
	                .map(function (res) { return res.json(); })
	                .subscribe(function (res) {
	                if (res.error) {
	                    reject(res.error);
	                }
	                else {
	                    resolve(res);
	                }
	            });
	        });
	    };
	    Requestor.prototype._buildHeaders = function () {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        headers.append('Accept', 'application/json');
	        if (this.authToken.token) {
	            headers.append('Authorization', 'Bearer ' + this.authToken.token);
	        }
	        else {
	            headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMC4wLjAuMDo1MDIyMS8iLCJzdWIiOiI1NGY0NjBkMzFlOTNkZmY4M2QwMDQ2MzgiLCJleHAiOjE0NTU5MjA0OTcsImlhdCI6MTQ1MzMyODQ5NywidXNlcm5hbWUiOiJrZXZpbnRlYW1AeW9vYmljLmNvbSIsImVtYWlsIjoiYWJyaWxsaW9uQHlvb2JpYy5jIiwiX2lkIjoiNTRmNDYwZDMxZTkzZGZmODNkMDA0NjM4In0.sZjHUxQkOa9WAZ0w7IBWQts6Rdt_oQeSAiSdDVf_85A');
	        }
	        return headers;
	    };
	    Requestor = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, authToken_1.AuthToken])
	    ], Requestor);
	    return Requestor;
	})();
	exports.Requestor = Requestor;


/***/ },

/***/ 271:
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
	var AuthToken = (function () {
	    function AuthToken() {
	    }
	    AuthToken = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], AuthToken);
	    return AuthToken;
	})();
	exports.AuthToken = AuthToken;


/***/ },

/***/ 272:
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
	var requestor_1 = __webpack_require__(270);
	var config_1 = __webpack_require__(273);
	var core_1 = __webpack_require__(3);
	var authToken_1 = __webpack_require__(271);
	var Authentication = (function () {
	    function Authentication(requestor, authToken) {
	        this.requestor = requestor;
	        this.authToken = authToken;
	        this.config = new config_1.Config();
	    }
	    Authentication.prototype.login = function (username, password) {
	        var _this = this;
	        var url = this.config.apiUrl + '/auth/login';
	        return this.requestor.post(url, {
	            username: username || 'kevinteam@yoobic.com',
	            password: password || 'yoolb2015'
	        }).then(function (res) {
	            _this.authToken.token = res.$mcfly$token;
	            console.log(_this.authToken.token);
	            _this.authToken.user = res.user;
	            return res;
	        });
	    };
	    Authentication.prototype.logout = function () {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            _this.authToken.token = null;
	            resolve(true);
	        });
	    };
	    Authentication.prototype.getCurrentUser = function () {
	        return this.authToken.user;
	    };
	    Authentication = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [requestor_1.Requestor, authToken_1.AuthToken])
	    ], Authentication);
	    return Authentication;
	})();
	exports.Authentication = Authentication;


/***/ },

/***/ 273:
/***/ function(module, exports) {

	var Config = (function () {
	    function Config() {
	        this.apiUrl = 'http://yoo-lb.herokuapp.com';
	    }
	    return Config;
	})();
	exports.Config = Config;


/***/ },

/***/ 274:
/***/ function(module, exports) {

	/*eslint-disable */
	/*jshint ignore:start*/
	'use strict';
	
	window.ngux_types = window.ngux_types || {};
	
	window.ngux_types['Login_Scope0'] = function(id, parentId, Observable, EventFactory) {
	    this.callback0_event = new EventFactory();
	    this.callback0 = this.callback0_event.raise;
	    this.callback1_event = new EventFactory();
	    this.callback1 = this.callback1_event.raise;
	    this.callback2_event = new EventFactory();
	    this.callback2 = this.callback2_event.raise;
	};
	
	/*jshint ignore:end*/
	/*eslint-enable */


/***/ },

/***/ 275:
/***/ function(module, exports) {

	module.exports = "<Login_Scope0 (callback0)=\"goToLogin()\" (callback1)=\"goToLogin()\" (callback2)=\"goToLogin()\">\n</Login_Scope0>\n";

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
	var router_1 = __webpack_require__(243);
	var missionslist_1 = __webpack_require__(277);
	var menucontent_1 = __webpack_require__(285);
	__webpack_require__(288);
	var Menu = (function () {
	    function Menu(router) {
	        this.router = router;
	        this.menuState = 'main';
	    }
	    Menu.prototype.toggleMenu = function () {
	        this.menuState = this.menuState === 'menu' ? 'main' : 'menu';
	    };
	    Menu = __decorate([
	        core_1.Component({
	            selector: 'Menu',
	            template: __webpack_require__(289),
	            directives: [router_1.ROUTER_DIRECTIVES, menucontent_1.MenuContent]
	        }),
	        router_1.RouteConfig([{
	                path: '/missionslist',
	                name: 'MissionsList',
	                component: missionslist_1.MissionsList
	            }]), 
	        __metadata('design:paramtypes', [router_1.Router])
	    ], Menu);
	    return Menu;
	})();
	exports.Menu = Menu;


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
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(185);
	var router_1 = __webpack_require__(243);
	var missioncard_1 = __webpack_require__(278);
	var menu_1 = __webpack_require__(276);
	var missionsbroker_1 = __webpack_require__(281);
	var missiondescriptionsbroker_1 = __webpack_require__(282);
	var requestor_1 = __webpack_require__(270);
	var authentication_1 = __webpack_require__(272);
	__webpack_require__(283);
	var MissionsList = (function () {
	    function MissionsList(router, authentication, missionsBroker, missiondescriptionsBroker, menu) {
	        this.router = router;
	        this.authentication = authentication;
	        this.missionsBroker = missionsBroker;
	        this.missiondescriptionsBroker = missiondescriptionsBroker;
	        this.missions = [];
	        this.menu = menu;
	    }
	    MissionsList.prototype.ngAfterContentInit = function () {
	        var _this = this;
	        setTimeout(function () { return _this.refreshData(); }, 500);
	    };
	    MissionsList.prototype.showMenu = function () {
	        this.menu.toggleMenu();
	    };
	    MissionsList.prototype.refreshData = function () {
	        var _this = this;
	        this.missionsBroker.getAll().then(function (data) {
	            _this.missions = data;
	        });
	    };
	    MissionsList.prototype.startMission = function (mission) {
	        console.log('startMission');
	        console.log(mission);
	        this.missiondescriptionsBroker.getById(mission.description._id).then(function (res) {
	        });
	    };
	    MissionsList.prototype.selectMission = function (mission) {
	        this.selectedMission = mission;
	    };
	    MissionsList.prototype.unselectMission = function () {
	        this.selectedMission = null;
	    };
	    MissionsList = __decorate([
	        core_1.Component({
	            selector: 'MissionsList',
	            template: __webpack_require__(284),
	            providers: [requestor_1.Requestor, missionsbroker_1.MissionsBroker, missiondescriptionsbroker_1.MissionDescriptionsBroker, authentication_1.Authentication],
	            directives: [router_1.ROUTER_DIRECTIVES, missioncard_1.MissionCard, common_1.NgFor]
	        }),
	        __param(4, core_1.Inject(core_1.forwardRef(function () { return menu_1.Menu; }))), 
	        __metadata('design:paramtypes', [router_1.Router, authentication_1.Authentication, missionsbroker_1.MissionsBroker, missiondescriptionsbroker_1.MissionDescriptionsBroker, Object])
	    ], MissionsList);
	    return MissionsList;
	})();
	exports.MissionsList = MissionsList;


/***/ },

/***/ 278:
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
	__webpack_require__(279);
	var MissionCard = (function () {
	    function MissionCard() {
	        this.start1 = new core_1.EventEmitter();
	    }
	    MissionCard.prototype.start = function () {
	        this.start1.emit(null);
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], MissionCard.prototype, "start1", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], MissionCard.prototype, "mission", void 0);
	    MissionCard = __decorate([
	        core_1.Component({
	            selector: 'MissionCard',
	            template: __webpack_require__(280)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MissionCard);
	    return MissionCard;
	})();
	exports.MissionCard = MissionCard;


/***/ },

/***/ 279:
/***/ function(module, exports) {

	/*eslint-disable */
	/*jshint ignore:start*/
	'use strict';
	
	window.ngux_types = window.ngux_types || {};
	
	window.ngux_types['MissionCard_Scope0'] = function(id, parentId, Observable, EventFactory) {
	    this.var0 = Observable();
	    this.var1 = Observable();
	    this.var2 = Observable();
	    this.var3 = Observable();
	    this.callback0_event = new EventFactory();
	    this.callback0 = this.callback0_event.raise;
	};
	
	/*jshint ignore:end*/
	/*eslint-enable */


/***/ },

/***/ 280:
/***/ function(module, exports) {

	module.exports = "<MissionCard_Scope0 [var0]=\"mission.title\" [var1]=\"mission.description.background._downloadURL\" (callback0)=\"start()\" [var2]=\"mission.address\" [var3]=\"mission.description.text\">\n</MissionCard_Scope0>\n";

/***/ },

/***/ 281:
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
	var requestor_1 = __webpack_require__(270);
	var config_1 = __webpack_require__(273);
	var core_1 = __webpack_require__(3);
	var authToken_1 = __webpack_require__(271);
	var MissionsBroker = (function () {
	    function MissionsBroker(requestor, authToken) {
	        this.requestor = requestor;
	        this.authToken = authToken;
	        this.config = new config_1.Config();
	    }
	    MissionsBroker.prototype.getAll = function () {
	        var query = {
	            'where': {
	                'type': {
	                    'nin': ['poll', 'service', 'todo']
	                },
	                'status': {
	                    'nin': ['booked', 'finished']
	                }
	            },
	            'limit': 30,
	            'skip': 0,
	            'fields': {},
	            'include': {
	                'relation': 'description',
	                'scope': {
	                    'fields': ['_id', 'title', 'background', 'icon', 'text']
	                }
	            },
	            'order': []
	        };
	        var url = this.config.apiUrl + '/api/missions?filter=' + encodeURIComponent(JSON.stringify(query));
	        return this.requestor.get(url).then(function (data) {
	            var retVal = data;
	            return retVal;
	        });
	    };
	    MissionsBroker = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [requestor_1.Requestor, authToken_1.AuthToken])
	    ], MissionsBroker);
	    return MissionsBroker;
	})();
	exports.MissionsBroker = MissionsBroker;


/***/ },

/***/ 282:
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
	var requestor_1 = __webpack_require__(270);
	var config_1 = __webpack_require__(273);
	var core_1 = __webpack_require__(3);
	var authToken_1 = __webpack_require__(271);
	var MissionDescriptionsBroker = (function () {
	    function MissionDescriptionsBroker(requestor, authToken) {
	        this.requestor = requestor;
	        this.authToken = authToken;
	        this.config = new config_1.Config();
	    }
	    MissionDescriptionsBroker.prototype.getById = function (id) {
	        var url = this.config.apiUrl + '/api/missiondescriptions/' + (id || '55bba776433ad2c619012410');
	        return this.requestor.get(url).then(function (data) {
	            var retVal = data;
	            return retVal;
	        });
	    };
	    MissionDescriptionsBroker = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [requestor_1.Requestor, authToken_1.AuthToken])
	    ], MissionDescriptionsBroker);
	    return MissionDescriptionsBroker;
	})();
	exports.MissionDescriptionsBroker = MissionDescriptionsBroker;


/***/ },

/***/ 283:
/***/ function(module, exports) {

	/*eslint-disable */
	/*jshint ignore:start*/
	'use strict';
	
	window.ngux_types = window.ngux_types || {};
	
	window.ngux_types['MissionsList_Scope0'] = function(id, parentId, Observable, EventFactory) {
	    this.children0 = Observable();
	    this.callback0_event = new EventFactory();
	    this.callback0 = this.callback0_event.raise;
	    this.callback1_event = new EventFactory();
	    this.callback1 = this.callback1_event.raise;
	};
	window.ngux_types['MissionsList_Scope1'] = function(id, parentId, Observable, EventFactory) {
	    this.var0 = Observable();
	    this.children0 = Observable();
	    this.callback0_event = new EventFactory();
	    this.callback0 = this.callback0_event.raise;
	};
	
	/*jshint ignore:end*/
	/*eslint-enable */


/***/ },

/***/ 284:
/***/ function(module, exports) {

	module.exports = "<MissionsList_Scope0 (callback0)=\"showMenu()\" (callback1)=\"refreshData()\">\n    <MissionsList_Scope1 *ngFor=\"#m of missions\" collection=\"children0\">\n        <MissionCard  [mission]=\"m\" (start1)=\"startMission(m)\" collection=\"children0\" scope=\"MissionsList_Scope2\">\n        </MissionCard>\n    </MissionsList_Scope1>\n</MissionsList_Scope0>\n";

/***/ },

/***/ 285:
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
	var common_1 = __webpack_require__(185);
	var router_1 = __webpack_require__(243);
	var requestor_1 = __webpack_require__(270);
	var authentication_1 = __webpack_require__(272);
	__webpack_require__(286);
	var MenuContent = (function () {
	    function MenuContent(router, authentication) {
	        this.router = router;
	        this.authentication = authentication;
	        this.contents = [];
	        this.user = this.authentication.getCurrentUser();
	        this.contents = [{
	                name: 'missions',
	                delay: 0.3 / 4,
	                title: 'My Missions',
	                icon: 'yo-bicycle',
	                action: function () {
	                    this.goTo('missionMaster');
	                }.bind(this)
	            }, {
	                name: 'map',
	                delay: 0.6 / 4,
	                title: 'Map',
	                icon: 'yo-map',
	                action: function () {
	                }.bind(this)
	            }, {
	                name: 'chat',
	                delay: 0.9 / 4,
	                title: 'Chat',
	                icon: 'yo-chat',
	                action: function () {
	                    this.goTo('friends');
	                }.bind(this)
	            }, {
	                name: 'calendar',
	                delay: 1.2 / 4,
	                title: 'Calendar',
	                icon: 'yo-calendar',
	                action: function () {
	                    this.goTo('calendar');
	                }.bind(this)
	            }, {
	                name: 'profile',
	                delay: 1.5 / 4,
	                title: 'Profile',
	                icon: 'yo-profile',
	                action: function () {
	                    this.goTo('profile');
	                }.bind(this)
	            }, {
	                name: 'logout',
	                delay: 1.8 / 4,
	                title: 'Logout',
	                icon: 'yo-logout',
	                action: function () {
	                    this.logout();
	                }.bind(this)
	            }];
	    }
	    MenuContent.prototype.logout = function () {
	        var _this = this;
	        this.authentication.logout().then(function (res) {
	            _this.router.parent.navigate(['Login']);
	        });
	    };
	    MenuContent.prototype.goTo = function (state) {
	    };
	    MenuContent = __decorate([
	        core_1.Component({
	            selector: 'MenuContent',
	            template: __webpack_require__(287),
	            providers: [requestor_1.Requestor, authentication_1.Authentication],
	            directives: [router_1.ROUTER_DIRECTIVES, common_1.NgFor, common_1.NgIf]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, authentication_1.Authentication])
	    ], MenuContent);
	    return MenuContent;
	})();
	exports.MenuContent = MenuContent;


/***/ },

/***/ 286:
/***/ function(module, exports) {

	/*eslint-disable */
	/*jshint ignore:start*/
	'use strict';
	
	window.ngux_types = window.ngux_types || {};
	
	window.ngux_types['MenuContent_Scope0'] = function(id, parentId, Observable, EventFactory) {
	    this.children0 = Observable();
	    this.children1 = Observable();
	};
	window.ngux_types['MenuContent_Scope1'] = function(id, parentId, Observable, EventFactory) {
	    this.var0 = Observable();
	    this.var1 = Observable();
	};
	window.ngux_types['MenuContent_Scope2'] = function(id, parentId, Observable, EventFactory) {
	    this.var0 = Observable();
	    this.var1 = Observable();
	    this.var2 = Observable();
	    this.callback0_event = new EventFactory();
	    this.callback0 = this.callback0_event.raise;
	};
	
	/*jshint ignore:end*/
	/*eslint-enable */


/***/ },

/***/ 287:
/***/ function(module, exports) {

	module.exports = "<MenuContent_Scope0>\n    <MenuContent_Scope1 *ngIf=\"user\" var0=\"{{user.imageData}}\" var1=\"{{user.username}}\" collection=\"children0\">\n    </MenuContent_Scope1>\n    <MenuContent_Scope2 *ngFor=\"#c of contents\" (callback0)=\"c.action()\" var0=\"{{c.title}}\" var1=\"{{c.delay}}\" var2=\"{{c.delay}}\" collection=\"children1\">\n    </MenuContent_Scope2>\n</MenuContent_Scope0>\n";

/***/ },

/***/ 288:
/***/ function(module, exports) {

	/*eslint-disable */
	/*jshint ignore:start*/
	'use strict';
	
	window.ngux_types = window.ngux_types || {};
	
	window.ngux_types['Menu_Scope0'] = function(id, parentId, Observable, EventFactory) {
	    this.var0 = Observable();
	    this.router_outlet = Observable();
	    this.children1 = Observable();
	    this.callback0_event = new EventFactory();
	    this.callback0 = this.callback0_event.raise;
	};
	
	/*jshint ignore:end*/
	/*eslint-enable */


/***/ },

/***/ 289:
/***/ function(module, exports) {

	module.exports = "<Menu_Scope0 [var0]=\"menuState\" (callback0)=\"toggleMenu(false)\">\n    <router-outlet></router-outlet>\n    <MenuContent  collection=\"children1\" scope=\"Menu_Scope2\">\n    </MenuContent>\n</Menu_Scope0>\n";

/***/ },

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(291));
	__export(__webpack_require__(292));
	__export(__webpack_require__(307));
	//# sourceMappingURL=ng2-translate.js.map

/***/ },

/***/ 291:
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
	var translate_service_1 = __webpack_require__(292);
	var TranslatePipe = (function () {
	    function TranslatePipe(translate) {
	        this.value = '';
	        this.translate = translate;
	    }
	    TranslatePipe.prototype.updateValue = function (key, interpolateParams) {
	        var _this = this;
	        this.translate.get(key, interpolateParams).subscribe(function (res) {
	            _this.value = res ? res : key;
	        });
	    };
	    TranslatePipe.prototype.transform = function (query, args) {
	        var _this = this;
	        if (query.length === 0) {
	            return query;
	        }
	        // if we ask another time for the same key, return the last value
	        if (this.lastKey && query === this.lastKey) {
	            return this.value;
	        }
	        var interpolateParams;
	        if (args.length && args[0] !== null) {
	            if (typeof args[0] === 'string' && args[0].length) {
	                // we accept objects written in the template such as {n:1},
	                // which is why we might need to change it to real JSON objects such as {"n":1}
	                try {
	                    interpolateParams = JSON.parse(args[0].replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": '));
	                }
	                catch (e) {
	                    throw new SyntaxError("Wrong parameter in TranslatePipe. Expected a valid Object, received: " + args[0]);
	                }
	            }
	            else if (typeof args[0] === 'object' && !Array.isArray(args[0])) {
	                interpolateParams = args[0];
	            }
	        }
	        // store the query, in case it changes
	        this.lastKey = query;
	        // set the value
	        this.updateValue(query, interpolateParams);
	        // subscribe to onLangChange event, in case the language changes
	        this.translate.onLangChange.subscribe(function (params) {
	            _this.updateValue(query, interpolateParams);
	        });
	        return this.value;
	    };
	    TranslatePipe = __decorate([
	        core_1.Injectable(),
	        core_1.Pipe({
	            name: 'translate',
	            pure: false // required to update the value when the promise is resolved
	        }), 
	        __metadata('design:paramtypes', [translate_service_1.TranslateService])
	    ], TranslatePipe);
	    return TranslatePipe;
	})();
	exports.TranslatePipe = TranslatePipe;
	//# sourceMappingURL=translate.pipe.js.map

/***/ },

/***/ 292:
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
	var http_1 = __webpack_require__(228);
	var Observable_1 = __webpack_require__(52);
	__webpack_require__(293);
	__webpack_require__(301);
	__webpack_require__(305);
	var translate_parser_1 = __webpack_require__(307);
	var TranslateStaticLoader = (function () {
	    function TranslateStaticLoader(http, prefix, suffix) {
	        this.sfLoaderParams = { prefix: 'i18n', suffix: '.json' };
	        this.http = http;
	        this.configure(prefix, suffix);
	    }
	    /**
	     * Defines the prefix & suffix used for getTranslation
	     * @param prefix
	     * @param suffix
	     */
	    TranslateStaticLoader.prototype.configure = function (prefix, suffix) {
	        this.sfLoaderParams.prefix = prefix ? prefix : this.sfLoaderParams.prefix;
	        this.sfLoaderParams.suffix = suffix ? suffix : this.sfLoaderParams.suffix;
	    };
	    /**
	     * Gets the translations from the server
	     * @param lang
	     * @returns {any}
	     */
	    TranslateStaticLoader.prototype.getTranslation = function (lang) {
	        return this.http.get(this.sfLoaderParams.prefix + "/" + lang + this.sfLoaderParams.suffix)
	            .map(function (res) { return res.json(); });
	    };
	    TranslateStaticLoader = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, String, String])
	    ], TranslateStaticLoader);
	    return TranslateStaticLoader;
	})();
	var TranslateService = (function () {
	    function TranslateService(http) {
	        this.http = http;
	        /**
	         * The lang currently used
	         */
	        this.currentLang = this.defaultLang;
	        /**
	         * An EventEmitter to listen to lang changes events
	         * onLangChange.subscribe((params: {lang: string, translations: any}) => {
	         *     // do something
	         * });
	         * @type {ng.EventEmitter}
	         */
	        this.onLangChange = new core_1.EventEmitter();
	        this.translations = {};
	        this.parser = new translate_parser_1.Parser();
	        this.useStaticFilesLoader();
	    }
	    /**
	     * Use a static files loader
	     */
	    TranslateService.prototype.useStaticFilesLoader = function (prefix, suffix) {
	        this.currentLoader = new TranslateStaticLoader(this.http, prefix, suffix);
	    };
	    /**
	     * Sets the default language to use as a fallback
	     * @param lang
	     */
	    TranslateService.prototype.setDefaultLang = function (lang) {
	        this.defaultLang = lang;
	    };
	    /**
	     * Changes the lang currently used
	     * @param lang
	     * @returns {Observable<*>}
	     */
	    TranslateService.prototype.use = function (lang) {
	        var _this = this;
	        // check if this language is available
	        if (typeof this.translations[lang] === 'undefined') {
	            // not available, ask for it
	            var pending = this.getTranslation(lang);
	            pending.subscribe(function (res) {
	                _this.changeLang(lang);
	            });
	            return pending;
	        }
	        else {
	            this.changeLang(lang);
	            return Observable_1.Observable.of(this.translations[lang]);
	        }
	    };
	    /**
	     * Gets an object of translations for a given language with the current loader
	     * @param lang
	     * @returns {Observable<*>}
	     */
	    TranslateService.prototype.getTranslation = function (lang) {
	        var _this = this;
	        this.pending = this.currentLoader.getTranslation(lang).share();
	        this.pending.subscribe(function (res) {
	            _this.translations[lang] = res;
	            _this.updateLangs();
	            _this.pending = undefined;
	        });
	        return this.pending;
	    };
	    /**
	     * Manually sets an object of translations for a given language
	     * @param lang
	     * @param translations
	     */
	    TranslateService.prototype.setTranslation = function (lang, translations) {
	        this.translations[lang] = translations;
	        this.updateLangs();
	    };
	    /**
	     * Returns an array of currently available langs
	     * @returns {any}
	     */
	    TranslateService.prototype.getLangs = function () {
	        return this.langs;
	    };
	    /**
	     * Update the list of available langs
	     */
	    TranslateService.prototype.updateLangs = function () {
	        this.langs = Object.keys(this.translations);
	    };
	    /**
	     * Gets the translated value of a key (or an array of keys)
	     * @param key
	     * @param interpolateParams
	     * @returns {any} the translated key, or an object of translated keys
	     */
	    TranslateService.prototype.get = function (key, interpolateParams) {
	        var _this = this;
	        if (!key) {
	            throw new Error('Parameter "key" required');
	        }
	        var getParsedResult = function (translations, key) {
	            var res;
	            if (key instanceof Array) {
	                var result = {};
	                for (var _i = 0; _i < key.length; _i++) {
	                    var k = key[_i];
	                    result[k] = getParsedResult(translations, k);
	                }
	                return result;
	            }
	            if (translations) {
	                res = _this.parser.interpolate(translations[key], interpolateParams);
	            }
	            if (typeof res === 'undefined' && _this.defaultLang && _this.defaultLang !== _this.currentLang) {
	                var translations_1 = _this.parser.flattenObject(_this.translations[_this.defaultLang]);
	                res = _this.parser.interpolate(translations_1[key], interpolateParams);
	            }
	            return res || key;
	        };
	        // check if we are loading a new translation to use
	        if (this.pending) {
	            return this.pending.map(function (res) {
	                return getParsedResult(_this.parser.flattenObject(res), key);
	            });
	        }
	        else {
	            var translations;
	            if (this.translations[this.currentLang]) {
	                translations = this.parser.flattenObject(this.translations[this.currentLang]);
	            }
	            return Observable_1.Observable.of(getParsedResult(translations, key));
	        }
	    };
	    /**
	     * Sets the translated value of a key
	     * @param key
	     * @param value
	     * @param lang
	     */
	    TranslateService.prototype.set = function (key, value, lang) {
	        if (lang === void 0) { lang = this.currentLang; }
	        this.translations[lang][key] = value;
	        this.updateLangs();
	    };
	    TranslateService.prototype.changeLang = function (lang) {
	        this.currentLang = lang;
	        this.onLangChange.emit({ lang: lang, translations: this.translations[lang] });
	    };
	    TranslateService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], TranslateService);
	    return TranslateService;
	})();
	exports.TranslateService = TranslateService;
	//# sourceMappingURL=translate.service.js.map

/***/ },

/***/ 307:
/***/ function(module, exports) {

	var Parser = (function () {
	    function Parser() {
	        this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
	    }
	    /**
	     * Interpolates a string to replace parameters
	     * "This is a {{ key }}" ==> "This is a value", with params = { key: "value" }
	     * @param expr
	     * @param params
	     * @returns {string}
	     */
	    Parser.prototype.interpolate = function (expr, params) {
	        if (!params) {
	            return expr;
	        }
	        else {
	            params = this.flattenObject(params);
	        }
	        return expr.replace(this.templateMatcher, function (substring, b) {
	            var r = params[b];
	            return typeof r !== 'undefined' ? r : substring;
	        });
	    };
	    /**
	     * Flattens an object
	     * { key1: { keyA: 'valueI' }} ==> { 'key1.keyA': 'valueI' }
	     * @param target
	     * @returns {Object}
	     */
	    Parser.prototype.flattenObject = function (target) {
	        var delimiter = '.';
	        var maxDepth;
	        var currentDepth = 1;
	        var output = {};
	        function step(object, prev) {
	            Object.keys(object).forEach(function (key) {
	                var value = object[key];
	                var newKey = prev ? prev + delimiter + key : key;
	                maxDepth = currentDepth + 1;
	                if (!Array.isArray(value) && typeof value === 'object' && Object.keys(value).length && currentDepth < maxDepth) {
	                    ++currentDepth;
	                    return step(value, newKey);
	                }
	                output[newKey] = value;
	            });
	        }
	        step(target);
	        return output;
	    };
	    return Parser;
	})();
	exports.Parser = Parser;
	//# sourceMappingURL=translate.parser.js.map

/***/ },

/***/ 308:
/***/ function(module, exports) {

	/*eslint-disable */
	/*jshint ignore:start*/
	'use strict';
	
	window.ngux_types = window.ngux_types || {};
	
	window.ngux_types['Main_Scope0'] = function(id, parentId, Observable, EventFactory) {
	    this.router_outlet = Observable();
	};
	
	/*jshint ignore:end*/
	/*eslint-enable */


/***/ },

/***/ 309:
/***/ function(module, exports) {

	module.exports = {
		"HELLO_WORLD": "hello world"
	};

/***/ },

/***/ 310:
/***/ function(module, exports) {

	module.exports = "<Main_Scope0>\n    <router-outlet></router-outlet>\n</Main_Scope0>\n";

/***/ }

});
//# sourceMappingURL=bundle.js.map
/***/