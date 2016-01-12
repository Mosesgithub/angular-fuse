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

function Element(depth, type) {
    this.depth = depth;
    this.type = type;
    this['children' + depth] = Observable();

    this.var1 = Observable(1);
    this.var2 = Observable();
    this.var3 = Observable('Default Value ' + depth);
    this.var4 = Observable();
    this.var5 = Observable();

    this.event1 = new EventFactory();
    this.callback1 = this.event1.raise;
}

module.exports = function(context) {

    var tree = {};
    var counter = 1;

    this.log = function() {
        if (false) {
            console.log.call(arguments);
        }
    };

    this.addElement = function(type, parentId) {
        this.log('addElement type: ' + type + ' parentId:' + parentId);
        var id = type + '_' + counter++;

        if (!parentId && parentId !== 0) {
            this.log('no parent');
            tree[id] = context;
        } else {
            var parentElement = tree[parentId];
            var elm;
            if (type.indexOf('Scope') === 0) {
                elm = new Element(parentElement.depth + 1, type);
            } else {
                elm = parentElement;
            }
            //this.log('parent found parentElement Depth ' + parentElement.depth + ',  child Depth' + (parentElement.depth + 1));
            tree[id] = elm;
        }
        //this.log(type + ' has been added to tree with id: ' + id);
        return id;
    };

    this.setAttribute = function(id, attribute, value) {
        this.log('setting node  ' + id + '  in tree for ' + attribute + ' : ' + value);
        //this.log(tree[id].depth);
        // if (!tree[id][attribute]) {
        //     tree[id][attribute] = Observable(value);
        // } else {
        tree[id][attribute].value = value;
        //this.log('before changing ' + window.context.children.getAt(0).var3.value);
        //window.context.children.getAt(0).var3.value = 'TOOOOOOO';
        //}
    };

    this.renderElement = function(id, parentId) {
        this.log('renderElement ' + id + ' parentId ' + parentId);

        if (id.indexOf('Scope') !== 0) {
            this.log('do nothing no scope');
        } else if (parentId && tree[parentId]) {
            var parentElement = tree[parentId];
            var element = tree[id];
            //this.log('parentElement.children parentdepth: ' + parentElement.depth + ', element depth:' + element.depth);
            this.log('renderElement ' + id + ' parentId ' + parentId + ' in ' + 'children' + parentElement.depth);
            parentElement['children' + parentElement.depth].add(element);
        } else {
            this.log('do nothing no parent');
        }

        //this.log(JSON.stringify(context));
    };

    this.removeElement = function(id, parentId) {
        this.log('removeElement ' + id + ' parentId ' + parentId);
        if (id.indexOf('Scope') !== 0) {
            this.log('do nothing no scope');
        } else if (parentId && tree[parentId]) {
            var parentElement = tree[parentId];
            var element = tree[id];
            //this.log('parentElement.children parentdepth: ' + parentElement.depth + ', element depth:' + element.depth);
            this.log('removeElement ' + id + ' parentId ' + parentId + ' in ' + 'children' + parentElement.depth);
            parentElement['children' + parentElement.depth].tryRemove(element);
        } else {
            this.log('do nothing no parent');
        }
    };

    this.setEventListener = function(id, eventName, callback) {
        var element = tree[id];
        callback();
        element[eventName.replace('callback', 'event')].callbacks.push(callback);
        // this.log('setEventListener');
        // this.log(id);
        // this.log(eventName);
    };

};
