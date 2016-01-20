if (typeof window === "undefined") {window = global;}
if (typeof window["webpackJsonp"]) {webpackJsonp = window.webpackJsonp;}

webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var bootstrap_1 = __webpack_require__(1);
	var main_1 = __webpack_require__(268);
	var authToken_1 = __webpack_require__(513);
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
	var missionslist_1 = __webpack_require__(272);
	var router_1 = __webpack_require__(243);
	__webpack_require__(273);
	var Main = (function () {
	    function Main() {
	    }
	    Main = __decorate([
	        core_1.Component({
	            selector: 'Main',
	            directives: [login_1.Login, missionslist_1.MissionsList, router_1.ROUTER_DIRECTIVES],
	            template: __webpack_require__(274)
	        }),
	        router_1.RouteConfig([
	            {
	                path: '/',
	                redirectTo: ['/Login'],
	                name: 'root'
	            },
	            {
	                path: '/login',
	                name: 'Login',
	                component: login_1.Login
	            }, {
	                path: '/missionslist',
	                name: 'MissionsList',
	                component: missionslist_1.MissionsList
	            }
	        ]), 
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
	var requestor_1 = __webpack_require__(514);
	var authentication_1 = __webpack_require__(511);
	var missionsbroker_1 = __webpack_require__(515);
	__webpack_require__(270);
	var Login = (function () {
	    function Login(router, authentication, missionsbroker) {
	        this.router = router;
	        this.authentication = authentication;
	        this.missionsbroker = missionsbroker;
	        this.goToLogin = function (param) {
	            var _this = this;
	            this.authentication.login(null, null).then(function (res) {
	                console.log('login successfull');
	                _this.router.navigate(['MissionsList', {
	                        param: param
	                    }]);
	            });
	        };
	    }
	    Login = __decorate([
	        core_1.Component({
	            selector: 'Login',
	            template: __webpack_require__(271),
	            providers: [requestor_1.Requestor, authentication_1.Authentication, missionsbroker_1.MissionsBroker],
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, authentication_1.Authentication, missionsbroker_1.MissionsBroker])
	    ], Login);
	    return Login;
	})();
	exports.Login = Login;


/***/ },

/***/ 270:
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

/***/ 271:
/***/ function(module, exports) {

	module.exports = "<Login_Scope0 (callback0)=\"goToLogin()\" (callback1)=\"goToLogin()\" (callback2)=\"goToLogin()\">\n</Login_Scope0>\n";

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
	__webpack_require__(510);
	var authToken_1 = __webpack_require__(513);
	var MissionsList = (function () {
	    function MissionsList(router, authToken) {
	        this.router = router;
	        this.missions = [1, 2, 3, 4, 5];
	        this.user = authToken.user;
	        console.log(JSON.stringify(this.user));
	    }
	    MissionsList = __decorate([
	        core_1.Component({
	            selector: 'MissionsList',
	            template: __webpack_require__(509),
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, authToken_1.AuthToken])
	    ], MissionsList);
	    return MissionsList;
	})();
	exports.MissionsList = MissionsList;


/***/ },

/***/ 273:
/***/ function(module, exports) {

	/*eslint-disable */
	/*jshint ignore:start*/
	'use strict';
	
	window.ngux_types = window.ngux_types || {};
	
	window.ngux_types['Main_Scope0'] = function(id, parentId, Observable, EventFactory) {
	    this.children = Observable();
	};
	window.ngux_types[''] = function(id, parentId, Observable, EventFactory) {
	};
	
	/*jshint ignore:end*/
	/*eslint-enable */


/***/ },

/***/ 274:
/***/ function(module, exports) {

	module.exports = "<Main_Scope0>\n    <router-outlet></router-outlet>\n    </Main_Scope0>\n";

/***/ },

/***/ 509:
/***/ function(module, exports) {

	module.exports = "<MissionsList_Scope0 var0=\"Hello {{user.email}}\">\n    <MissionsList_Scope1 *ngFor=\"#m of missions\" collection=\"children0\">\n    </MissionsList_Scope1>\n</MissionsList_Scope0>\n";

/***/ },

/***/ 510:
/***/ function(module, exports) {

	/*eslint-disable */
	/*jshint ignore:start*/
	'use strict';
	
	window.ngux_types = window.ngux_types || {};
	
	window.ngux_types['MissionsList_Scope0'] = function(id, parentId, Observable, EventFactory) {
	    this.var0 = Observable();
	    this.children0 = Observable();
	};
	window.ngux_types['MissionsList_Scope1'] = function(id, parentId, Observable, EventFactory) {
	};
	
	/*jshint ignore:end*/
	/*eslint-enable */


/***/ },

/***/ 511:
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
	var requestor_1 = __webpack_require__(514);
	var config_1 = __webpack_require__(512);
	var core_1 = __webpack_require__(3);
	var authToken_1 = __webpack_require__(513);
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
	            _this.authToken.user = res.user;
	            return res;
	        });
	    };
	    Authentication = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [requestor_1.Requestor, authToken_1.AuthToken])
	    ], Authentication);
	    return Authentication;
	})();
	exports.Authentication = Authentication;


/***/ },

/***/ 512:
/***/ function(module, exports) {

	var Config = (function () {
	    function Config() {
	        this.apiUrl = 'https://yoo-lb.herokuapp.com';
	    }
	    return Config;
	})();
	exports.Config = Config;


/***/ },

/***/ 513:
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

/***/ 514:
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
	var authToken_1 = __webpack_require__(513);
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
	            headers.append('Authorizaton', 'Bearer ' + this.authToken.token);
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

/***/ 515:
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
	var requestor_1 = __webpack_require__(514);
	var config_1 = __webpack_require__(512);
	var core_1 = __webpack_require__(3);
	var authToken_1 = __webpack_require__(513);
	var MissionsBroker = (function () {
	    function MissionsBroker(requestor, authToken) {
	        this.requestor = requestor;
	        this.authToken = authToken;
	        this.config = new config_1.Config();
	    }
	    MissionsBroker.prototype.getAll = function () {
	        var query = {
	            'where': {
	                '_geoloc': {
	                    'nearSphere': {
	                        '$geometry': {
	                            'type': 'Point',
	                            'coordinates': [-0.23796379999999998, 51.531550499999994]
	                        },
	                        '$maxDistance': 400000
	                    }
	                },
	                'type': {
	                    'nin': ['poll', 'service', 'todo']
	                },
	                'isService': {
	                    'ne': true
	                },
	                '_acl.groups.r': {
	                    'nin': ['public']
	                },
	                'status': {
	                    'nin': ['booked', 'finished']
	                }
	            },
	            'limit': 20,
	            'skip': 0,
	            'fields': {},
	            'include': ['description'],
	            'order': []
	        };
	        var url = this.config.apiUrl + '/api/missions';
	        return this.requestor.get(url);
	    };
	    MissionsBroker = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [requestor_1.Requestor, authToken_1.AuthToken])
	    ], MissionsBroker);
	    return MissionsBroker;
	})();
	exports.MissionsBroker = MissionsBroker;


/***/ }

});
//# sourceMappingURL=bundle.js.map
/***/