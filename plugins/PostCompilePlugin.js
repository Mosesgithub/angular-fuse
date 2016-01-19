'use strict';
var fs = require('fs');

function PostCompilePlugin(options) {
    this.options = options || {};
}

PostCompilePlugin.prototype.apply = function(compiler) {
    var that = this;
    compiler.plugin('done', function() {

        if (!that.options.filename) {
            return;
        }
        setTimeout(function() {
            fs.appendFile(that.options.filename, '\n/***/', function() {});
        }, 500);

    });
};

module.exports = PostCompilePlugin;
