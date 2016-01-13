/* beautify ignore:start */
//import './vendor';
import {fuseBootstrap} from '../fuse-angular/bootstrap';
//import {bootstrap} from 'angular2/platform/browser';
//import {AppComponent} from '../heroes/components/app.component';
//import {TodoAppComponent} from '../todo/components/todoapp.component';
//import {AppComponent} from '../ngux-example/components/app.component';
import {RouterAppComponent} from '../router/components/routerapp.component';
/* beautify ignore:end */
//fuseBootstrap(AppComponent);
//fuseBootstrap(TodoAppComponent);
//fuseBootstrap(AppComponent);
//if (window.isFuse) {
fuseBootstrap(RouterAppComponent);
//} else {
//    bootstrap(TodoAppComponent);
//}
