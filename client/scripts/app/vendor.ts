// Polyfills
import '../fuse-angular/fuse_polyfill';
import 'angular2/bundles/angular2-polyfills';
// External
import 'rxjs';
import 'reflect-metadata';

import 'angular2/core';
import 'angular2/http';
import 'angular2/src/facade/lang';
import 'angular2/src/facade/async';
import 'angular2/src/core/di';
//import 'angular2/src/core/di';
import 'angular2/src/platform/dom/dom_adapter';
import 'angular2/src/compiler/xhr';
import 'angular2/src/core/render/api';
//import {Parse5DomAdapter} from 'angular2/src/platform/server/parse5_adapter';
import 'angular2/src/facade/exception_handler';
import 'angular2/src/core/application_common_providers';
import 'angular2/src/compiler/compiler';
import 'angular2/src/core/platform_common_providers';
import 'angular2/common';
import 'angular2/router';

import '../fuse-angular/renderer';
import '../fuse-angular/dom_adapter';
import '../fuse-angular/zone';
import '../fuse-angular/xhr';

import 'lodash';

window.requireCache = require.cache;

window.clearWebpackCache = function(originalCache) {
    let cache = require.cache;
    //     delete require.cache[require.resolve('bundle')];
    console.log('deleting cache for module ' + 0);
    delete cache[0];
    for (let moduleId in cache) {
        if (!originalCache[moduleId]) {
            console.log('deleting cache for module ' + moduleId);
            delete cache[moduleId];
        }
    }
    console.log('clearWebpackCache');
    require.cache = cache;
};
