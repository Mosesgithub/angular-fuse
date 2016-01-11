'use strict';
var Observable = require('FuseJS/Observable');

function Element() {
    this.children = Observable();
}

var context = new Element(); // the root element

var tree = {};
var counter = 0;

context.addElement = function(type, parentId) {
    var id = counter++;

    if (!parentId) {
        tree[id] = context;
    } else {
        var elm = new Element();
        //elm.var1 = Observable
        tree[id] = elm;
    }

    //var parent = context; // TODO: find actual parent

    // if (type.indexOf('Scope') === 0) {
    //     parent = tree[parentId];
    // }
    // //context.children = Observable();
    //tree[id] = context.children;
    console.log(type + ' has been added to tree with id: ' + id);
    console.log(JSON.stringify(context));
    return id;
    //}
};

context.setAttribute = function(id, attribute, value) {
    console.log('setting node  ' + id + '  in tree for ' + attribute + ' : ' + value);
    if (!tree[id][attribute]) {
        tree[id][attribute] = Observable(value);
    } else {
        tree[id][attribute].value = value;
    }
};

context.renderElement = function(id, parentId) {

    var parentElement = tree[parentId];
    var element = tree[id];
    parentElement.children.add(element);

    //console.log(JSON.stringify(context));
};

context.setEventListener = function() {

};

module.exports = context;
