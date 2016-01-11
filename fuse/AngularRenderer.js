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

function Element(depth) {
    this.depth = depth;
    this.children = Observable();
    this.var1 = Observable(1);
    this.var2 = Observable();
    this.var3 = Observable('Default Value ' + depth);
    this.var4 = Observable();
    this.var5 = Observable();

    this.event1 = new EventFactory();
    this.callback1 = this.event1.raise;
}

module.exports = function(context) {

    console.log('Angular Renderer created');

    var tree = {};
    var counter = 1;

    this.addElement = function(type, parentId) {
        console.log('addElement type: ' + type + ' parentId:' + parentId);
        var id = counter++;

        if (!parentId && parentId !== 0) {
            console.log('no parent');
            tree[id] = context;
        } else {
            var parentElement = tree[parentId];
            var elm;
            if (type.indexOf('Scope') === 0) {
                elm = new Element(parentElement.depth + 1, id);
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
        //console.log(tree[id].depth);
        // if (!tree[id][attribute]) {
        //     tree[id][attribute] = Observable(value);
        // } else {
        tree[id][attribute].value = value;
        //console.log('before changing ' + window.context.children.getAt(0).var3.value);
        //window.context.children.getAt(0).var3.value = 'TOOOOOOO';
        //}
    };

    this.renderElement = function(id, parentId) {
        console.log('renderElement ' + id + ' parentId ' + parentId);

        if (parentId && parentId > 0) {
            var parentElement = tree[parentId];
            var element = tree[id];
            //console.log('parentElement.children parentdepth: ' + parentElement.depth + ', element depth:' + element.depth);
            //context.children.add(new Element(1));
            console.log('renderElement ' + id + ' parentId ' + parentId);
            console.log('before add ' + parentElement.children.length);
            parentElement.children.add(element);
            console.log('after add ' + parentElement.children.length);
        } else {
            console.log('do nothing no parent');
        }

        //console.log(JSON.stringify(context));
    };

    this.setEventListener = function(id, eventName, callback) {
        var element = tree[id];
        callback();
        element[eventName.replace('callback', 'event')].callbacks.push(callback);
        // console.log('setEventListener');
        // console.log(id);
        // console.log(eventName);
    };

};
