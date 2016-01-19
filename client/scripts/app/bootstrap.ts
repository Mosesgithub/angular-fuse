/* beautify ignore:start */
//import './vendor';
import {fuseBootstraper} from '../fuse-angular/bootstrap';
//import {bootstrap} from 'angular2/platform/browser';
//import {AppComponent} from '../heroes/components/app.component';
//import {TodoAppComponent} from '../todo/components/todoapp.component';
//import {AppComponent} from '../ngux-example/components/app.component';
//import {RouterAppComponent} from '../router/components/routerapp.component';
import {NGUXApp} from '../ngux-test/components/nguxapp';
/* beautify ignore:end */
//fuseBootstrap(AppComponent);
//fuseBootstrap(TodoAppComponent);
//fuseBootstrap(AppComponent);
//if (window.isFuse) {
console.log('defining root component');

if (!window.fusejs) {
    fuseBootstraper().bootstrap(NGUXApp);
} else {
    console.log('loading NGUXApp ' + NGUXApp.version);
    window.fusejs.rootComponent = NGUXApp;
    if (!window.fusejs.bootstraper) {
        window.fusejs.bootstraper = fuseBootstraper();
    }
}
