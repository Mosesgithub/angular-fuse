'use strict';
var Observable = require('FuseJS/Observable');

function EventFactory() {
    this.callbacks = [];
    var cl = this.callbacks;
    this.raise = function() {
        cl.forEach(function(callback) {
            callback();
        });
    };
}

function Element(depth, type, id) {
    this.depth = depth;
    this.id = id;
    this.type = type;
    this['children' + depth] = Observable();

    this.var1 = Observable(1);
    this.var2 = Observable();
    this.var3 = Observable('Default Value ' + depth);
    this.var4 = Observable();
    this.var5 = Observable();

    this.event1 = new EventFactory();
    this.callback1 = this.event1.raise;

    this.event2 = new EventFactory();
    this.callback2 = this.event2.raise;
}

module.exports = function(context) {

    var tree = {};
    var counter = 1;
    var rootId;

    this.consoleLog = function() {
        console.log.call(arguments);
    };

    this.addElement = function(type, parentId) {
        this.consoleLog('addElement type: ' + type + ' parentId:' + parentId);
        var id = type + '_' + counter++;

        if (!parentId && parentId !== 0) {
            this.consoleLog('no parent');
            rootId = id;
            tree[id] = context;
        } else {
            var parentElement = tree[parentId];
            var elm;
            if (type.indexOf('Scope') === 0) {
                elm = new Element(parentElement.depth + 1, type, id);
            } else {
                elm = parentElement;
            }
            //this.consoleLog('parent found parentElement Depth ' + parentElement.depth + ',  child Depth' + (parentElement.depth + 1));
            tree[id] = elm;
        }
        //this.consoleLog(type + ' has been added to tree with id: ' + id);
        return id;
    };

    this.setAttribute = function(id, attribute, value) {
        this.consoleLog('setting node  ' + id + '  in tree for ' + attribute + ' : ' + value);
        //this.consoleLog(tree[id].depth);
        // if (!tree[id][attribute]) {
        //     tree[id][attribute] = Observable(value);
        // } else {
        tree[id][attribute].value = value;
        //this.consoleLog('before changing ' + window.context.children.getAt(0).var3.value);
        //window.context.children.getAt(0).var3.value = 'TOOOOOOO';
        //}
    };

    this.renderElement = function(id, parentId) {
        this.consoleLog('renderElement ' + id + ' parentId ' + parentId);

        if (id.indexOf('Scope') !== 0) {
            this.consoleLog('do nothing no scope');
        } else if (parentId && tree[parentId]) {
            var parentElement = tree[parentId];
            var element = tree[id];
            //this.consoleLog('parentElement.children parentdepth: ' + parentElement.depth + ', element depth:' + element.depth);
            this.consoleLog('renderElement ' + id + ' parentId ' + parentId + ' in ' + 'children' + parentElement.depth);
            parentElement['children' + parentElement.depth].add(element);
        } else {
            this.consoleLog('do nothing no parent');
        }
        //console.log(JSON.stringify(tree[rootId], null, 4));
        //this.consoleLog(JSON.stringify(context));
    };

    this.removeElement = function(id, parentId) {
        this.consoleLog('removeElement ' + id + ' parentId ' + parentId);
        if (id.indexOf('Scope') !== 0) {
            this.consoleLog('do nothing no scope');
        } else if (parentId && tree[parentId]) {
            var parentElement = tree[parentId];
            var element = tree[id];
            //this.consoleLog('parentElement.children parentdepth: ' + parentElement.depth + ', element depth:' + element.depth);
            this.consoleLog('removeElement ' + id + ' parentId ' + parentId + ' in ' + 'children' + parentElement.depth);
            parentElement['children' + parentElement.depth].tryRemove(element);
        } else {
            this.consoleLog('do nothing no parent');
        }
    };

    this.setEventListener = function(id, eventName, callback) {
        // this.consoleLog('setEventListener'); // + id + eventName);
        // if (callback) {
        //     this.consoleLog('callback is defined' + callback.toString());
        // }
        var element = tree[id];
        element[eventName.replace('callback', 'event')].callbacks.push(callback);
    };

    this.navigateTo = function(page) {
        this.consoleLog('navigateTo ' + page);
        if (tree.Scope1_2) {
            this.consoleLog('scopeIsDefined');
            tree.Scope1_2.var1.value = page;
        }
    };

};
