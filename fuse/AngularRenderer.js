'use strict';
var Observable = require('FuseJS/Observable');
window.ngux_types = window.ngux_types || {};

function EventFactory() {
    this.callbacks = [];
    var cl = this.callbacks;
    this.raise = function(args) {
        if (args && args.value) {
            console.log("Value From outside: " + args.value);
        }
        cl.forEach(function(callback) {
            callback(args);
        });
    };
}

// function Element(depth, type, id, parentId) {
//     this.depth = depth;
//     this.id = id;
//     this.parentId = parentId;
//     this.type = type;
//     this['children' + depth] = Observable();

//     this.var1 = Observable();
//     this.var2 = Observable();
//     this.var3 = Observable();
//     this.var4 = Observable();
//     this.var5 = Observable();

//     this.event1 = new EventFactory();
//     this.callback1 = this.event1.raise;

//     this.event2 = new EventFactory();
//     this.callback2 = this.event2.raise;
// }

module.exports = function(context) {

    var tree = {};
    var counter = 1;
    var rootId;

    this.consoleLog = function() {
        console.log.call(arguments);
    };

    this.addElement = function(type, parentId) {
        console.log('addElement type: ' + type + ' parentId:' + parentId);
        var id = type + '_' + counter++;

        if (!parentId && parentId !== 0) {
            console.log('no parent');
            rootId = id;
            tree[id] = context;
        } else {
            var parentElement = tree[parentId];
            var elm;
            if (type.indexOf('Scope') >= 0) {
                //elm = new Element(parentElement.depth + 1, type, id, parentId);
                elm = new window.ngux_types[type](id, parentId, Observable, EventFactory);
                //debug only
                elm.depth = parentElement.depth + 1;
                elm.type = type;
            } else {
                elm = parentElement;
            }
            //console.log('parent found parentElement Depth ' + parentElement.depth + ',  child Depth' + (parentElement.depth + 1));
            tree[id] = elm;
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
        console.log(JSON.stringify(tree[rootId], null, 4));
    };

    this.renderElement = function(id, parentId, collectionName) {
        //console.log('renderElement ' + id + ' parentId ' + parentId);

        if (id.indexOf('Scope') < 0) {
            console.log('do nothing no scope');
        } else if (parentId && tree[parentId]) {
            var parentElement = tree[parentId];
            var element = tree[id];
            //console.log('parentElement.children parentdepth: ' + parentElement.depth + ', element depth:' + element.depth);
            console.log('renderElement ' + id + ' parentId ' + parentId + ' in ' + 'children' + collectionName);
            if (parentElement[collectionName || 'children']) {
                parentElement[collectionName || 'children'].add(element);
            } else {
                console.log(collectionName + ' not found for object ' + id);
            }
            //parentElement['children' + parentElement.depth].add(element);
        } else {
            console.log('do nothing no parent');
        }
        //console.log(JSON.stringify(tree[rootId], null, 4));
    };

    this.removeElement = function(id, parentId) {
        console.log('removeElement ' + id + ' parentId ' + parentId);
        if (id.indexOf('Scope') !== 0) {
            console.log('do nothing no scope');
        } else if (parentId && tree[parentId]) {
            var parentElement = tree[parentId];
            var element = tree[id];
            //console.log('parentElement.children parentdepth: ' + parentElement.depth + ', element depth:' + element.depth);
            console.log('removeElement ' + id + ' parentId ' + parentId + ' in ' + 'children' + parentElement.depth + parentElement.type);
            setTimeout(function() {
                parentElement['children' + parentElement.depth].tryRemove(element);
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

    this.removeEventListener = function(id, eventName, callback) {
        // console.log('setEventListener'); // + id + eventName);
        // if (callback) {
        //     console.log('callback is defined' + callback.toString());
        // }
        var element = tree[id];
        element[eventName + '_event'].callbacks.splice(element[eventName + '_event'].callbacks.indexOf(callback), 1);
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
        tree = {};
    };

};
