/* beautify ignore:start */
//import './vendor';
import {fuseBootstraper} from '../fuse-angular/bootstrap';
//import {enableProdMode} from 'angular2/core';
//import {bootstrap} from 'angular2/platform/browser';
//import {AppComponent} from '../heroes/components/app.component';
//import {TodoAppComponent} from '../todo/components/todoapp.component';
//import {AppComponent} from '../ngux-example/components/app.component';
//import {RouterAppComponent} from '../router/components/routerapp.component';
//import {NGUXApp} from '../ngux-test/components/nguxapp';
import {Main} from './components/main/main';
import {AuthToken} from '../yoobic/services/authToken';
import {TranslateService} from 'ng2-translate';
/* beautify ignore:end */
//fuseBootstrap(AppComponent);
//fuseBootstrap(TodoAppComponent);
//fuseBootstrap(AppComponent);
//if (window.isFuse) {
//enableProdMode();
let providers = [AuthToken, TranslateService];
if (!window.fusejs) {
    fuseBootstraper(providers).bootstrap(Main);
} else {
    window.fusejs.rootComponent = Main;
    if (!window.fusejs.bootstraper) {
        window.fusejs.bootstraper = fuseBootstraper(providers);
    }
}
