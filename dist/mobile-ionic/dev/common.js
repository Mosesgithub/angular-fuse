if (typeof window === "undefined") {window = global;}
if (typeof window["webpackJsonp"]) {webpackJsonp = window.webpackJsonp;}

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		2:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".chunk.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(7);
	var Subscriber_1 = __webpack_require__(8);
	var Subscription_1 = __webpack_require__(12);
	var SubjectSubscription_1 = __webpack_require__(17);
	var rxSubscriber_1 = __webpack_require__(13);
	var subscriptionAdd = Subscription_1.Subscription.prototype.add;
	var subscriptionRemove = Subscription_1.Subscription.prototype.remove;
	var subscriptionUnsubscribe = Subscription_1.Subscription.prototype.unsubscribe;
	var subscriberNext = Subscriber_1.Subscriber.prototype.next;
	var subscriberError = Subscriber_1.Subscriber.prototype.error;
	var subscriberComplete = Subscriber_1.Subscriber.prototype.complete;
	var _subscriberNext = Subscriber_1.Subscriber.prototype._next;
	var _subscriberError = Subscriber_1.Subscriber.prototype._error;
	var _subscriberComplete = Subscriber_1.Subscriber.prototype._complete;
	var Subject = (function (_super) {
	    __extends(Subject, _super);
	    function Subject() {
	        _super.apply(this, arguments);
	        this.observers = [];
	        this.isUnsubscribed = false;
	        this.dispatching = false;
	        this.errorSignal = false;
	        this.completeSignal = false;
	    }
	    Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
	        return this;
	    };
	    Subject.create = function (source, destination) {
	        return new BidirectionalSubject(source, destination);
	    };
	    Subject.prototype.lift = function (operator) {
	        var subject = new BidirectionalSubject(this, this.destination || this);
	        subject.operator = operator;
	        return subject;
	    };
	    Subject.prototype._subscribe = function (subscriber) {
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        else if (this.errorSignal) {
	            subscriber.error(this.errorInstance);
	            return;
	        }
	        else if (this.completeSignal) {
	            subscriber.complete();
	            return;
	        }
	        else if (this.isUnsubscribed) {
	            throw new Error('Cannot subscribe to a disposed Subject.');
	        }
	        this.observers.push(subscriber);
	        return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
	    };
	    Subject.prototype.add = function (subscription) {
	        subscriptionAdd.call(this, subscription);
	    };
	    Subject.prototype.remove = function (subscription) {
	        subscriptionRemove.call(this, subscription);
	    };
	    Subject.prototype.unsubscribe = function () {
	        this.observers = void 0;
	        subscriptionUnsubscribe.call(this);
	    };
	    Subject.prototype.next = function (value) {
	        if (this.isUnsubscribed) {
	            return;
	        }
	        this.dispatching = true;
	        this._next(value);
	        this.dispatching = false;
	        if (this.errorSignal) {
	            this.error(this.errorInstance);
	        }
	        else if (this.completeSignal) {
	            this.complete();
	        }
	    };
	    Subject.prototype.error = function (err) {
	        if (this.isUnsubscribed || this.completeSignal) {
	            return;
	        }
	        this.errorSignal = true;
	        this.errorInstance = err;
	        if (this.dispatching) {
	            return;
	        }
	        this._error(err);
	        this.unsubscribe();
	    };
	    Subject.prototype.complete = function () {
	        if (this.isUnsubscribed || this.errorSignal) {
	            return;
	        }
	        this.completeSignal = true;
	        if (this.dispatching) {
	            return;
	        }
	        this._complete();
	        this.unsubscribe();
	    };
	    Subject.prototype._next = function (value) {
	        var index = -1;
	        var observers = this.observers.slice(0);
	        var len = observers.length;
	        while (++index < len) {
	            observers[index].next(value);
	        }
	    };
	    Subject.prototype._error = function (err) {
	        var index = -1;
	        var observers = this.observers;
	        var len = observers.length;
	        // optimization -- block next, complete, and unsubscribe while dispatching
	        this.observers = void 0;
	        this.isUnsubscribed = true;
	        while (++index < len) {
	            observers[index].error(err);
	        }
	        this.isUnsubscribed = false;
	    };
	    Subject.prototype._complete = function () {
	        var index = -1;
	        var observers = this.observers;
	        var len = observers.length;
	        // optimization -- block next, complete, and unsubscribe while dispatching
	        this.observers = void 0; // optimization
	        this.isUnsubscribed = true;
	        while (++index < len) {
	            observers[index].complete();
	        }
	        this.isUnsubscribed = false;
	    };
	    return Subject;
	})(Observable_1.Observable);
	exports.Subject = Subject;
	var BidirectionalSubject = (function (_super) {
	    __extends(BidirectionalSubject, _super);
	    function BidirectionalSubject(source, destination) {
	        _super.call(this);
	        this.source = source;
	        this.destination = destination;
	    }
	    BidirectionalSubject.prototype._subscribe = function (subscriber) {
	        var operator = this.operator;
	        return this.source._subscribe.call(this.source, operator ? operator.call(subscriber) : subscriber);
	    };
	    BidirectionalSubject.prototype.next = function (value) {
	        subscriberNext.call(this, value);
	    };
	    BidirectionalSubject.prototype.error = function (err) {
	        subscriberError.call(this, err);
	    };
	    BidirectionalSubject.prototype.complete = function () {
	        subscriberComplete.call(this);
	    };
	    BidirectionalSubject.prototype._next = function (value) {
	        _subscriberNext.call(this, value);
	    };
	    BidirectionalSubject.prototype._error = function (err) {
	        _subscriberError.call(this, err);
	    };
	    BidirectionalSubject.prototype._complete = function () {
	        _subscriberComplete.call(this);
	    };
	    return BidirectionalSubject;
	})(Subject);
	//# sourceMappingURL=Subject.js.map

