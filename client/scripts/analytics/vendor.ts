// Polyfills
import 'angular2/bundles/angular2-polyfills';

// External
import 'rxjs';
import 'reflect-metadata';

// Angular 2
import 'angular2/platform/browser';
import 'angular2/platform/common_dom';
import * as core from 'angular2/core';
import 'angular2/router';
import 'angular2/http';

// Other vendors for example jQuery or Lodash
import 'lodash';
(<any>window).ng = { core: core };
(<any>window).ag = require('ag-grid');
//window.jQuery = require('jquery');
//require('bootstrap');

// css
require('../../styles/analytics/index.scss');
require('ag-grid/dist/ag-grid.css');
require('ag-grid/dist/theme-blue.css');
require('normalize.css/normalize.css');
require('bootstrap/dist/css/bootstrap.css');
