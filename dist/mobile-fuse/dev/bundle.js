if (typeof window === "undefined") {window = global;}
if (typeof window["webpackJsonp"]) {webpackJsonp = window.webpackJsonp;}

webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var bootstrap_1 = __webpack_require__(1);
	var main_1 = __webpack_require__(271);
	var authToken_1 = __webpack_require__(274);
	var ng2_translate_1 = __webpack_require__(296);
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
	var dom_adapter_1 = __webpack_require__(112);
	var api_1 = __webpack_require__(91);
	var renderer_1 = __webpack_require__(113);
	var dom_adapter_2 = __webpack_require__(115);
	var xhr_1 = __webpack_require__(154);
	var xhr_2 = __webpack_require__(155);
	var exception_handler_1 = __webpack_require__(15);
	var application_common_providers_1 = __webpack_require__(109);
	var compiler_1 = __webpack_require__(156);
	var platform_common_providers_1 = __webpack_require__(108);
	var common_1 = __webpack_require__(185);
	var http_1 = __webpack_require__(228);
	var router_1 = __webpack_require__(243);
	var fuse_location_strategy_1 = __webpack_require__(270);
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

/***/ 270:
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
	var login_1 = __webpack_require__(272);
	var menu_1 = __webpack_require__(279);
	var router_1 = __webpack_require__(243);
	var ng2_translate_1 = __webpack_require__(296);
	__webpack_require__(314);
	var Main = (function () {
	    function Main(translate) {
	        this.translate = translate;
	        translate.setDefaultLang('en');
	        translate.setTranslation('en', __webpack_require__(315));
	        translate.use('en');
	    }
	    Main = __decorate([
	        core_1.Component({
	            selector: 'Main',
	            directives: [router_1.ROUTER_DIRECTIVES],
	            template: __webpack_require__(316)
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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(243);
	var requestor_1 = __webpack_require__(273);
	var authentication_1 = __webpack_require__(275);
	__webpack_require__(277);
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
	            template: __webpack_require__(278),
	            providers: [requestor_1.Requestor, authentication_1.Authentication],
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, authentication_1.Authentication])
	    ], Login);
	    return Login;
	})();
	exports.Login = Login;


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
	var http_1 = __webpack_require__(228);
	var core_1 = __webpack_require__(3);
	var authToken_1 = __webpack_require__(274);
	var Requestor = (function () {
	    function Requestor(http, authToken) {
	        this.http = http;
	        this.authToken = authToken;
	    }
	    Requestor.prototype.post = function (url, body) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            _this.http.post(url, body ? JSON.stringify({
	                params: body
	            }) : null, {
	                headers: _this._buildHeaders()
	            })
	                .map(function (res) { return res.json(); })
	                .subscribe(function (res) { return resolve(res); }, function (err) { return reject(err.json()); });
	        });
	    };
	    Requestor.prototype.get = function (url) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            _this.http.get(url, {
	                headers: _this._buildHeaders()
	            })
	                .map(function (res) { return res.json(); })
	                .subscribe(function (res) { return resolve(res); }, function (err) { return reject(err.json()); });
	        });
	    };
	    Requestor.prototype.put = function (url, body) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            _this.http.put(url, body ? JSON.stringify(body) : null, {
	                headers: _this._buildHeaders()
	            })
	                .map(function (res) { return res.json(); })
	                .subscribe(function (res) { return resolve(res); }, function (err) { return reject(err.json()); });
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
	var requestor_1 = __webpack_require__(273);
	var config_1 = __webpack_require__(276);
	var core_1 = __webpack_require__(3);
	var authToken_1 = __webpack_require__(274);
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

/***/ 276:
/***/ function(module, exports) {

	var Config = (function () {
	    function Config() {
	        this.apiUrl = 'http://localhost:3000';
	    }
	    return Config;
	})();
	exports.Config = Config;


/***/ },

/***/ 277:
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

/***/ 278:
/***/ function(module, exports) {

	module.exports = "<Login_Scope0 (callback0)=\"goToLogin()\" (callback1)=\"goToLogin()\" (callback2)=\"goToLogin()\">\n</Login_Scope0>\n";

/***/ },

/***/ 279:
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
	var missionslist_1 = __webpack_require__(280);
	var menucontent_1 = __webpack_require__(291);
	__webpack_require__(294);
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
	            template: __webpack_require__(295),
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

/***/ 280:
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
	var missioncard_1 = __webpack_require__(281);
	var missiondetail_1 = __webpack_require__(284);
	var menu_1 = __webpack_require__(279);
	var missionsbroker_1 = __webpack_require__(287);
	var missiondescriptionsbroker_1 = __webpack_require__(288);
	var requestor_1 = __webpack_require__(273);
	var authentication_1 = __webpack_require__(275);
	__webpack_require__(289);
	var MissionsList = (function () {
	    function MissionsList(router, authentication, missionsBroker, missiondescriptionsBroker, menu) {
	        this.router = router;
	        this.authentication = authentication;
	        this.missionsBroker = missionsBroker;
	        this.missiondescriptionsBroker = missiondescriptionsBroker;
	        this.data = {};
	        this.activePage = 0;
	        this.isInit = false;
	        this.menu = menu;
	        this.data = {};
	        this.tabs = ['missions', 'polls', 'services', 'todos'];
	    }
	    MissionsList.prototype.ngAfterContentInit = function () {
	        var _this = this;
	        setTimeout(function () { return _this.refreshData(); }, 500);
	    };
	    MissionsList.prototype.showMenu = function () {
	        this.menu.toggleMenu();
	    };
	    MissionsList.prototype.getTabsCount = function () {
	        var _this = this;
	        var count = 0;
	        this.tabs.forEach(function (t) {
	            if (_this.data[t + 'Count'] > 0) {
	                count += 1;
	            }
	        });
	        return count;
	    };
	    MissionsList.prototype.refreshData = function () {
	        var _this = this;
	        this.missionsBroker.getAvailable().then(function (data) {
	            _this.data.missionsCount = data.missionsCount;
	            _this.data.pollsCount = data.pollsCount;
	            _this.data.servicesCount = data.servicesCount;
	            _this.data.todosCount = data.todosCount;
	            _this.data.services = data.services;
	            _this.data.missions = data.missions;
	            _this.data.polls = data.polls;
	            _this.data.todos = data.todos;
	            setTimeout(function () {
	                _this.isInit = true;
	            }, 500);
	        });
	    };
	    MissionsList.prototype.startMission = function (mission) {
	        this.missiondescriptionsBroker.getById(mission.description._id).then(function (res) {
	        });
	    };
	    MissionsList.prototype.selectMission = function (mission) {
	        console.log('selectMission');
	        this.selectedMission = mission;
	    };
	    MissionsList.prototype.unselectMission = function () {
	        this.selectedMission = null;
	    };
	    MissionsList.prototype.setActivePage = function (i) {
	        if (this.isInit) {
	            this.activePage = i;
	        }
	    };
	    MissionsList = __decorate([
	        core_1.Component({
	            selector: 'MissionsList',
	            template: __webpack_require__(290),
	            providers: [requestor_1.Requestor, missionsbroker_1.MissionsBroker, missiondescriptionsbroker_1.MissionDescriptionsBroker, authentication_1.Authentication],
	            directives: [router_1.ROUTER_DIRECTIVES, missioncard_1.MissionCard, missiondetail_1.MissionDetail, common_1.NgFor]
	        }),
	        __param(4, core_1.Inject(core_1.forwardRef(function () { return menu_1.Menu; }))), 
	        __metadata('design:paramtypes', [router_1.Router, authentication_1.Authentication, missionsbroker_1.MissionsBroker, missiondescriptionsbroker_1.MissionDescriptionsBroker, Object])
	    ], MissionsList);
	    return MissionsList;
	})();
	exports.MissionsList = MissionsList;


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
	var core_1 = __webpack_require__(3);
	__webpack_require__(282);
	var MissionCard = (function () {
	    function MissionCard() {
	        this.select = new core_1.EventEmitter();
	    }
	    MissionCard.prototype.selectEmit = function () {
	        console.log('selectEmit');
	        this.select.emit(null);
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], MissionCard.prototype, "select", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], MissionCard.prototype, "mission", void 0);
	    MissionCard = __decorate([
	        core_1.Component({
	            selector: 'MissionCard',
	            template: __webpack_require__(283)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MissionCard);
	    return MissionCard;
	})();
	exports.MissionCard = MissionCard;


/***/ },

/***/ 282:
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

/***/ 283:
/***/ function(module, exports) {

	module.exports = "<MissionCard_Scope0 (callback0)=\"selectEmit()\" [var0]=\"mission.title\" [var1]=\"mission.description.background._downloadURL\" [var2]=\"mission.address\" [var3]=\"mission.description.text\">\n</MissionCard_Scope0>\n";

/***/ },

/***/ 284:
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
	__webpack_require__(285);
	var MissionDetail = (function () {
	    function MissionDetail() {
	        this.book = new core_1.EventEmitter();
	        this.close = new core_1.EventEmitter();
	    }
	    MissionDetail.prototype.bookEmit = function () {
	        this.book.emit(null);
	    };
	    MissionDetail.prototype.closeEmit = function () {
	        this.close.emit(null);
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], MissionDetail.prototype, "book", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], MissionDetail.prototype, "close", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], MissionDetail.prototype, "mission", void 0);
	    MissionDetail = __decorate([
	        core_1.Component({
	            selector: 'MissionDetail',
	            template: __webpack_require__(286)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MissionDetail);
	    return MissionDetail;
	})();
	exports.MissionDetail = MissionDetail;


/***/ },