/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	var Subscriber_1 = __webpack_require__(8);
	var root_1 = __webpack_require__(15);
	var SymbolShim_1 = __webpack_require__(14);
	var rxSubscriber_1 = __webpack_require__(13);
	/**
	 * A representation of any set of values over any amount of time. This the most basic building block
	 * of RxJS.
	 *
	 * @class Observable<T>
	 */
	var Observable = (function () {
	    /**
	     * @constructor
	     * @param {Function} subscribe the function that is
	     * called when the Observable is initially subscribed to. This function is given a Subscriber, to which new values
	     * can be `next`ed, or an `error` method can be called to raise an error, or `complete` can be called to notify
	     * of a successful completion.
	     */
	    function Observable(subscribe) {
	        this._isScalar = false;
	        if (subscribe) {
	            this._subscribe = subscribe;
	        }
	    }
	    /**
	     * @method lift
	     * @param {Operator} operator the operator defining the operation to take on the observable
	     * @returns {Observable} a new observable with the Operator applied
	     * @description creates a new Observable, with this Observable as the source, and the passed
	     * operator defined as the new observable's operator.
	     */
	    Observable.prototype.lift = function (operator) {
	        var observable = new Observable();
	        observable.source = this;
	        observable.operator = operator;
	        return observable;
	    };
	    /**
	     * @method Symbol.observable
	     * @returns {Observable} this instance of the observable
	     * @description an interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
	     */
	    Observable.prototype[SymbolShim_1.SymbolShim.observable] = function () {
	        return this;
	    };
	    /**
	     * @method subscribe
	     * @param {Observer|Function} observerOrNext (optional) either an observer defining all functions to be called,
	     *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
	     * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
	     *  the error will be thrown as unhandled
	     * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
	     * @returns {Subscription} a subscription reference to the registered handlers
	     * @description registers handlers for handling emitted values, error and completions from the observable, and
	     *  executes the observable's subscriber function, which will take action to set up the underlying data stream
	     */
	    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
	        var subscriber;
	        if (observerOrNext && typeof observerOrNext === 'object') {
	            if (observerOrNext instanceof Subscriber_1.Subscriber) {
	                subscriber = observerOrNext;
	            }
	            else if (observerOrNext[rxSubscriber_1.rxSubscriber]) {
	                subscriber = observerOrNext[rxSubscriber_1.rxSubscriber]();
	            }
	            else {
	                subscriber = new Subscriber_1.Subscriber(observerOrNext);
	            }
	        }
	        else {
	            var next = observerOrNext;
	            subscriber = Subscriber_1.Subscriber.create(next, error, complete);
	        }
	        subscriber.add(this._subscribe(subscriber));
	        return subscriber;
	    };
	    /**
	     * @method forEach
	     * @param {Function} next a handler for each value emitted by the observable
	     * @param {any} [thisArg] a `this` context for the `next` handler function
	     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
	     * @returns {Promise} a promise that either resolves on observable completion or
	     *  rejects with the handled error
	     */
	    Observable.prototype.forEach = function (next, thisArg, PromiseCtor) {
	        if (!PromiseCtor) {
	            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
	                PromiseCtor = root_1.root.Rx.config.Promise;
	            }
	            else if (root_1.root.Promise) {
	                PromiseCtor = root_1.root.Promise;
	            }
	        }
	        if (!PromiseCtor) {
	            throw new Error('no Promise impl found');
	        }
	        var nextHandler;
	        if (thisArg) {
	            nextHandler = function nextHandlerFn(value) {
	                var _a = nextHandlerFn, thisArg = _a.thisArg, next = _a.next;
	                return next.call(thisArg, value);
	            };
	            nextHandler.thisArg = thisArg;
	            nextHandler.next = next;
	        }
	        else {
	            nextHandler = next;
	        }
	        var promiseCallback = function promiseCallbackFn(resolve, reject) {
	            var _a = promiseCallbackFn, source = _a.source, nextHandler = _a.nextHandler;
	            source.subscribe(nextHandler, reject, resolve);
	        };
	        promiseCallback.source = this;
	        promiseCallback.nextHandler = nextHandler;
	        return new PromiseCtor(promiseCallback);
	    };
	    Observable.prototype._subscribe = function (subscriber) {
	        return this.source._subscribe(this.operator.call(subscriber));
	    };
	    // HACK: Since TypeScript inherits static properties too, we have to
	    // fight against TypeScript here so Subject can have a different static create signature
	    /**
	     * @static
	     * @method create
	     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
	     * @returns {Observable} a new cold observable
	     * @description creates a new cold Observable by calling the Observable constructor
	     */
	    Observable.create = function (subscribe) {
	        return new Observable(subscribe);
	    };
	    return Observable;
	})();
	exports.Observable = Observable;
	//# sourceMappingURL=Observable.js.map

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var noop_1 = __webpack_require__(9);
	var throwError_1 = __webpack_require__(10);
	var tryOrOnError_1 = __webpack_require__(11);
	var Subscription_1 = __webpack_require__(12);
	var rxSubscriber_1 = __webpack_require__(13);
	var Subscriber = (function (_super) {
	    __extends(Subscriber, _super);
	    function Subscriber(destination) {
	        _super.call(this);
	        this.destination = destination;
	        this._isUnsubscribed = false;
	        if (!this.destination) {
	            return;
	        }
	        var subscription = destination._subscription;
	        if (subscription) {
	            this._subscription = subscription;
	        }
	        else if (destination instanceof Subscriber) {
	            this._subscription = destination;
	        }
	    }
	    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () {
	        return this;
	    };
	    Object.defineProperty(Subscriber.prototype, "isUnsubscribed", {
	        get: function () {
	            var subscription = this._subscription;
	            if (subscription) {
	                // route to the shared Subscription if it exists
	                return this._isUnsubscribed || subscription.isUnsubscribed;
	            }
	            else {
	                return this._isUnsubscribed;
	            }
	        },
	        set: function (value) {
	            var subscription = this._subscription;
	            if (subscription) {
	                // route to the shared Subscription if it exists
	                subscription.isUnsubscribed = Boolean(value);
	            }
	            else {
	                this._isUnsubscribed = Boolean(value);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Subscriber.create = function (next, error, complete) {
	        var subscriber = new Subscriber();
	        subscriber._next = (typeof next === 'function') && tryOrOnError_1.tryOrOnError(next) || noop_1.noop;
	        subscriber._error = (typeof error === 'function') && error || throwError_1.throwError;
	        subscriber._complete = (typeof complete === 'function') && complete || noop_1.noop;
	        return subscriber;
	    };
	    Subscriber.prototype.add = function (sub) {
	        // route add to the shared Subscription if it exists
	        var _subscription = this._subscription;
	        if (_subscription) {
	            _subscription.add(sub);
	        }
	        else {
	            _super.prototype.add.call(this, sub);
	        }
	    };
	    Subscriber.prototype.remove = function (sub) {
	        // route remove to the shared Subscription if it exists
	        if (this._subscription) {
	            this._subscription.remove(sub);
	        }
	        else {
	            _super.prototype.remove.call(this, sub);
	        }
	    };
	    Subscriber.prototype.unsubscribe = function () {
	        if (this._isUnsubscribed) {
	            return;
	        }
	        else if (this._subscription) {
	            this._isUnsubscribed = true;
	        }
	        else {
	            _super.prototype.unsubscribe.call(this);
	        }
	    };
	    Subscriber.prototype._next = function (value) {
	        var destination = this.destination;
	        if (destination.next) {
	            destination.next(value);
	        }
	    };
	    Subscriber.prototype._error = function (err) {
	        var destination = this.destination;
	        if (destination.error) {
	            destination.error(err);
	        }
	    };
	    Subscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (destination.complete) {
	            destination.complete();
	        }
	    };
	    Subscriber.prototype.next = function (value) {
	        if (!this.isUnsubscribed) {
	            this._next(value);
	        }
	    };
	    Subscriber.prototype.error = function (err) {
	        if (!this.isUnsubscribed) {
	            this._error(err);
	            this.unsubscribe();
	        }
	    };
	    Subscriber.prototype.complete = function () {
	        if (!this.isUnsubscribed) {
	            this._complete();
	            this.unsubscribe();
	        }
	    };
	    return Subscriber;
	})(Subscription_1.Subscription);
	exports.Subscriber = Subscriber;
	//# sourceMappingURL=Subscriber.js.map

/***/ },

/***/ 9:
/***/ function(module, exports) {

	/* tslint:disable:no-empty */
	function noop() { }
	exports.noop = noop;
	//# sourceMappingURL=noop.js.map

/***/ },

/***/ 10:
/***/ function(module, exports) {

	function throwError(e) { throw e; }
	exports.throwError = throwError;
	//# sourceMappingURL=throwError.js.map

/***/ },

/***/ 11:
/***/ function(module, exports) {

	function tryOrOnError(target) {
	    function tryCatcher() {
	        try {
	            tryCatcher.target.apply(this, arguments);
	        }
	        catch (e) {
	            this.error(e);
	        }
	    }
	    tryCatcher.target = target;
	    return tryCatcher;
	}
	exports.tryOrOnError = tryOrOnError;
	//# sourceMappingURL=tryOrOnError.js.map

/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	var noop_1 = __webpack_require__(9);
	var Subscription = (function () {
	    function Subscription(_unsubscribe) {
	        this.isUnsubscribed = false;
	        if (_unsubscribe) {
	            this._unsubscribe = _unsubscribe;
	        }
	    }
	    Subscription.prototype._unsubscribe = function () {
	        noop_1.noop();
	    };
	    Subscription.prototype.unsubscribe = function () {
	        if (this.isUnsubscribed) {
	            return;
	        }
	        this.isUnsubscribed = true;
	        var unsubscribe = this._unsubscribe;
	        var subscriptions = this._subscriptions;
	        this._subscriptions = void 0;
	        if (unsubscribe) {
	            unsubscribe.call(this);
	        }
	        if (subscriptions != null) {
	            var index = -1;
	            var len = subscriptions.length;
	            while (++index < len) {
	                subscriptions[index].unsubscribe();
	            }
	        }
	    };
	    Subscription.prototype.add = function (subscription) {
	        // return early if:
	        //  1. the subscription is null
	        //  2. we're attempting to add our this
	        //  3. we're attempting to add the static `empty` Subscription
	        if (!subscription || (subscription === this) || (subscription === Subscription.EMPTY)) {
	            return;
	        }
	        var sub = subscription;
	        switch (typeof subscription) {
	            case 'function':
	                sub = new Subscription(subscription);
	            case 'object':
	                if (sub.isUnsubscribed || typeof sub.unsubscribe !== 'function') {
	                    break;
	                }
	                else if (this.isUnsubscribed) {
	                    sub.unsubscribe();
	                }
	                else {
	                    var subscriptions = this._subscriptions || (this._subscriptions = []);
	                    subscriptions.push(sub);
	                }
	                break;
	            default:
	                throw new Error('Unrecognized subscription ' + subscription + ' added to Subscription.');
	        }
	    };
	    Subscription.prototype.remove = function (subscription) {
	        // return early if:
	        //  1. the subscription is null
	        //  2. we're attempting to remove ourthis
	        //  3. we're attempting to remove the static `empty` Subscription
	        if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
	            return;
	        }
	        var subscriptions = this._subscriptions;
	        if (subscriptions) {
	            var subscriptionIndex = subscriptions.indexOf(subscription);
	            if (subscriptionIndex !== -1) {
	                subscriptions.splice(subscriptionIndex, 1);
	            }
	        }
	    };
	    Subscription.EMPTY = (function (empty) {
	        empty.isUnsubscribed = true;
	        return empty;
	    }(new Subscription()));
	    return Subscription;
	})();
	exports.Subscription = Subscription;
	//# sourceMappingURL=Subscription.js.map

/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	var SymbolShim_1 = __webpack_require__(14);
	/**
	 * rxSubscriber symbol is a symbol for retreiving an "Rx safe" Observer from an object
	 * "Rx safety" can be defined as an object that has all of the traits of an Rx Subscriber,
	 * including the ability to add and remove subscriptions to the subscription chain and
	 * guarantees involving event triggering (can't "next" after unsubscription, etc).
	 */
	exports.rxSubscriber = SymbolShim_1.SymbolShim.for('rxSubscriber');
	//# sourceMappingURL=rxSubscriber.js.map

/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	var root_1 = __webpack_require__(15);
	function polyfillSymbol(root) {
	    var Symbol = ensureSymbol(root);
	    ensureIterator(Symbol, root);
	    ensureObservable(Symbol);
	    ensureFor(Symbol);
	    return Symbol;
	}
	exports.polyfillSymbol = polyfillSymbol;
	function ensureFor(Symbol) {
	    if (!Symbol.for) {
	        Symbol.for = symbolForPolyfill;
	    }
	}
	exports.ensureFor = ensureFor;
	var id = 0;
	function ensureSymbol(root) {
	    if (!root.Symbol) {
	        root.Symbol = function symbolFuncPolyfill(description) {
	            return "@@Symbol(" + description + "):" + id++;
	        };
	    }
	    return root.Symbol;
	}
	exports.ensureSymbol = ensureSymbol;
	function symbolForPolyfill(key) {
	    return '@@' + key;
	}
	exports.symbolForPolyfill = symbolForPolyfill;
	function ensureIterator(Symbol, root) {
	    if (!Symbol.iterator) {
	        if (typeof Symbol.for === 'function') {
	            Symbol.iterator = Symbol.for('iterator');
	        }
	        else if (root.Set && typeof new root.Set()['@@iterator'] === 'function') {
	            // Bug for mozilla version
	            Symbol.iterator = '@@iterator';
	        }
	        else if (root.Map) {
	            // es6-shim specific logic
	            var keys = Object.getOwnPropertyNames(root.Map.prototype);
	            for (var i = 0; i < keys.length; ++i) {
	                var key = keys[i];
	                if (key !== 'entries' && key !== 'size' && root.Map.prototype[key] === root.Map.prototype['entries']) {
	                    Symbol.iterator = key;
	                    break;
	                }
	            }
	        }
	        else {
	            Symbol.iterator = '@@iterator';
	        }
	    }
	}
	exports.ensureIterator = ensureIterator;
	function ensureObservable(Symbol) {
	    if (!Symbol.observable) {
	        if (typeof Symbol.for === 'function') {
	            Symbol.observable = Symbol.for('observable');
	        }
	        else {
	            Symbol.observable = '@@observable';
	        }
	    }
	}
	exports.ensureObservable = ensureObservable;
	exports.SymbolShim = polyfillSymbol(root_1.root);
	//# sourceMappingURL=SymbolShim.js.map

/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {var objectTypes = {
	    'boolean': false,
	    'function': true,
	    'object': true,
	    'number': false,
	    'string': false,
	    'undefined': false
	};
	exports.root = (objectTypes[typeof self] && self) || (objectTypes[typeof window] && window);
	/* tslint:disable:no-unused-variable */
	var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
	var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
	var freeGlobal = objectTypes[typeof global] && global;
	if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
	    exports.root = freeGlobal;
	}
	//# sourceMappingURL=root.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module), (function() { return this; }())))

/***/ },

/***/ 16:
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscription_1 = __webpack_require__(12);
	var Subscriber_1 = __webpack_require__(8);
	var SubjectSubscription = (function (_super) {
	    __extends(SubjectSubscription, _super);
	    function SubjectSubscription(subject, observer) {
	        _super.call(this);
	        this.subject = subject;
	        this.observer = observer;
	        this.isUnsubscribed = false;
	    }
	    SubjectSubscription.prototype.unsubscribe = function () {
	        if (this.isUnsubscribed) {
	            return;
	        }
	        this.isUnsubscribed = true;
	        var subject = this.subject;
	        var observers = subject.observers;
	        this.subject = void 0;
	        if (!observers || observers.length === 0 || subject.isUnsubscribed) {
	            return;
	        }
	        if (this.observer instanceof Subscriber_1.Subscriber) {
	            this.observer.unsubscribe();
	        }
	        var subscriberIndex = observers.indexOf(this.observer);
	        if (subscriberIndex !== -1) {
	            observers.splice(subscriberIndex, 1);
	        }
	    };
	    return SubjectSubscription;
	})(Subscription_1.Subscription);
	exports.SubjectSubscription = SubjectSubscription;
	//# sourceMappingURL=SubjectSubscription.js.map

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

	var QueueScheduler_1 = __webpack_require__(35);
	exports.queue = new QueueScheduler_1.QueueScheduler();
	//# sourceMappingURL=queue.js.map

/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	var QueueAction_1 = __webpack_require__(36);
	var FutureAction_1 = __webpack_require__(37);
	var QueueScheduler = (function () {
	    function QueueScheduler() {
	        this.actions = [];
	        this.active = false;
	        this.scheduled = false;
	    }
	    QueueScheduler.prototype.now = function () {
	        return Date.now();
	    };
	    QueueScheduler.prototype.flush = function () {
	        if (this.active || this.scheduled) {
	            return;
	        }
	        this.active = true;
	        var actions = this.actions;
	        for (var action = void 0; action = actions.shift();) {
	            action.execute();
	        }
	        this.active = false;
	    };
	    QueueScheduler.prototype.schedule = function (work, delay, state) {
	        if (delay === void 0) { delay = 0; }
	        return (delay <= 0) ?
	            this.scheduleNow(work, state) :
	            this.scheduleLater(work, delay, state);
	    };
	    QueueScheduler.prototype.scheduleNow = function (work, state) {
	        return new QueueAction_1.QueueAction(this, work).schedule(state);
	    };
	    QueueScheduler.prototype.scheduleLater = function (work, delay, state) {
	        return new FutureAction_1.FutureAction(this, work).schedule(state, delay);
	    };
	    return QueueScheduler;
	})();
	exports.QueueScheduler = QueueScheduler;
	//# sourceMappingURL=QueueScheduler.js.map

/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscription_1 = __webpack_require__(12);
	var QueueAction = (function (_super) {
	    __extends(QueueAction, _super);
	    function QueueAction(scheduler, work) {
	        _super.call(this);
	        this.scheduler = scheduler;
	        this.work = work;
	    }
	    QueueAction.prototype.schedule = function (state) {
	        if (this.isUnsubscribed) {
	            return this;
	        }
	        this.state = state;
	        var scheduler = this.scheduler;
	        scheduler.actions.push(this);
	        scheduler.flush();
	        return this;
	    };
	    QueueAction.prototype.execute = function () {
	        if (this.isUnsubscribed) {
	            throw new Error('How did did we execute a canceled Action?');
	        }
	        this.work(this.state);
	    };
	    QueueAction.prototype.unsubscribe = function () {
	        var scheduler = this.scheduler;
	        var actions = scheduler.actions;
	        var index = actions.indexOf(this);
	        this.work = void 0;
	        this.state = void 0;
	        this.scheduler = void 0;
	        if (index !== -1) {
	            actions.splice(index, 1);
	        }
	        _super.prototype.unsubscribe.call(this);
	    };
	    return QueueAction;
	})(Subscription_1.Subscription);
	exports.QueueAction = QueueAction;
	//# sourceMappingURL=QueueAction.js.map

/***/ },

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var QueueAction_1 = __webpack_require__(36);
	var FutureAction = (function (_super) {
	    __extends(FutureAction, _super);
	    function FutureAction(scheduler, work) {
	        _super.call(this, scheduler, work);
	        this.scheduler = scheduler;
	        this.work = work;
	    }
	    FutureAction.prototype.schedule = function (state, delay) {
	        var _this = this;
	        if (delay === void 0) { delay = 0; }
	        if (this.isUnsubscribed) {
	            return this;
	        }
	        this.delay = delay;
	        this.state = state;
	        var id = this.id;
	        if (id != null) {
	            this.id = undefined;
	            clearTimeout(id);
	        }
	        var scheduler = this.scheduler;
	        this.id = setTimeout(function () {
	            _this.id = void 0;
	            scheduler.actions.push(_this);
	            scheduler.flush();
	        }, this.delay);
	        return this;
	    };
	    FutureAction.prototype.unsubscribe = function () {
	        var id = this.id;
	        if (id != null) {
	            this.id = void 0;
	            clearTimeout(id);
	        }
	        _super.prototype.unsubscribe.call(this);
	    };
	    return FutureAction;
	})(QueueAction_1.QueueAction);
	exports.FutureAction = FutureAction;
	//# sourceMappingURL=FutureAction.js.map

