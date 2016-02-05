require('angular2/bundles/angular2-polyfills');
require('rxjs');
require('reflect-metadata');
require('angular2/platform/browser');
require('angular2/platform/common_dom');
var core = require('angular2/core');
require('angular2/router');
require('angular2/http');
require('lodash');
window.agGrid = require('ag-grid');
window.agGrid.initialiseAgGridWithAngular2({ core: core });
require('../../styles/analytics/index.scss');
require('ag-grid/dist/ag-grid.css');
require('ag-grid/dist/theme-blue.css');
require('normalize.css/normalize.css');
require('bootstrap/dist/css/bootstrap.css');
//# sourceMappingURL=vendor.js.map