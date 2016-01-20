'use strict';
var Observable = require('FuseJS/Observable');
window.ngux_types = window.ngux_types || {};

function EventFactory() {
    this.callbacks = [];
    var cl = this.callbacks;
    this.raise = function(args) {
        if (args && args.value) {
            console.log('Value From outside: ' + args.value);
        }
        cl.forEach(function(callback) {
            callback(args);
        });
    };
}

module.exports = function(context) {

    var tree = {};
    var toBeAttached = {};
    var counter = 1;
    var rootId;

    this.consoleLog = function() {
        console.log.call(arguments);
    };

    this.isScope = function(type) {
        return type && window.ngux_types[type];
    };

    this.createElement = function(type, isRoot) {
        var id = type + '_' + counter++;

        if (isRoot) {
            console.log('root');
            rootId = id;
            tree[id] = context;
        } else {
            if (this.isScope(type)) {
                var elm;
                console.log('createElement type: ' + type);
                elm = new window.ngux_types[type](id, null, Observable, EventFactory);
                elm.type = type;
                // temporary fix
                // if (!elm.children) {
                //     elm.children = new Observable();
                // }
                //debug only
                elm.id = id;
                tree[id] = elm;
            }
            //console.log('parent found parentElement Depth ' + parentElement.depth + ',  child Depth' + (parentElement.depth + 1));

        }
        //console.log(type + ' has been added to tree with id: ' + id);
        return id;
    };

    this.setAttribute = function(id, attribute, value) {
        console.log('setting node  ' + id + '  in tree for ' + attribute + ' : ' + value);
        if (!tree[id][attribute]) {
            //console.log('couldnt find attribute ' + attribute + ' on object ' + id);
            return;
        }
        tree[id][attribute].value = value;
        //console.log(JSON.stringify(tree[rootId], null, 4));
    };

    this.addToCollection = function(parentElement, collectionName, element) {
        if (parentElement[collectionName || 'children']) {
            parentElement[collectionName || 'children'].add(element);
        } else {
            console.log(collectionName + ' not found for object');
        }
    };

    this.renderElement = function(id, type, parentId, collectionName, scope) {
        console.log('renderElement ' + id + ' parentId ' + parentId);
        if (!this.isScope(type)) {
            console.log(id + 'is not a scope');
            if (toBeAttached[id] && toBeAttached[id].length > 0 && tree[parentId]) {
                console.log('found to be attached childs for  ' + id + 'in  parentId ' + parentId);
                var parentEl = tree[parentId];
                toBeAttached[id].forEach(function(el) {
                    this.addToCollection(parentEl, collectionName, el);
                });
                //delete toBeAttached[id];
            } else if (!tree[id] && tree[parentId]) {
                console.log('go up');
                tree[id] = tree[parentId];
            } else {
                console.log('do nothing no scope');
            }
        } else if (parentId) {
            var element = tree[id];
            if (scope) {
                element.type = scope;
            }
            if (tree[parentId]) {
                var parentElement = tree[parentId];
                console.log('renderElement ' + id + ' parentId ' + parentId + ' in ' + 'children: ' + (collectionName || 'children'));
                this.addToCollection(parentElement, collectionName, element);
            } else {
                console.log('renderElement ' + id + 'waiting to be attached to ' + parentId);
                toBeAttached[parentId] = toBeAttached[parentId] || [];
                toBeAttached[parentId].push(element);
            }
        } else {
            console.log('do nothing no parent');
        }
        //console.log(JSON.stringify(tree[rootId], null, 4));
    };

    this.removeElement = function(id, type, parentId, collectionName) {
        console.log('removeElement ' + id + ' parentId ' + parentId);
        if (!this.isScope(type)) {
            if (toBeAttached[id] && toBeAttached[id].length > 0 && tree[parentId]) {
                console.log('found to be removed childs for  ' + id + 'in  parentId ' + parentId);
                var parentEl = tree[parentId];
                toBeAttached[id].forEach(function(el) {
                    if (parentEl[collectionName || 'children']) {
                        parentEl[collectionName || 'children'].tryRemove(el);
                    } else {
                        console.log(collectionName + ' not found for object ' + id);
                    }
                });
                //delete toBeAttached[id];
            }
        } else if (parentId && tree[parentId]) {
            var parentElement = tree[parentId];
            var element = tree[id];
            console.log('removeElement ' + id + ' parentId ' + parentId + ' in ' + 'children' + (collectionName || 'children'));
            setTimeout(function() {
                parentElement[collectionName || 'children'].tryRemove(element);
            }, parentElement.type === 'ScopeRouter' ? 500 : 0);
        } else {
            console.log('do nothing no parent');
        }
    };

    this.setEventListener = function(id, eventName, callback) {
        // console.log('setEventListener'); // + id + eventName);
        // if (callback) {
        //     console.log('callback is defined' + callback.toString());
        // }
        var element = tree[id];
        element[eventName + '_event'].callbacks.push(callback);
    };

    this.removeAllListeners = function(id) {
        // console.log('setEventListener'); // + id + eventName);
        // if (callback) {
        //     console.log('callback is defined' + callback.toString());
        // }
        var element = tree[id];
        for (var a in element) {
            if (element[a] instanceof EventFactory) {
                element[a].callbacks = [];
            }
        }
        // element[eventName + '_event'].callbacks.splice(element[eventName + '_event'].callbacks.indexOf(callback), 1);
    };

    // function findParentRouter(id) {
    //     var element = tree[id];
    //     console.log('findParentRouter' + element.id + ' ' + element.parentId + ' ' + tree[element.parentId].type);
    //     while (element.parentId && tree[element.parentId].type !== 'router-outlet') {
    //         console.log('findParentRouter' + element.id + ' ' + element.parentId + ' ' + tree[element.parentId].type);
    //         element = tree[element.parentId];
    //     }
    //     return element;
    // };

    this.navigateTo = function(page, id) {
        console.log('navigateTo ' + page);
        //findParentRouter(id);
        if (tree[id]) {
            tree[id].var1.value = page;
        }
    };

    this.reset = function() {
        console.log('angularRenderer reset');
        tree = {};
        toBeAttached = {};
        counter = 1;
    };

    this.print = function() {
        console.log(JSON.stringify(tree[rootId], null, 4));
    };

};
