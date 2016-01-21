if (typeof window === "undefined") {window = global;}
if (typeof window["webpackJsonp"]) {webpackJsonp = window.webpackJsonp;}

webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var bootstrap_1 = __webpack_require__(1);
	var main_1 = __webpack_require__(268);
	var authToken_1 = __webpack_require__(271);
	var providers = [authToken_1.AuthToken];
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
	var menu_1 = __webpack_require__(275);
	var router_1 = __webpack_require__(243);
	__webpack_require__(285);
	var Main = (function () {
	    function Main() {
	    }
	    Main = __decorate([
	        core_1.Component({
	            selector: 'Main',
	            directives: [router_1.ROUTER_DIRECTIVES],
	            template: __webpack_require__(286)
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
	        __metadata('design:paramtypes', [])
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
	__webpack_require__(521);
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
	    }
	    Login = __decorate([
	        core_1.Component({
	            selector: 'Login',
	            template: __webpack_require__(274),
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

	module.exports = "<Login_Scope0 (callback0)=\"goToLogin()\" (callback1)=\"goToLogin()\" (callback2)=\"goToLogin()\">\n</Login_Scope0>\n";

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
	var router_1 = __webpack_require__(243);
	var requestor_1 = __webpack_require__(270);
	var authentication_1 = __webpack_require__(272);
	var missionslist_1 = __webpack_require__(276);
	__webpack_require__(283);
	var Menu = (function () {
	    function Menu(router, authentication) {
	        this.router = router;
	        this.authentication = authentication;
	        this.menuState = 'main';
	        this.user = this.authentication.getCurrentUser();
	        console.log(JSON.stringify(this.user));
	    }
	    Menu.prototype.toggleMenu = function () {
	        this.menuState = this.menuState === 'menu' ? 'main' : 'menu';
	    };
	    Menu.prototype.logout = function () {
	        var _this = this;
	        this.authentication.logout().then(function (res) {
	            _this.router.parent.navigate(['Login']);
	        });
	    };
	    Menu = __decorate([
	        core_1.Component({
	            selector: 'Menu',
	            template: __webpack_require__(284),
	            providers: [requestor_1.Requestor, authentication_1.Authentication],
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }),
	        router_1.RouteConfig([{
	                path: '/missionslist',
	                name: 'MissionsList',
	                component: missionslist_1.MissionsList
	            }]), 
	        __metadata('design:paramtypes', [router_1.Router, authentication_1.Authentication])
	    ], Menu);
	    return Menu;
	})();
	exports.Menu = Menu;


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
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(243);
	var missioncard_1 = __webpack_require__(277);
	var menu_1 = __webpack_require__(275);
	var missionsbroker_1 = __webpack_require__(280);
	var requestor_1 = __webpack_require__(270);
	var authentication_1 = __webpack_require__(272);
	__webpack_require__(281);
	var MissionsList = (function () {
	    function MissionsList(router, authentication, missionsBroker, menu) {
	        this.router = router;
	        this.authentication = authentication;
	        this.missionsBroker = missionsBroker;
	        this.missions = [];
	        this.refreshData();
	        this.menu = menu;
	    }
	    MissionsList.prototype.showMenu = function () {
	        this.menu.toggleMenu();
	    };
	    MissionsList.prototype.refreshData = function () {
	        var _this = this;
	        this.missionsBroker.getAll().then(function (data) { return _this.missions = data; });
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
	            template: __webpack_require__(282),
	            providers: [requestor_1.Requestor, missionsbroker_1.MissionsBroker, authentication_1.Authentication],
	            directives: [router_1.ROUTER_DIRECTIVES, missioncard_1.MissionCard]
	        }),
	        __param(3, core_1.Inject(core_1.forwardRef(function () { return menu_1.Menu; }))), 
	        __metadata('design:paramtypes', [router_1.Router, authentication_1.Authentication, missionsbroker_1.MissionsBroker, Object])
	    ], MissionsList);
	    return MissionsList;
	})();
	exports.MissionsList = MissionsList;


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
	__webpack_require__(278);
	var MissionCard = (function () {
	    function MissionCard() {
	    }
	    MissionCard = __decorate([
	        core_1.Component({
	            selector: 'MissionCard',
	            template: __webpack_require__(279),
	            inputs: ['mission']
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MissionCard);
	    return MissionCard;
	})();
	exports.MissionCard = MissionCard;


/***/ },

/***/ 278:
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
	};
	
	/*jshint ignore:end*/
	/*eslint-enable */


/***/ },

/***/ 279:
/***/ function(module, exports) {

	module.exports = "<MissionCard_Scope0 [var0]=\"mission.title\" [var1]=\"mission.description.background._downloadURL\" [var2]=\"mission.address\" [var3]=\"mission.description.text\">\n</MissionCard_Scope0>\n";

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
	            'limit': 10,
	            'skip': 0,
	            'fields': {},
	            'include': ['description'],
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

/***/ 281:
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
	};
	
	/*jshint ignore:end*/
	/*eslint-enable */


/***/ },

/***/ 282:
/***/ function(module, exports) {

	module.exports = "<MissionsList_Scope0 (callback0)=\"showMenu()\" (callback1)=\"refreshData()\">\n    <MissionsList_Scope1 *ngFor=\"#m of missions\" collection=\"children0\">\n        <MissionCard  [mission]=\"m\" collection=\"children0\" scope=\"MissionsList_Scope2\">\n        </MissionCard>\n    </MissionsList_Scope1>\n</MissionsList_Scope0>\n";

/***/ },

/***/ 283:
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
	window.ngux_types['Menu_Scope2'] = function(id, parentId, Observable, EventFactory) {
	    this.var0 = Observable();
	    this.var1 = Observable();
	    this.callback0_event = new EventFactory();
	    this.callback0 = this.callback0_event.raise;
	};
	
	/*jshint ignore:end*/
	/*eslint-enable */


/***/ },

/***/ 284:
/***/ function(module, exports) {

	module.exports = "<Menu_Scope0 [var0]=\"menuState\" (callback0)=\"toggleMenu(false)\">\n    <router-outlet></router-outlet>\n    <Menu_Scope2 *ngIf=\"user\" var0=\"{{user.imageData}}\" var1=\"{{user.username}}\" (callback0)=\"logout()\" collection=\"children1\">\n    </Menu_Scope2>\n</Menu_Scope0>\n";

/***/ },

/***/ 285:
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

/***/ 286:
/***/ function(module, exports) {

	module.exports = "<Main_Scope0>\n    <router-outlet></router-outlet>\n</Main_Scope0>\n";

/***/ },

/***/ 521:
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


/***/ }

});
//# sourceMappingURL=bundle.js.map
/***/