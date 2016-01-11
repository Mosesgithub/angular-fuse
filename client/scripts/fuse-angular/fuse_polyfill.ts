import 'es6-shim';
assert = function() {
    return true;
};

//console.log(typeof JSON + 'typeof JSON');
window.JSON = JSON;
window.RegExp = RegExp;
window.Map = Map;
window.Set = Set;
window.Reflect = Reflect;
window.Promise = Promise;
window.Math = Math;

let eventTargetOld = EventTarget;
EventTarget = {};
EventTarget.prototype = {
    addEventListener: eventTargetOld.addEventListener,
    removeEventListener: eventTargetOld.removeEventListener,
    dispatchEvent: eventTargetOld.dispatchEvent
};
window.EventTarget = EventTarget;

let xhrHack = window.XMLHttpRequest;
xhrHack.prototype.addEventListener = function(e, func) {
    if (e === 'load') {
        this.onload = func;
    }
    if (e === 'error') {
        this.onerror = func;
    }
};
XMLHttpRequest = window.XMLHttpRequest = xhrHack;

//window.EventTarget=null;
console.warn = console.log;
console.error = console.log;