/***/ 285:
/***/ function(module, exports) {

	/*eslint-disable */
	/*jshint ignore:start*/
	'use strict';
	
	window.ngux_types = window.ngux_types || {};
	
	window.ngux_types['MissionDetail_Scope0'] = function(id, parentId, Observable, EventFactory) {
	    this.var0 = Observable();
	    this.var1 = Observable();
	    this.var2 = Observable();
	    this.var3 = Observable();
	    this.var4 = Observable();
	    this.callback0_event = new EventFactory();
	    this.callback0 = this.callback0_event.raise;
	};
	
	/*jshint ignore:end*/
	/*eslint-enable */


/***/ },

/***/ 286:
/***/ function(module, exports) {

	module.exports = "<MissionDetail_Scope0 (callback0)=\"closeEmit()\" [var0]=\"mission.title\" [var1]=\"mission.icon\" [var2]=\"mission.description.background._downloadURL\" [var3]=\"mission.address\" [var4]=\"mission.description.text\">\n</MissionDetail_Scope0>\n";

/***/ },

/***/ 287:
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
	var requestor_1 = __webpack_require__(273);
	var config_1 = __webpack_require__(276);
	var core_1 = __webpack_require__(3);
	var authToken_1 = __webpack_require__(274);
	var MissionsBroker = (function () {
	    function MissionsBroker(requestor, authToken) {
	        this.requestor = requestor;
	        this.authToken = authToken;
	        this.config = new config_1.Config();
	    }
	    MissionsBroker.prototype.getAvailable = function () {
	        var url = this.config.apiUrl + '/api/businesslogic/getAvailableMissions';
	        return this.requestor.post(url, {
	            geoloc: [-0.2379271, 51.5314939],
	            radius: 400
	        }).then(function (res) {
	            return res.data;
	        });
	    };
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

/***/ 288:
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
	var requestor_1 = __webpack_require__(273);
	var config_1 = __webpack_require__(276);
	var core_1 = __webpack_require__(3);
	var authToken_1 = __webpack_require__(274);
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

/***/ 289:
/***/ function(module, exports) {

	/*eslint-disable */
	/*jshint ignore:start*/
	'use strict';
	
	window.ngux_types = window.ngux_types || {};
	
	window.ngux_types['MissionsList_Scope0'] = function(id, parentId, Observable, EventFactory) {
	    this.var0 = Observable();
	    this.var1 = Observable();
	    this.children0 = Observable();
	    this.children1 = Observable();
	    this.children2 = Observable();
	    this.callback0_event = new EventFactory();
	    this.callback0 = this.callback0_event.raise;
	    this.callback1_event = new EventFactory();
	    this.callback1 = this.callback1_event.raise;
	};
	window.ngux_types['MissionsList_Scope1'] = function(id, parentId, Observable, EventFactory) {
	    this.var0 = Observable();
	    this.var1 = Observable();
	    this.var2 = Observable();
	    this.children0 = Observable();
	    this.callback0_event = new EventFactory();
	    this.callback0 = this.callback0_event.raise;
	};
	window.ngux_types['MissionsList_Scope2'] = function(id, parentId, Observable, EventFactory) {
	};
	window.ngux_types['MissionsList_Scope3'] = function(id, parentId, Observable, EventFactory) {
	    this.var0 = Observable();
	    this.var1 = Observable();
	    this.children0 = Observable();
	    this.callback0_event = new EventFactory();
	    this.callback0 = this.callback0_event.raise;
	};
	window.ngux_types['MissionsList_Scope4'] = function(id, parentId, Observable, EventFactory) {
	    this.var0 = Observable();
	    this.children0 = Observable();
	    this.callback0_event = new EventFactory();
	    this.callback0 = this.callback0_event.raise;
	};
	
	/*jshint ignore:end*/
	/*eslint-enable */


/***/ },

/***/ 290:
/***/ function(module, exports) {

	module.exports = "<MissionsList_Scope0 (callback0)=\"showMenu()\" (callback1)=\"refreshData()\" [var0]=\"getTabsCount()\" var1=\"page{{activePage}}\">\n    <MissionsList_Scope1 var0=\"page{{i}}Tab\" *ngFor=\"#t of tabs; #i=index\" (callback0)=\"setActivePage(i)\" [var1]=\"data[t+'Count']>0?'Visible':'Collapsed'\" var2=\"{{t}} {{data[t+'Count']}}\" collection=\"children0\">\n        <MissionsList_Scope2 *ngIf=\"i==activePage\" collection=\"children0\">\n        </MissionsList_Scope2>\n    </MissionsList_Scope1>\n    <MissionsList_Scope3 var0=\"page{{i}}\" *ngFor=\"#t of tabs; #i=index\" [var1]=\"data[t+'Count']>0?'Visible':'Collapsed'\" (callback0)=\"setActivePage(i)\" collection=\"children1\">\n        <MissionsList_Scope4 *ngFor=\"#m of data[t]\" collection=\"children0\">\n            <MissionCard  [mission]=\"m\" (select)=\"selectMission(m)\" collection=\"children0\" scope=\"MissionsList_Scope5\">\n            </MissionCard>\n        </MissionsList_Scope4>\n    </MissionsList_Scope3>\n    <MissionDetail  [mission]=\"selectedMission\" *ngIf=\"selectedMission\" (close)=\"unselectMission()\" Alignment=\"Top\" collection=\"children2\" scope=\"MissionsList_Scope6\">\n    </MissionDetail>\n</MissionsList_Scope0>\n";

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
	var common_1 = __webpack_require__(185);
	var router_1 = __webpack_require__(243);
	var requestor_1 = __webpack_require__(273);
	var authentication_1 = __webpack_require__(275);
	__webpack_require__(292);
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
	            template: __webpack_require__(293),
	            providers: [requestor_1.Requestor, authentication_1.Authentication],
	            directives: [router_1.ROUTER_DIRECTIVES, common_1.NgFor, common_1.NgIf]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, authentication_1.Authentication])
	    ], MenuContent);
	    return MenuContent;
	})();
	exports.MenuContent = MenuContent;


/***/ },

/***/ 292:
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

/***/ 293:
/***/ function(module, exports) {

	module.exports = "<MenuContent_Scope0>\n    <MenuContent_Scope1 *ngIf=\"user\" var0=\"{{user.imageData}}\" var1=\"{{user.username}}\" collection=\"children0\">\n    </MenuContent_Scope1>\n    <MenuContent_Scope2 *ngFor=\"#c of contents\" (callback0)=\"c.action()\" var0=\"{{c.title}}\" var1=\"{{c.delay}}\" var2=\"{{c.delay}}\" collection=\"children1\">\n    </MenuContent_Scope2>\n</MenuContent_Scope0>\n";

/***/ },

/***/ 294:
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

/***/ 295:
/***/ function(module, exports) {

	module.exports = "<Menu_Scope0 [var0]=\"menuState\" (callback0)=\"toggleMenu(false)\">\n    <router-outlet></router-outlet>\n    <MenuContent  collection=\"children1\" scope=\"Menu_Scope2\">\n    </MenuContent>\n</Menu_Scope0>\n";

/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(297));
	__export(__webpack_require__(298));
	__export(__webpack_require__(313));
	//# sourceMappingURL=ng2-translate.js.map

/***/ },

/***/ 297:
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
	var translate_service_1 = __webpack_require__(298);
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

/***/ 298:
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
	var Observable_1 = __webpack_require__(51);
	__webpack_require__(299);
	__webpack_require__(307);
	__webpack_require__(311);
	var translate_parser_1 = __webpack_require__(313);
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

/***/ 313:
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

/***/ 314:
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