/***/ },

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(7);
	var Subscription_1 = __webpack_require__(12);
	var queue_1 = __webpack_require__(34);
	var PromiseObservable = (function (_super) {
	    __extends(PromiseObservable, _super);
	    function PromiseObservable(promise, scheduler) {
	        if (scheduler === void 0) { scheduler = queue_1.queue; }
	        _super.call(this);
	        this.promise = promise;
	        this.scheduler = scheduler;
	        this._isScalar = false;
	    }
	    PromiseObservable.create = function (promise, scheduler) {
	        if (scheduler === void 0) { scheduler = queue_1.queue; }
	        return new PromiseObservable(promise, scheduler);
	    };
	    PromiseObservable.prototype._subscribe = function (subscriber) {
	        var _this = this;
	        var scheduler = this.scheduler;
	        var promise = this.promise;
	        if (scheduler === queue_1.queue) {
	            if (this._isScalar) {
	                subscriber.next(this.value);
	                subscriber.complete();
	            }
	            else {
	                promise.then(function (value) {
	                    _this._isScalar = true;
	                    _this.value = value;
	                    subscriber.next(value);
	                    subscriber.complete();
	                }, function (err) { return subscriber.error(err); })
	                    .then(null, function (err) {
	                    // escape the promise trap, throw unhandled errors
	                    setTimeout(function () { throw err; });
	                });
	            }
	        }
	        else {
	            var subscription = new Subscription_1.Subscription();
	            if (this._isScalar) {
	                var value = this.value;
	                subscription.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
	            }
	            else {
	                promise.then(function (value) {
	                    _this._isScalar = true;
	                    _this.value = value;
	                    subscription.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
	                }, function (err) { return subscription.add(scheduler.schedule(dispatchError, 0, { err: err, subscriber: subscriber })); })
	                    .then(null, function (err) {
	                    // escape the promise trap, throw unhandled errors
	                    scheduler.schedule(function () { throw err; });
	                });
	            }
	            return subscription;
	        }
	    };
	    return PromiseObservable;
	})(Observable_1.Observable);
	exports.PromiseObservable = PromiseObservable;
	function dispatchNext(_a) {
	    var value = _a.value, subscriber = _a.subscriber;
	    subscriber.next(value);
	    subscriber.complete();
	}
	function dispatchError(_a) {
	    var err = _a.err, subscriber = _a.subscriber;
	    subscriber.error(err);
	}
	//# sourceMappingURL=fromPromise.js.map

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	var root_1 = __webpack_require__(15);
	function toPromise(PromiseCtor) {
	    var _this = this;
	    if (!PromiseCtor) {
	        if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
	            PromiseCtor = root_1.root.Rx.config.Promise;
	        }
	        else if (root_1.root.Promise) {
	            PromiseCtor = root_1.root.Promise;
	        }
	    }
	    if (!PromiseCtor) {
	        throw new Error('no Promise impl found');
	    }
	    return new PromiseCtor(function (resolve, reject) {
	        var value;
	        _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
	    });
	}
	exports.toPromise = toPromise;
	//# sourceMappingURL=toPromise.js.map

/***/ }

/******/ });
//# sourceMappingURL=common.js.map