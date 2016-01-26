/* beautify ignore:start */
import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {App} from './components/app/app';
import {AuthToken} from '../yoobic/services/authToken';
import {TranslateService} from 'ng2-translate';
//import {enableProdMode} from 'angular2/core';
/* beautify ignore:end */

//enableProdMode();

bootstrap(App, [HTTP_PROVIDERS, ROUTER_PROVIDERS, provide(LocationStrategy, {
    useClass: HashLocationStrategy
}), TranslateService, AuthToken]);