/***/ 315:
/***/ function(module, exports) {

	module.exports = {
		"LOREM": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aut expedita eaque culpa a rem adipisci nam, eveniet similique suscipit voluptatibus saepe iusto, eos quia reiciendis ea vitae, ducimus. Sapiente!",
		"SKIP": "Skip",
		"ME": "Me",
		"RENAME": "Rename",
		"SELECTAFIELD": "Select a field",
		"ENTERAVALUE": "Enter a value",
		"ADDFILTER": "Add a filter",
		"LASTSEEN": "Last seen",
		"_KMD.LMT": "Last seen",
		"HISTORY": "History",
		"ARCHIVE": "Archive",
		"ARCHIVED": "Archived",
		"DOWNLOAD": "Download",
		"PROFILECOMPLETED": "Profile Completed",
		"CAMPAIGNCREATOR": "Campaign creator",
		"CAMPAIGNS": "Campaigns",
		"CAMPAIGN": "Campaign",
		"NEWCAMPAIGN": "New campaign",
		"CLONECAMPAIGN": "Clone campaign",
		"MISSIONDETAILS": "Quest details",
		"COMBO": "Single choice",
		"COMBOMULTI": "Multiple choice",
		"SHORTTEXT": "Short text",
		"LONGTEXT": "Long text",
		"DATE": "Date",
		"CREATIONDATE": "Created the",
		"TIME": "Time",
		"NUMBER": "Number",
		"BARCODE": "Barcode",
		"CHECKBOX": "Checkbox",
		"TOOGLE": "Toggle",
		"TEL": "Phone number",
		"COMBOMULTIBUTTONS": "Buttons multiple choice",
		"COMBOBUTTONS": "Buttons single choice",
		"STARRATING": "Star rating",
		"ADD": "Add",
		"NEW": "New",
		"CREATE": "Create",
		"COPY": "Copy",
		"LOAD": "Load",
		"ADDFORMS": "Questions",
		"UPLOAD": "Upload",
		"ADDPAGE": "Add a page",
		"ADDFIELD": "Add a field",
		"BACKGROUND": "Background",
		"ANYCOMMENTS": "Any comments?",
		"ALLOWCOMMENTS": "Comments",
		"TRANSFERT": "Bank transfer",
		"OTHER1": "Other",
		"OTHER": "Other (specify)",
		"SAVING": "Saving in progress",
		"RETRY": "Retry",
		"DATA": "Data",
		"CLOSE": "Close",
		"PIE": "Pie",
		"GAUGE": "Gauge",
		"BAR": "Bar",
		"COLUMN": "Column",
		"LINE": "Line",
		"RADAR": "Radar",
		"FUNNEL": "Funnel",
		"BYDATE": "By dates",
		"BYSTATUS": "By status",
		"BYVALIDITY": "By validity",
		"BYVERSION": "By version",
		"BYDEVICE": "By device",
		"BYPLATFORM": "By platform",
		"INFORMATION": "Information",
		"ROLES": "Roles",
		"SUPPORT": "Support",
		"FRIENDS": "Team",
		"CODE": "Code",
		"VALUE": "Value",
		"SHOWMORE": "Show me more",
		"ADMIN": "Admin",
		"TEAM": "Team",
		"ADDMISSIONDESCRIPTION": "Create a new quest model",
		"PROGRESS": "Progress",
		"VALIDATION": "Validation",
		"SOCIAL": "Social",
		"FRENCH": "Français",
		"ENGLISH": "English",
		"FULLSCREEN": "Full screen",
		"TAGS": "Tags",
		"FIELDS": "Fields",
		"FIELD": "Field",
		"PLACE": "Where ?",
		"ADDNEWCHART": "Add a new graph",
		"BALANCE": "Balance",
		"PAID": "Paid",
		"ANALYZE": "Analyse",
		"ANALYSE": "Analyse",
		"WHATSNEW": "What's new",
		"SHOWONLYTAGGED": "Show only tagged",
		"SORTBY": "Sort by",
		"CAMPAIGNEMPTY": "Oops! No campaign selected",
		"CAMPAIGNSELECTHELP": "You need to select a campaign first (in the top right corner). ",
		"GROUPEMPTY": "Oops! No group selected",
		"GROUPSELECTHELP": "You need to select a group first (in the top right corner). ",
		"ALLOWLIBRARY": "Allow library import",
		"ALLOWANNOTATE": "Allow annotations",
		"ALLOWHISTORY": "Allow history",
		"SHOWONLOCATION": "Show on location",
		"SHOWHISTORY": "Show history",
		"ANNOTATE": "Annotate",
		"INSTRUCTIONS": "Instructions",
		"DUPLICATE": "Duplicate",
		"BECOMEANEXPLORER": "Become an  Explorer",
		"AREYOUTEAM": "Are you part of a Team",
		"SUBMITMISSION": "Submit your Quest",
		"SUBMITPOLL": "Submit",
		"SUBMITQUIZZ": "Submit",
		"SUBMIT": "Submit",
		"REFERENCE": "Reference",
		"PAYMENTHISTORY": "Payments History",
		"VERSION": "Version",
		"RATE": "Rate",
		"FACEBOOKSHARE": "I just found a fun quest near me thanks to Yoobic!<br>  I can earn £{{price}} in just a few minutes. Click here to find missions too !",
		"FACEBOOKSHAREBOOKED": " I just booked a fun quest near me thanks to Yoobic!<br>  I will earn £{{price}} in just a few minutes. Click here to find missions too !",
		"FACEBOOKSHAREPAYMENT": " I just earned {{price}} in just a few minutes thanks to Yoobic!<br> Click here to find missions too !",
		"QUESTSEARCH": "Search for a quest",
		"QUIZZSEARCH": "Search for a quiz",
		"SIGNATURE": "Signature",
		"OFFLINEMODE": "No internet connection",
		"ANYWHERE": "Anywhere",
		"GEOFILTER": "Geographic filter",
		"CAMPAIGNFILTER": "Campaign filter",
		"ADDCAMPAIGN": "Add a campaign",
		"DELETECAMPAIGN": "Delete the campaign",
		"RANGE": "Slider",
		"ADDLOCATION": "Add Point of sale(s)",
		"ADDLOCATIONTYPE": "Add a type of Point of sales",
		"LOCATIONGEOCODEERROR": "Please fix all geocoding erros before saving",
		"NOTIFICATIONEMAILS": "Notification email(s)",
		"SKIPVALIDATION": "Skip validation",
		"ALLOWMULTIPLE": "Allow multiple",
		"LOADMORE": "Load more ...",
		"HIDEMOBILE": "Hide from mobile",
		"HIDEHEADER": "Hide header",
		"SHOWSERVICE": "Show service",
		"VALIDATEDBY": "Validated by",
		"REPUBLISH": "Republish",
		"LINKTOPROFILE": "Link to profile",
		"INFO": "Info",
		"SCORING": "Scoring",
		"ADDSCORING": "Add a new scoring",
		"PAYMENTSUCCESS": "Congratulations! You just earned {{price}} :)",
		"MISSIONALREADYBOOKEDFORM": "Oops! The quest isn’t available anymore, because the booking period has expired.",
		"SHAREPAYMENTFACEBOOK": "Wanna share your happiness with your friends on Facebok?",
		"RATEOURAPP": "Loving Yoobic? You would TREMENDOUSLY help us if you could leave a review on the Store!",
		"FACTOR": "Factor",
		"WITHVALUE": "Value/True",
		"WITHOUTVALUE": "No value/False",
		"ONLINE": "Online",
		"OFFLINE": "Offline",
		"DEVICE": "Device",
		"PLATFORM": "Platform",
		"ISFACEBOOK": "Facebook",
		"CHARTS": "Charts",
		"JOINED": "Joined",
		"CATEGORY": "Category",
		"CATEGORIES": "Categories",
		"FILTERS": "Filters",
		"FILTERISACTIVE": "A filter is active",
		"SERVICE": "Request",
		"AUTOCOMPLETE": "Autocomplete",
		"CLEARABLE": "Clearable",
		"MULTIPLE": "Multiple",
		"STEP": "Step",
		"MYSERVICES": "My Requests",
		"SERVICES": "Requests",
		"ORDERSERVICESBYDATE": "Order requests by date",
		"BOOKSERVICE": "Raise a request",
		"PAYMENTCARDS": "Payment Cards",
		"MAKEDEFAULT": "Make Default",
		"SERVICESEARCH": "Raise a new request",
		"DISCONNECT": "Disconnect",
		"CALLING": "Calling",
		"ISCALLINGYOU": "is calling you ...",
		"UPDATE_INSTALL": "Install update",
		"UPDATE_AVAILABLE": "An new update is available",
		"UPDATE_UPDATING": "Updating",
		"UPDATE_COMPLETE": "Update is complete. The app is restarting :)",
		"UPDATE_CONFIRM": "Are you sure you want to update the app ?",
		"DOWNLOADING": "Downloading",
		"INSTALLATION": "Installation",
		"CATALOG": "Catalog",
		"CATALOGS": "Catalogs",
		"ADDCATALOG": "Add a catalog",
		"DELETECATALOG": "Delete catalog",
		"DELETECATALOGCONFIRM": "Are you sure you want to delete this catalog?",
		"SELECTPRODUCT": "Select a product",
		"CHANGEPRODUCT": "Change active product",
		"NOACTIVEPRODUCT": "Please select a product first, in order to count it",
		"FINISHPRODUCTCOUNT": "Are you sure you have counted all the products correctly ?",
		"CLEARPRODUCTCOUNT": "Clear counts",
		"CLEARPRODUCTCOUNTCONFIRM": "Are you sure you want to clear the counts ?",
		"LEGEND": "Legend",
		"ADDPRODUCT": "Add a product",
		"DELETEPRODUCT": "Delete this product",
		"DELETEPRODUCTCONFIRM": "Are you sure you want to delete this product?",
		"ADDPRODUCTTOBASKET": "Add product(s) to your basket",
		"IMPORTUSERS": "Importing Users",
		"IMPORTUSERSCONFIRM": "Are you sure you want to import {{total}} users",
		"IMPORTGEOFILTERS": "Importing Geo Filters",
		"IMPORTGEOFILTERSCONFIRM": "Are you sure you want to import {{total}} geo filters",
		"IMPORTCAMPAIGNFILTERS": "Importing Campaign Filters",
		"IMPORTCAMPAIGNFILTERSCONFIRM": "Are you sure you want to import {{total}} campaign filters",
		"CHANGEVALIDATIONSTATUSOCONFIRM": "Are you sure you want to change the validation status ?",
		"PRODUCT": "Product",
		"PRODUCTS": "Products",
		"CLOSEBASKET": "Close your basket",
		"CLEARBASKETCONFIRM": "Are you sure you want to clear your basket ?",
		"BASKET": "Basket",
		"OUTOFSTOCK": "Out of stock",
		"SAVINGSERVICE": "Please wait while we save your request",
		"SUBMITSERVICE": "Submit request",
		"GOTOMYSERVICES": "Go to my requests",
		"SERVICESAVEDSUCCESS": "Your request has been saved successfully. We will contact you as soon as possible.",
		"SERVICESAVEDERROR": "We couldn't save your request",
		"PRODUCTCHECK": "Product Check",
		"SHELF": "Shelf",
		"ON": "On",
		"NBROFFACING": "Number of facing",
		"NOTAVAILABLE": "Not available",
		"SHOWTABLE": "Show table",
		"CONFIGURE": "Configure",
		"REMOVE": "Remove",
		"DELETECONDITION": "Delete condition",
		"DELETECONDITIONCONFIRM": "Arey you sure you want to delete this condition?",
		"CONDITION": "Condition",
		"ADDCONDITION": "Add condition",
		"CALENDAR": "Calendar",
		"ISCALENDAR": "Calendar",
		"ADDCALENDAREVENT": "Add a mission",
		"EVENT": "Event",
		"CREATEMISSION": "Create the mission",
		"NOTES": "Notes",
		"TIMELINE": "Timeline",
		"VERSIONMIN": "Version min",
		"LATEST": "Latest",
		"OPERATOR": "Operator",
		"PAGES": "Pages",
		"PAGE": "Page",
		"CONDITIONS": "Conditions",
		"CONTAINS": "Contains",
		"NOTCONTAINS": "Does not contains",
		"TODOS": "To-do",
		"TODO": "To-do",
		"QUIZZ": "Quiz",
		"SELECTUSER": "Select a user",
		"SELECTUSERS": "Select users",
		"LOCATEME": "Locate me",
		"TASKS": "Tasks",
		"TASK": "Task",
		"TEXT": "Text",
		"DUEDATE": "Due date",
		"DELETETODOCONFIRM": "Are you sure you want to remove this task?",
		"ENVIRONMENT": "Environment",
		"EMAILREPORT": "Email Report",
		"EMAILREPORTCANCELCONFIRM": "Are you sure you want to cancel? you didn't send your report.",
		"SENDPHOTO": "Send Photo",
		"SENDPHOTOCONFIRM": "Are you sure you want to send this photo to : ",
		"SENDANEWPHOTO": "sent a new photo",
		"INPROGRESS": "In Progress",
		"REQUESTOR": "Requestor",
		"PRIORITY": "Priority",
		"PRIORITIES": "Priorities",
		"VALIDFROM": "Valid from",
		"VALIDUNTIL": "Valid until",
		"FROM": "From",
		"UNTIL": "Until",
		"VALIDITY": "Validity",
		"FINDSTORENEARYOU": "Find a store near by id ...",
		"SEARCHBYADDRESS": "Find by address",
		"SECURITY": "Security",
		"CHANNELS": "Channels",
		"CHANNEL": "Channel",
		"ADDCHANNEL": "Add a channel",
		"UPDATECHANNEL": "Update the channel",
		"QUESTION": "Question",
		"ANSWER": "Answer",
		"APPLY": "Apply",
		"SAVEDFILTERS": "Saved filters",
		"SAVEFILTER": "Save this filter",
		"QUESTIONS": "Questions",
		"UPVOTE": "Upvote",
		"VOTE": "Vote",
		"READMORE": "Read more",
		"READLESS": "Read less",
		"ASKAQUESTION": "Ask a question",
		"WHATISYOURQUESTION": "What is your question ?",
		"TELLUSMORE": "Tell us more if you need to...",
		"ADDAPHOTOIFYOUNEED": "You can also include a photo<br/>for more clarity",
		"ASK": "Ask",
		"SAVECONFIRMQUESTION": "Are you sure you want to post your question ?",
		"ANSWERCONFIRM": "Are you sure you want to post your answer ?",
		"SAVINGQUESTION": "We are posting your question, please wait :)",
		"ENTERYOURANSWER": "Enter your answer ...",
		"NOANSWER": "No answer yet ... can you help ?",
		"QUESTIONCONFIRMDELETE": "Are you sure you want to delete this question ?",
		"ANSWERCONFIRMDELETE": "Are you sure you want to delete this answer ?",
		"SHOWANSWERS": "Show answers",
		"SCORE": "Score",
		"MYQUIZZ": "My results",
		"EXPLANATION": "Explanation",
		"RANKING": "Ranking",
		"TOCOME": "To come",
		"ACTIVITY": "Activity",
		"SHOWCALENDAR": "Show in calendar",
		"SUBMITTEXT": "Submit text",
		"SUCCESSTEXT": "Success text",
		"BOOKANOTHERSERVICE": "Book another service",
		"SERVICEVALIDATED": "Your request has been validated",
		"SERVICEREJECTED": "Your request has been rejected",
		"SERVICEUPDATED": "our request has been updated",
		"MISSIONVALIDATED": "Your quest has been validated",
		"MISSIONREJECTED": "Your quest has been rejected",
		"MISSIONANNOTATED": "Your quest has been annotated",
		"SHOWUSERSEMAIL": "Show users email button",
		"SENDFINISHEDEMAIL": "Get email on quest finished",
		"MISSIONSAVEPENDINGOPEN": "This task is about to be submitted automatically in a few seconds. If you make changes, they might not be taken into account. Are you sure ?",
		"SENDTHISPHOTOONLY": "Send only this photo",
		"CLIENTID": "Client Id",
		"PHOTOCOUNTER": "Photo counter",
		"PHOTOLIVECOUNTER": "Image Detection",
		"COLOR": "Color",
		"COUNTING": "Counting",
		"WALKTHROUGH1": "Walkthrough",
		"VIEWPHOTO": "View Photo",
		"DELETEPHOTO": "Delete Photo",
		"DELETEPHOTOSINALBUM": "Dont save photos in album",
		"OVERVIEW": "Overview",
		"ZOOMOUTTEXT": "See all",
		"TOP30": "Top 30",
		"CHECK": "Check",
		"PROCESSING": "Processing",
		"COMPONENTS": "Components",
		"CAMPAIGNHELP": "Welcome to the campaign creation wizard.<br/>Let's start by defining how the quest will look like for the users.",
		"LOCATIONSHELP": "Select the stores you want to publish your quests to.",
		"PUBLISHHELP": "Select the options you want to use when publishing your quests.",
		"WALKTHROUGH": {
			"CROWD": {
				"1": {
					"DESCRIPTION": "Browse quests in shops around you.<br/> Select one. It’s on!"
				},
				"2": {
					"DESCRIPTION": "Follow the instructions, step by step.<br/> In just a few minutes, the quest is completed"
				},
				"3": {
					"DESCRIPTION": "Once your quest is validated, you get instantly paid. You nailed it!"
				}
			},
			"TEAM": {
				"1": {
					"DESCRIPTION": "Fill in your visit reports directly on your app.<br/>The collected data is automatically sent to the HQ!."
				},
				"2": {
					"DESCRIPTION": "Stay updated on current challenges and other news from your company, anytime."
				},
				"3": {
					"DESCRIPTION": "Chat in real time with the HQ or support teams.<br/> Instant feedback and help!"
				}
			},
			"SERVICE": {
				"1": {
					"DESCRIPTION": "Select a call request category.<br/>The brand receives your request instantly."
				},
				"2": {
					"DESCRIPTION": "Track directly in the app the status of the requests made."
				},
				"3": {
					"DESCRIPTION": "Contact the brand direct through the chat function, or by calling direct!"
				}
			},
			"ASK": {
				"1": {
					"DESCRIPTION": "Take quizzes and increase your expertise."
				},
				"2": {
					"DESCRIPTION": "Directly ask questions or share your knowledge with your team."
				},
				"3": {
					"DESCRIPTION": "Get updated when someone answers your question."
				}
			}
		},
		"WELCOME": "Welcome to YOOBIC",
		"LOGINWITHFACEBOOK": "Connect with Facebook",
		"LOGIN": "Log In",
		"SIGNUP": "Sign Up",
		"SIGNIN": "Sign In",
		"SIGNUPWITHFACEBOOK": "Sign up with Facebook",
		"SLIDETUTORIAL": "Swipe to see a quick tutorial ...",
		"SELECTAMISSION": "Select a Quest",
		"GOTOLOCATION": "Go to Location",
		"COMPLETETHEBRIEF": "Complete the Quest",
		"GETPAID": "Get Paid",
		"GETPAIDCONFIRM": "Your request is being processed. We'll notify you once we're done.",
		"GETPAIDERROR": "Oops, something went wrong. Our support team will contact you soon ...",
		"GETPAIDERROR_EMAIL": "It seems your paypal email is not valid, please input a valid paypal email.",
		"SELECTAMISSION1": "Select a Car",
		"GOTOLOCATION1": "Go to Location",
		"COMPLETETHEBRIEF1": "Complete the booking",
		"GETPAID1": "Save Money",
		"FORGOTPASSWORD": "Forgot your password?",
		"EMAILPLACEHOLDER": "What's your email",
		"PASSWORDPLACEHOLDER": "Create your password",
		"PASSWORD": "Password",
		"TERMSANDCONDITION": "Terms & Conditions",
		"ACCEPT": "Accept",
		"BOOK": "Book",
		"PROFILEPICTURE": "Profile picture",
		"USEXISTING": "Use existing",
		"TAKEANEWPHOTO": "Take a new photo",
		"EMAILREQUIRED": "A valid email is required",
		"PASSWORDREQUIRED": "A valid password is required",
		"PASSWORDTOOSHORT": "Minimum 6 characters are required",
		"TRYITFORYOURSELF": "Try it for yourself...",
		"NOAVAILABLEMISSION": "Oh no! It looks like there aren't any quests near you right now. Don't worry, we'll be in touch as soon as one becomes available.",
		"SWIPEDOWN": "Swipe down to see other quests",
		"SWIPEDOWNMORE": "Swipe down to see more...",
		"VIEWMAP": "View Map",
		"VIEWLIST": "View List",
		"VIEWCARD": "View Cards",
		"HOME": "Quest selection",
		"NEARYOU": "By Distance",
		"BYAMOUNT": "By Amount",
		"BYDEADLINE": "By Deadline",
		"FROMHOME": "From Home",
		"CURRENTMISSIONS": "My YOOBIC Quests",
		"MYACCOUNT": "My Account",
		"EARNINGS": "Earnings",
		"EARNINGS1": "Savings",
		"MISSIONSWON": "Quests Won",
		"MISSIONLOCATION": "Location",
		"MISSIONBRIEF": "Brief",
		"LEVEL": "Level",
		"SEARCH": "Search",
		"COMPLEXSEARCH": "Advanced search",
		"SEARCHAUTOCOMPLETE": "Click me to search",
		"CLEAR": "Clear",
		"CLEARCONFIRM": "Are you sure you want to clear everything ?",
		"DETAILS": "Details",
		"SHOWDETAILS": "Show Details",
		"MISSIONBOOKED": "Quest booked",
		"MISSIONSBOOKED": "Quests booked",
		"CONGRATULATIONS": "Congratulations",
		"MISSIONASIDE": "We've just put this Quest aside for you.",
		"MISSIONUNTIL": "You have {{duration}} hour(s) to complete the Quest, or it will become available to someone else.",
		"GOTOMYMISSIONS": "Go to my Quests",
		"MYMISSIONS": "My Quests",
		"CURRENT": "Current",
		"FINISHED": "Finished",
		"WHEN": "When",
		"BOOKED": "Booked",
		"SUPPORTEMAIL": "support@yoobic.com",
		"SUPPORTINTRO": "Hello... What can we help you with?",
		"CONTACTOURCEO": "Contact our CEO",
		"CONTACTOURCEOSUBJECT": "Dear M.CEO",
		"CONTACTOURCEOBODY": "Dear M.CEO <br/> I love/hate this app.<br/>Here's some feedback :",
		"OR": "or",
		"NONE": "none",
		"ALL": "All",
		"SAVE": "Save",
		"SAVENOTVALID": "Please make sure all mandatory fields (*) are completed first",
		"SAVECONFIRM": "Are you sure that you want to submit your answers? ",
		"SAVECONFIRMPROFILE": "Are you sure that you want to save your profile ?",
		"SAVECONFIRMSERVICE": "Are you sure that you submit this request? ",
		"SAVECONFIRMCALENDAR": "Are you sure that you want to confirm the booking? ",
		"FORM": "Form",
		"FORMS": "Forms",
		"ADDAPHOTO": "Click to add a photo",
		"CHANGEPHOTO": "Click on the photo to change it ...",
		"RESETPASSWORD": "Reset Password",
		"RESETPASSWORDOK": "Your new password has been sent. Check your inbox...",
		"RESETPASSWORDERROR": "We couldn't find any user with the associated email address.",
		"PERSONALINFO": "Personal Info",
		"EMAIL": "Email",
		"EMAILS": "Emails",
		"FIRSTNAME": "First Name",
		"LASTNAME": "Last Name",
		"CREDITCARD": "Payment info",
		"CREDITCARDINFOMISSING": "Please input your payment info first",
		"PASSWORDDONOTMATCH": "Passwords do not match",
		"CHANGEPASSWORD": "Change Password",
		"CHANGEPASSWORDOK": "Your password have been changed properly.",
		"CHANGEPASSWORDERROR": "An error occured during the change of your password.",
		"PASSWORDIDENTICAL": "The passwords are identical",
		"OLDPASSWORD": "Old password",
		"NEWPASSWORD": "New password",
		"CONFIRMPASSWORD": "Confirm new password",
		"INVALID_PASSWORD": "The specified password is incorrect",
		"DISTANCE": "Distance",
		"BOOKEDFOR": "Booking ends",
		"BRIEF": "Brief",
		"NEXT": "Next",
		"BOGUSMISSIONDESCRIPTION": "Go to the specified store and check the snack and treat section to make sure Lu cookies are available and complete the brief.",
		"OPENINGOOGLEMAP": "Google Maps",
		"OPENINGOOGLEMAPCONFIRM": "Do you want to open Google Maps to get directions? You'll need to go back to YOOBIC to start your quest",
		"OPENINCITYMAPPER": "CityMapper",
		"OPENINCITYMAPPERCONFIRM": "Do you want to open CityMapper to get directions? You'll need to go back to YOOBIC to start your quest",
		"CLICKTOOPENMAP": "Tap to open the map",
		"OPENMAPIN": "Open map in",
		"TOOMANYMISSIONTITLE": "Yoobic Quests",
		"TOOMANYMISSIONCONTENT": "You cannot book more than 5 Yoobic Quests at the same time.",
		"MISSIONBOOKVERSION": "You need to update to the latest version on the app store/play store to access this quest",
		"UNBOOK": "Unbook",
		"UNBOOKCONFIRM": "Are you sure you want to unbook this quest ? Pre-saved answers will be lost.",
		"UNBOOKSERVICECONFIRM": "Are you sure you want to cancel this request ?",
		"START": "Start",
		"TAKEANEWVIDEO": "Record a video",
		"VIDEO": "Video",
		"AUDIO": "Audio",
		"LOGOUT": "Logout",
		"LOGOUTCONFIRM": "Are you sure you want to log out of the application ?",
		"PULLTOREFRESH": "Pull to refresh ...",
		"CURRENCY": "£",
		"DISTANCEUNIT": "mi",
		"SWIPETOUNBOOK": "Swipe left to unbook your quest",
		"SWIPETODELETE": "Swipe left to delete an item",
		"MISSIONBROWSEONLINE": "You need to be online to browse quests ...",
		"SETTINGS": "Settings",
		"ENABLEGEOPUSHNOTIFICATIONS": "Geo Notifications",
		"CANCEL": "Cancel",
		"CANCELCONFIRM": "Are you sure you want to cancel ?",
		"OK": "OK",
		"ADDRESS": "Address",
		"CANCELMISSIONFORM": "Cancel",
		"CANCELMISSIONFORMCONFIRM": "Are you sure you want to cancel? Your quest will not be completed until you finish filling the form.",
		"BOOKBASKETEMPTY": "You haven’t booked any quest yet. Click on \"Search for a quest\" to get started !",
		"FINISHEDBASKETEMPTY": "You haven’t completed any quest yet. Click on \"Search for a quest\" to get started !",
		"PAYMENTBASKETEMPTY": "It looks like your payment history is empty. To remedy the situation, request a payment when your Quest is validated.",
		"MISSIONHISTORYEMPTY": "It looks like we could find not any previous quest for this location",
		"MISSIONLISTEMPTY": "We don't have anything for you at the moment. Don't worry, we'll push new quests very soon",
		"POLLLISTEMPTY": "We don't have anything for you at the moment. Don't worry, we'll push new polls very soon",
		"SERVICELISTEMPTY": "It looks like there isn'nt any request at the moment...",
		"SERVICEBASKETEMPTY": "You haven’t created any request yet. Click on \"Book\" to get started !",
		"FEEDEMPTY": "It looks like there isn't any news to display for now",
		"LISTEMPTY": "It looks like there is nothing to display for now",
		"CALENDAREMPTY": "It looks like you don’t have anything scheduled",
		"STOREEMPTY": "You haven’t selected any point point of sales yet.",
		"ADDSCHEDULE": "Add a Schedule",
		"END": "End",
		"YES": "Yes",
		"NO": "No",
		"PUBLICMISSIONS": "Public quests",
		"GEORADIUS": "Alert radius in miles",
		"RADIUS": "Radius in miles",
		"PAYPALEMAIL": "PayPal email",
		"NOPAYPALACCOUNT": "Don't have a PayPal account yet ? <br /> Click here to register",
		"PAYPALACCOUNTALREADYUSED": "This PayPal account is already associated with another user.",
		"PAYPALDESCRIPTION": "A PayPal account allows you to get paid.<br/> If you do not have a PayPal account already, you can create one for free on <a href=\"http://www.paypal.com\">www.paypal.com</a>",
		"PROFILEDIRTY": "Profile changed",
		"PROFILEDIRTYCONFIRM": "Are you sure you want to cancel the changed you've made ?",
		"EXIT": "Exit",
		"EXITCONFIRM": "Oops! You didn't submit. Are you sure you want to exit? Your answers will be saved and you will need to submit them later.",
		"EXITCONFIRMSERVICE": "Oops! You didn't submit your request. Are you sure you want to exit?",
		"BEGINNER": "Beginner",
		"NEEDHELP": "Need help ?",
		"HOWCANWEHELP": "How can we help ?",
		"CHAT": "Chat",
		"CALL": "Call",
		"SAVINGMISSION": "Your quest is being uploaded...",
		"SAVINGPOLL": "Your poll is being uploaded...",
		"SAVINGQUIZZ": "Your quiz is being uploaded...",
		"BOOKINGMISSION": "Your quest is being booked...",
		"BOOKINGPOLL": "Your poll is being booked...",
		"BOOKINGQUIZZ": "Your quiz is being booked...",
		"ORWITHEMAIL": "or with email",
		"JOINPRIVATEGROUP": "Join a private group",
		"GROUPCODE": "Do you have a team's keycode ?",
		"ENTERYOURGROUPCODE": "Enter your team's keycode",
		"JOINPRIVATEGROUPCONFIRM": "Your request is being processed. We'll notify you when you re accepted.",
		"JOINGROUPREQUESTNOTFOUND": "Code not valid. Please contact your private group admin...",
		"STARTNOPOSITIONERROR": "Oops, it looks like we can't see your current location. Please try again. This quest won't be unlocked until we're sure you're on site.",
		"STARTTOFARERROR": "This quest won't be unlocked until we're sure you're on site.",
		"FORMMANDATORYVALUE": "Wait up! You need to complete this step before you can continue.",
		"VALIDATED": "Validated",
		"REJECTED": "Rejected",
		"VALIDATIONINPROGRESS": "Validation in progress",
		"POLL": "Poll",
		"POLLS": "Polls",
		"BACK": "Back",
		"PAYMENTS": "Payments",
		"TRANSACTIONDATE": "Date",
		"TOBETRANSFERED": "Available",
		"ALREADYTRANSFERED": "Transfered",
		"OLDPASSWORDINCORRECT": "Oops! The old password is incorrect.",
		"SHOW": "Show",
		"TELEPHONE": "Phone number",
		"SYNCINPROGRESS": "Sync is in progress...",
		"CURRENTPOSITIONTITLE": "Location services disabled",
		"CURRENTPOSITIONCONTENT": "Yoobic needs access to your location. Please turn on location access.",
		"REQUESTERROR": "Oops, it looks like we couldn't retrieve anything. Please check your internet connection.",
		"QUIZZSAVEDSUCCESS": "You correctly answered {{value}} of the {{total}} questions.",
		"MISSIONSAVEDSUCCESS": "The quest has been saved successfully",
		"MISSIONSAVEDSUCCESSPUBLIC": "The quest has been saved successfully. ",
		"POLLSTARTAGAIN": "Start a new poll",
		"POLLSAVEDSUCCESS": "The poll has been saved successfully",
		"POLLSAVEDSUCCESSPUBLIC": "The poll has been saved successfully. ",
		"MISSIONSAVEDERROR": "An error occurred when saving this quest. Please check your internet connection and try again.",
		"POLLSAVEDERROR": "An error occurred when saving this poll. Please check your internet connection and try again.",
		"QUIZZSAVEDERROR": "An error occurred when saving this quiz. Please check your internet connection and try again.",
		"PROFILESAVEDSUCCESS": "Your profile has been saved successfully",
		"PROFILESAVEDERROR": "An error occurred when saving your profile. Please check your internet connection and try again.",
		"QUOTE1": "<blockquote><span>You don’t have to be great to start but you have to start to be great.</span><footer>Unknow</footer></blockquote>",
		"QUOTE2": "<blockquote><span>If you don’t overcome your tendency to give up easily, your life will lead to nothing.</span><footer>Mas Oyama, kyokushinkai karate founder</footer></blockquote>",
		"QUOTE3": "<blockquote><span>Behind each triumph are new peaks to be conquered.</span><footer>Mas Oyama, kyokushinkai karate founder</footer></blockquote>",
		"QUOTE4": "<blockquote><span>If you have confidence in your own words, aspirations, thoughts, and actions and do your very best, you will have no need to regret the outcome of what you do. Fear and trembling are the lot of the person who, while stinting effort, hopes that everything will come out precisely as he wants.</span><footer>Mas Oyama, kyokushinkai karate founder</footer></blockquote>",
		"QUOTE5": "<blockquote><span>Human beings are capable of virtually limitless degradation, they are also capable of virtually limitless improvement and achievement. Success depends on goals and on diligence in pursuing them.</span><footer>Mas Oyama, kyokushinkai karate founder</footer></blockquote>",
		"QUOTE6": "<blockquote><span>A human life gains luster and strength only when it is polished and tempered.</span><footer>Mas Oyama, kyokushinkai karate founder</footer></blockquote>",
		"QUOTE7": "<blockquote><span>What I hear, I forget. What I see, I remember. What I do, I understand.</span><footer>Confucius</footer></blockquote>",
		"HELP": "Help",
		"INTROMISSIONMAINSWIPE": "Welcome to Yoobic<br>Here s a little walktrough of the app...<br/><b>Swipe</b> through each quest.<br/><b>Tap</b> to view the details.",
		"INTROMISSIONMAINMAP": "View quests  on a <b>map</b>",
		"INTROMISSIONMAINLIST": "View quests in a <b>list</b>",
		"INTROMISSIONMAINRIGHTMENU": "Open the right menu",
		"INTROMISSIONMAINLEFTMENU": "Open the left menu",
		"INTROMISSIONSIDEMENUFILTER": "<b>Filter</b> quests by price or distance",
		"INTROMISSIONSIDEMENUBASKET": "Go to your quests <b>basket</b>",
		"INTROMISSIONSIDEMENUPROFIL": "Access your <b>profile</b>",
		"INTROMISSIONBASKETFILTER": "Switch between current and finished quests",
		"INTROMISSIONBASKETLIST": "Tap on a quest when you are on site to start",
		"INTROMISSIONDETAILMAP": "Tap here to view the quest location's map",
		"INTROMISSIONDETAILADDRESS": "Tap here to view the complete address",
		"INTROMISSIONDETAILBRIEF": "Tap here to read the complete quest brief",
		"INTROMISSIONDETAILBOOK": "Tap here to book the quest.<br> You ll have 2 hours to complete it",
		"DASHBOARD": "Dashboard",
		"MISSIONS": "Quests",
		"MISSION": "Quest",
		"VALIDATEMISSIONS": "Validate Quests",
		"VALIDATEMISSION": "Validate this quest",
		"UNVALIDATEMISSION": "Reject this quest",
		"UNVALIDATEMISSIONS": "Reject Quests",
		"CREATEMISSIONS": "Create Quests",
		"UPDATEMISSION": "Update this quest",
		"UPDATEMISSIONDATA": "Update this quest data",
		"PHOTOMISSIONS": "View Photos",
		"PHOTO": "Photo",
		"IMAGE": "Image",
		"PHOTOS": "Photos",
		"VIDEOS": "Videos",
		"PROFILE": "Profile",
		"TITLE": "Title",
		"PRICE": "Price",
		"REFRESH": "Refresh",
		"LOCATIONS": "Points of sale",
		"LOCATION": "Point of sale",
		"MISSIONSPERLOCATION": "Quests per point(s) of sale",
		"FILES": "Files",
		"DOCUMENTS": "Documents",
		"DOCUMENT": "Document",
		"DOCUMENTVIEW": "View the document",
		"TYPE": "Type",
		"SIZE": "Size",
		"LOCATIONTYPES": "Point of sale types",
		"LOCATIONTYPE": "Point of sale type",
		"CREATELOCATIONTYPE": "Create a new point of sale type",
		"CREATELOCATION": "Create a new point of sale",
		"UPDATELOCATION": "Update this point of sale",
		"SHOWLOCATIONORPHELIN": "Show point of sale without a type",
		"CHOOSEFILES": "Choose file(s)",
		"DELETE": "Delete",
		"UPDATE": "Update",
		"ACTIONS": "Action(s)",
		"VIEW": "View",
		"VALIDATE": "Validate",
		"UNVALIDATE": "Reject",
		"STATUS": "Status",
		"FINISHEDDATE": "Finished Date",
		"FINISHEDBY": "Finished By",
		"BOOKEDBY": "Booked by",
		"BOOKEDUNTIL": "Until",
		"LOCATIONSEARCH": "Search a specific point of sale ...",
		"STARTDATESEARCH": "Enter a start date ...",
		"ENDDATESEARCH": "Enter a end date ...",
		"STARTDATE": "Start date",
		"ENDDATE": "End date",
		"DATES": "Dates",
		"USERS": "Users",
		"USER": "User",
		"DESCRIPTION": "Description",
		"SHORTDESCRIPTION": "Short Description",
		"ICON": "Icon",
		"SKIPBOOKEDSCREEN": "Skip booked screen",
		"MISSIONALREADYBOOKED": "This quest has already been booked by someone else",
		"RATING": "Rating",
		"ID": "Id",
		"GROUPS": "Groups",
		"PUBLIC": "Public",
		"USERNAME": "Username",
		"COUNT": "Count",
		"SUM": "Sum",
		"AVERAGE": "Average",
		"CREATEGROUP": "Create a group",
		"UPDATEGROUP": "Update this group",
		"DELETEGROUP": "Delete this group",
		"DELETEGROUPCONFIRM": "Are you sure you want to delete this group ?",
		"DELETECHART": "Delete this chart",
		"DELETECHARTCONFIRM": "Are you sure you want to delete this chart ?",
		"DELETEMISSION": "Delete this quest",
		"DELETEMISSIONCONFIRM": "Are you sure you want to delete this quest ?",
		"DELETESLIDE": "Delete this page",
		"DELETESLIDECONFIRM": "Are you sure you want to delete this page ?",
		"DELETEALLSLIDE": "Delete all pages",
		"DELETEALLSLIDECONFIRM": "Are you sure you want to delete all those pages ?",
		"DELETEFIELD": "Delete this field",
		"DELETEFIELDCONFIRM": "Are you sure you want to delete this field ?",
		"DELETECOMMENT": "Delete this comment",
		"DELETECOMMENTCONFIRM": "Are you sure you want to delete this comment ?",
		"DELETEFEED": "Delete this feed",
		"DELETEFEEDCONFIRM": "Are you sure you want to delete this feed ?",
		"DELETEFILTER": "Delete this filter",
		"DELETEFILTERCONFIRM": "Are you sure you want to delete this filter ?",
		"DELETEALL": "Delete all",
		"DELETEALLCONFIRM": "Are you sure you want to delete {{total}} entities?",
		"DELETEGEOFILTER": "Delete this geo filter",
		"DELETEGEOFILTERCONFIRM": "Are you sure you want to delete this geo filter?",
		"DELETECAMPAIGNFILTER": "Delete this campaign filter",
		"DELETECAMPAIGNFILTERCONFIRM": "Are you sure you want to delete this campaign filter?",
		"DELETECHANNEL": "Delete this channel",
		"DELETECHANNELCONFIRM": "Are you sure you want to delete this channel",
		"CLEARFILTERSCONFIRM": "Are you sure you want to clear all filters ?",
		"CLEARFILTERCAMPAIGNSCONFIRM": "Are you sure you want to clear your campaign filters ?",
		"CLEARFILTERLOCATIONSCONFIRM": "Are you sure you want to clear your store filters ?",
		"CLEARFILTERUSERSCONFIRM": "Are you sure you want to clear your user filters ?",
		"CLEARFILTERPRIORITIESCONFIRM": "Are you sure you want to clear your priority filters ?",
		"CLEARFILTERVALIDITYCONFIRM": "Are you sure you want to clear your validity filters ?",
		"CLEARFILTERDATESCONFIRM": "Are you sure you want to clear your date filters ?",
		"CLEARFILTERAUTHORISATIONSCONFIRM": "Are you sure you want to clear your authorization filters ?",
		"EDITPHOTO": "Photo edit",
		"EDITPHOTOCANCELCONFIRM": "Are you sure you want to clear your modifications ?",
		"EXPORTALLCONFIRM": "Are you sure you want to export {{total}} entities?",
		"GENERATEMISSIONS": "Generate {{total}} quest(s)",
		"GENERATEMISSIONSCSV": "Export {{total}} quest(s)",
		"GENERATEMISSIONSCONFIRM": "Are you sure you want to generate {{total}} quests?",
		"CREATEUSER": "Create a new user",
		"ADDUSER": "Add user",
		"ADDUSERTOGROUP": "Add user to group",
		"ADDGROUPTOROLE": " Add group to role",
		"ADDGROUPTOGROUP": "Add group to group",
		"DELETEUSERFROMGROUP": "Remove from group",
		"DELETEUSERFROMGROUPCONFIRM": "Are you sure you want to delete those user(s) from the group?",
		"DELETEGROUPFROMROLE": "Remove from role",
		"DELETEGROUPFROMROLECONFIRM": "Are you sure you want to delete those group(s) from the role?",
		"DELETEUSER": "Remove user",
		"DELETEUSERCONFIRM": "Are you sure you want to delete this user ?",
		"ARCHIVEUSER": "Archive user",
		"ARCHIVEUSERCONFIRM": "Are you sure you want to archive this user ?",
		"DELETELOCATION": "Delete this point of sale",
		"DELETELOCATIONCONFIRM": "Are you sure you want to delete this point of sale?",
		"DELETELOCATIONTYPE": "Delete this point of sale's type",
		"DELETELOCATIONTYPECONFIRM": "Are you sure you want to delete this point of sale's type and all its point of sales?",
		"UPDATEFILE": "Update this file",
		"DELETEFILE": "Delete this file",
		"DELETEFILECONFIRM": "Are you sure you want to delete this file ?",
		"GROUP": "Group",
		"GROUPALREADYEXISTS": "Group already exists",
		"GROUPREQUESTS": "Group request(s)",
		"BRANDMODO": "Make more from your in-store executions.",
		"AVAILABLE": "Available",
		"AUTORENEW": "Autorenew",
		"AUTORENEWONBOOKING": "Booking Autorenew",
		"IMPORTLOCATIONS": "Import points of sale",
		"GEOCODECSV": "Import CSV/Excel",
		"IMPORTCSV": "Import CSV/Excel",
		"CONVERTTOJSON": "Convert to JSON",
		"EXPORT": "Export",
		"EXPORTTOCSV": "Export to CSV",
		"EXPORTTOEXCEL": "Export to EXCEL",
		"EXPORTTOPDF": "Export to PDF",
		"FIXACL": "Fix ACL",
		"ACL": "Authorizations",
		"DELETEBYQUERY": "Delete by query",
		"GEOLOC": "Geo loc",
		"_GEOLOC": "Geo loc",
		"DROPFILES": "Drop files here",
		"FIRST": "First",
		"PREVIOUS": "Previous",
		"LAST": "Last",
		"NODASHBOARDACCESS": "Oops! You don't have the sufficient privileges to access this service...",
		"finished": "Finished",
		"booked": "Booked",
		"true": "Yes",
		"TRUE": "Yes",
		"false": "No",
		"FALSE": "No",
		"UNDEFINED": "Undefined",
		"GENERAL": "General",
		"ANSWERS": "Answer(s)",
		"FACEBOOK": "Fb",
		"LANGUAGE": "Lang.",
		"NAME": "Name",
		"ENABLEPUSHNOTFICATION": "Push",
		"PAYPAL": "PayPal",
		"UNVALIDATEREASON": "Reject reason",
		"UNVALIDATED": "Rejected",
		"TOBEVALIDATED": "To Validate",
		"BEFORETEXT": "Upper Text",
		"AFTERTEXT": "Bottom Text",
		"MIN": "Min",
		"MAX": "Max",
		"VALUES": "Values",
		"ALLOWEMPTY": "Allow Empty",
		"MANDATORY": "Mandatory",
		"ORDER": "Order",
		"MAP": "Map",
		"ADDNEW": "Add new ...",
		"MISSIONTITLE": "Quest Title",
		"MISSIONDESCRIPTION": "Quest Description",
		"ADDFORM": "Add a question",
		"USERPATH": "User locations history",
		"NOTIFY": "Notify",
		"NOTIFYUSER": "Notify User",
		"NOTIFYCONFIRM": "Are you sure you want to notify {{total}} users?",
		"TOTAL": "Total",
		"ENTERNOTIFICATION": "Enter a message",
		"NOTIFICATION": "Notification",
		"NOTIFICATIONS": "Notification(s)",
		"AMOUNT": "Amount",
		"CLASS": "Style",
		"TAGSINPUTPLACEHOLDER": "Enter a new value",
		"IMPORT": "Import",
		"EXISTING": "Existing",
		"SEND": "Send",
		"EDIT": "Edit",
		"GROUPSEARCH": "Select a group",
		"USERSEARCH": "Select a user",
		"BOOKINGDURATION": "Booking duration (h)",
		"MISSIONDURATION": "Quest duration (min)",
		"STARTDISTANCE": "Start distance (m)",
		"VIDEODURATION": "Video duration(s)",
		"DURATION": "Duration",
		"TODAY": "Today",
		"LASTDAY": "Last 24 hours",
		"LAST7DAYS": "Last 7 days",
		"LASTWEEK": "Last week",
		"LASTMONTH": "Last month",
		"LASTDAYSHORT": "24 hours",
		"LAST7DAYSSHORT": "7 days",
		"LASTWEEKSHORT": "1 week",
		"LASTMONTHSHORT": "1 month",
		"LASTALLSHORT": "All",
		"DATENONE": "None",
		"CONTINUEONSLIDE": "Keep running",
		"FIELD_NOINPUT": "No input",
		"FIELD_TEXTSIMPLE": "Text field",
		"FIELD_TEXTAREA": "Comment field",
		"FIELD_STOPWATCH": "Stopwatch field",
		"FIELD_NUMBER": "Number field",
		"FIELD_PHOTO": "Photo field",
		"FIELD_VIDEO": "Video field",
		"FIELD_COMBO": "Multi select field",
		"FIELD_COMBOSINGLE": "Single select field",
		"FIELD_DATE": "Date field",
		"FIELD_AUTOCOMPLETE": "Autocomplete field",
		"FIELD_ADDRESS": "Address field",
		"FIELD_EMAIL": "Email field",
		"FIELD_TEL": "Phone field",
		"FIELD_ICONSELECT": "Icon select field",
		"COMBO_2COLUMNS": "2 columns",
		"COMBO_BIG": "Bigger font",
		"INFOS": "Info",
		"CONTACT": "Contact",
		"CONTACTNAME": "Contact name",
		"CONTACTPHONE": "Contact phone",
		"CONTACTEMAIL": "Contact email",
		"ENTERCOMMENT": "Enter a comment (optional)",
		"MISSIONSUMUP": "Summary of our intervation",
		"MISSIONRATE": "Rate our intervention",
		"NOMISSIONFOUND": "Oops, we couldn't find the intervention you are looking for ...",
		"STATS": "Stats",
		"ASSIGNTO": "Assign to",
		"SELECTFILES": "Select files",
		"ADDFILES": "Add documents",
		"ADDCOMMENT": "Add a comment",
		"CREATEFOLDER": "Create a folder",
		"FOLDERS": "Folders",
		"FOLDER": "Folder",
		"UNVALIDATEREASON_PHOTOUNVALID": "Photos invalid: Photos are not conform (unsatisfactory quality or consistency photos).",
		"UNVALIDATEREASON_PHOTOMISSING": "Photos missing: Photos requested has not been taken.",
		"UNVALIDATEREASON_DATAUNVALID": "Inconsistent data: Your data are inconsistent or incomplete.",
		"UNVALIDATEREASON_AGE": "Age: In accordance with terms and conditions, you must be over 18 years old to use the application.",
		"UNVALIDATEREASON_VIDEO": "Your video does not comply with the requirement.",
		"UNVALIDATEREASON_CANDIDATE": "I am so sorry but the client has chosen another candidate. But new mission will been available soon.",
		"UNVALIDATEREASON_CONTEST": "Thanks for participating to this Yoobic contest. Unfortunately, you didnt win: either your answer was incorrect or someone was faster than you. Follow us on facebook to get more contest : http://www.facebook.com/yoobicapp",
		"KINVEYInvalidCredentials": "Invalid credentials. Try again ...",
		"KINVEYUserLockedDown": "Your account has been locked down ...",
		"KINVEYAlreadyLoggedIn": "You re already logged in.",
		"KINVEYSocialError": "Oops, it seems we cant connect you with Facebook",
		"KINVEYUserAlreadyExists": "This username is already taken ...",
		"KINVEYUserUnavailable": "This username is already taken ...",
		"KINVEYKinvey.Error": "Login/Password are required",
		"KINVEYundefined": "Undefined error",
		"KINVEYError": "Check your internet connection",
		"KINVEYRequestError": "Check your internet connection",
		"KINVEYIncompleteRequestBody": "Data is missing",
		"KINVEYNoAccess": "Sorry, You don't have access to this app",
		"ZERO_RESULTS": "0 result found",
		"OVER_QUERY_LIMIT": "Quota reached",
		"REQUEST_DENIED": "Request denied",
		"INVALID_REQUEST": "Invalid request",
		"UNKNOWN_ERROR": "Unknown error",
		"ERROR": "Oops",
		"ERRORMAXVIDEOSIZE": "The file is too big. Record a shorter video",
		"WORKEMAILPLACEHOLDER": "Work email address",
		"CREATENEWPOLL": "Create a new poll",
		"IAMASTUDENT": "Become an explorer",
		"IAMACOMPANY": "I am company",
		"SENDCODE": "Send Code",
		"MOBILESECURITY": "For security we need to verify your mobile number.",
		"MOBILESECURITY2": "Don't worry we do not share your data.",
		"DATEOFBIRTH": "Date of birth",
		"MALE": "Male",
		"FEMALE": "Female",
		"EDUCATIONLEVEL": "Education level",
		"EDUCATIONLEVEL1": "GSCE",
		"EDUCATIONLEVEL2": "A-Level",
		"EDUCATIONLEVEL3": "Foundation's degree",
		"EDUCATIONLEVEL4": "Bachelor's degree",
		"EDUCATIONLEVEL5": "Master's degree",
		"EDUCATIONLEVEL6": "Doctorate",
		"PASTEXPERIENCES": "Previous experiences",
		"PASTEXPERIENCESDESC": "Tell us more about your past experiences. It will you score better jobs.",
		"PRIVATEGROUP": "Private group",
		"WIRETRANSFERT": "Wire transfert",
		"TRANSFERTEARNINGBY": "Receive your earnings by",
		"SMONEY": "Smoney",
		"SKILLS": "Skills",
		"SKILLS1": "Administrative/Secretarial",
		"SKILLS2": "Driver/Courier ",
		"SKILLS3": "Graphic/Video design",
		"SKILLS4": "Product demonstration/sales",
		"SKILLS5": "Computer and Technology",
		"SKILLS6": "Education/Training",
		"SKILLS7": "Events",
		"SKILLS8": "Marketing/Studies",
		"SKILLS9": "Inventory/Manufacturing",
		"SKILLS10": "Food & Restaurant/Hotel",
		"STORE": "Store",
		"STORENAME": "Store name",
		"COMPANY": "Company",
		"COMPANYNAME": "Company name",
		"COMPANYNUMBER": "Registered number",
		"VATNUMBER": "VAT Number",
		"POSTALCODE": "Postal code",
		"TOWN": "Town",
		"CONTACTFIRSTNAME": "First name",
		"CONTACTLASTNAME": "Last name",
		"NEWCLIENT": "New client",
		"NEWCONTRACTWATCH": "New watch contract",
		"NEWCONTRACTJEWELLERY": "New jewellery contract",
		"EXISTINGCONTRACTS": "Existing contracts",
		"EXISTINGCLIENT": "Existing client",
		"CUSTOMERNAME": "Customer name",
		"CUSTOMERFIRSTNAME": "Customer first name",
		"CUSTOMERLASTNAME": "Customer last name",
		"CUSTOMEREMAIL": "Customer email",
		"PUBLICPRICE": "Public price (€)",
		"BRAND": "Brand",
		"MODEL": "Model",
		"SERIALNUMBER": "Serial number",
		"1YEAR": "1 Year",
		"2YEARS": "2 Years",
		"YEARS": "year(s)",
		"SUBSCRIPTIONDURATION": "Contract duration",
		"CONFIRM": "Confirm",
		"CONTRACTHASBEENCREATED": "The following contract has been created :",
		"CONTRACTNUMBER": "Contract number",
		"CONTRACTSTARTDATE": "Start date",
		"LUXURISK": "LuxuRisk",
		"INSURER": "Insurer",
		"LUXURISKMODO": "L'assurance tous risques de vos bijoux et montres de luxe",
		"MYCONTRACTS": "My Contracts",
		"CONTRACTS": "Contracts",
		"CONTRACT": "Contract",
		"CLAIMS": "Claims",
		"CHARGES": "Charges",
		"CONTACTUS": "Contact Us",
		"LUXURISKCHANGEPASSWORD": "Please select a new password in order to acccess LuxuRisk",
		"SELECTACONTRACTTOCLAIM": "You can see here the list of your existing LuxuRisk contracts. </br> Click on a specific contract to visualise it and start a claim.",
		"REPORTCLAIM": "Report a claim",
		"VIEWCLAIM": "View the claim",
		"EDITCLAIM": "Edit the claim",
		"MESSAGEOBJECT": "Object",
		"ENTERYOURMESSAGE": "Enter your message",
		"CUSTOMERPHONE": "Phone number",
		"CLAIMNUMBER": "Claim number",
		"CLAIMTYPE": "Claim type",
		"CLAIMTYPEDESCRIPTION": "Select the type of claim you wish to create",
		"CLAIMDATE": "Claim date",
		"CLAIMDATEDESCRIPTION": "Select the exact date the claim occured",
		"CLAIMDESCRIPTION": "What happened ?",
		"CLAIMDESCRIPTIONDESCRIPTION": "Please input a detail description of the circumstances of the incident.·",
		"CLAIMDOCUMENTS": "Official documents",
		"CLAIMDOCUMENTSDESCRIPTION": "Votre déclaration de sinistre  vol/perte sera traitée dès lors que vous nous aurez fourni les élements suivants: <br> pour un vol, le dépot de plainte<br/>pour une perte, la main courante<br/><br/>",
		"CLAIMOTHERINSURANCE": "Other insurance",
		"CLAIMOTHERINSURANCEDESCRIPTION": "Do you have another insurance covering the same item ?",
		"CLAIMOTHERINSURANCENAME": "Insurance Company Name",
		"CLAIMOTHERINSURANCENAMEDESCRIPTION": "What is the other insurance company name ?",
		"CLAIMOTHERINSURANCENUMBER": "Insurance Certificate Number",
		"CLAIMOTHERINSURANCENUMBERDESCRIPTION": "What is the other insurance certificate number ?",
		"CREATED": "Created",
		"CREATEDS": "Created",
		"VIEWDETAILS": "View details",
		"jewellery": "jewellery",
		"watch": "watch",
		"THEFT": "Theft",
		"ACCIDENTALDAMAGE": "Accidental damage",
		"LOSS": "Loss",
		"CVC": "CVC",
		"SHOP": "Shop",
		"CARDNUMBER": "Card number",
		"EXPIRATION": "MM/YY",
		"DEFAULTCARD": "Default",
		"SETDEFAULTCARD": "Set default",
		"ADDANEWCARD": "Add a new card",
		"MYCARDS": "My Cards",
		"DELETECARD": "Delete this card",
		"ACCOUNTNOTAPPROVED": "Account not approved",
		"ACCOUNTNOTAPPROVEDCONTENT": "It seems your account has not been approved yet by the LuxuRisk team.",
		"DELETECARDCONFIRM": "Are you sure you want to delete this card ?",
		"COMMENTS": "Comments",
		"LASTCOMMENT": "Last comment",
		"STRIPE_incorrect_number": "The card number is incorrect.",
		"STRIPE_invalid_number": "The card number is not a valid credit card number.",
		"STRIPE_invalid_expiry_month": "The card's expiration month is invalid.",
		"STRIPE_invalid_expiry_year": "The card's expiration year is invalid.",
		"STRIPE_invalid_cvc": "The card's security code is invalid.",
		"STRIPE_expired_card": "The card has expired.",
		"STRIPE_incorrect_cvc": "The card's security code is incorrect.",
		"STRIPE_incorrect_zip": "The card's zip code failed validation.",
		"STRIPE_card_declined": "The card was declined.",
		"STRIPE_missing": "There is no card on a customer that is being charged.",
		"STRIPE_processing_error": "An error occurred while processing the card.",
		"STRIPE_rate_limit": "An error occurred due to requests hitting the API too quickly. Please let us know if you're consistently running into this error",
		"JOBS": "Jobs",
		"FEED": "News feed",
		"ADDFEED": "Add a new feed",
		"NEWFEEDPUBLISHED": "News published",
		"SHARE": "Share",
		"COMMENT": "Comment",
		"GENDER": "Gender",
		"CURRENTLYEMPLOYED": "Currently employed",
		"PARTTIMEEMPLOYED": "Part-time employed",
		"STUDENT": "Student",
		"UNEMPLOYED": "Unemployed",
		"INPUTPROFILETITLE": "Complete your profile",
		"INPUTPROFILEDESCRIPTION": "Please complete all the requested information. It will help us provide you with more specific missions.",
		"INPUTPROFILEPERSONALINFOSTITLE": "Personal Info",
		"INPUTPROFILEPERSONALINFOSDESCRIPTION": "Please input your personal info. It will help us provide you with better quests and also get in touch with in case we need to :)",
		"INPUTPROFILEPAYMENTTITLE": "Payment Info",
		"INPUTPROFILEPAYMENTDESCRIPTION": "Tell us how you wish to get paid...",
		"INPUTPROFILEPICTURETITLE": "Profile picture",
		"INPUTPROFILEPICTUREDESCRIPTION": "Select a profile picture ...",
		"INPUTEMPLOYMENTSTATUSTITLE": "Employment status",
		"INPUTEMPLOYMENTSTATUSDESCRIPTION": "What is your current employent status ?",
		"INPUTLEVELOFEDUCATIONTITLE": "Education level",
		"INPUTLEVELOFEDUCATIONDESCRIPTION": "Please input your education level",
		"INPUTPREVIOUSEXPERIENCESTITLE": "Previous experiences",
		"INPUTPREVIOUSEXPERIENCESDESCRIPTION": "Please input your previous experiences",
		"INPUTACTIONRADIUSTITLE": "Action radius",
		"INPUTACTIONRADIUSDESCRIPTION": "Tell us where you live and how far you are willing to go to fullfill a quest",
		"RADIUSDESCRIPTION": "Only display quests in a radius of:",
		"PROFILEEDIT": "Edit your profile",
		"STREET": "Street",
		"ZIPCODE": "Zip code",
		"CITY": "City",
		"COUNTRY": "Country",
		"BIC": "BIC",
		"IBAN": "IBAN",
		"CONTINUEBROWSING": "Continue browsing"
	};

/***/ },

/***/ 316:
/***/ function(module, exports) {

	module.exports = "<Main_Scope0>\n    <router-outlet></router-outlet>\n</Main_Scope0>\n";

/***/ }

});
//# sourceMappingURL=bundle.js.map
/***/