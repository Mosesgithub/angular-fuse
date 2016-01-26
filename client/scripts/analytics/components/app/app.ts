/* beautify ignore:start */
import {Component} from 'angular2/core';
import {Login} from '../login/login';
import {Menu} from '../menu/menu';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {TranslateService} from 'ng2-translate';
/* beautify ignore:end */

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    template: require('./app.html')
})

@RouteConfig([{
    path: '/',
    redirectTo: ['/Login'],
    name: 'root'
}, {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/menu/...',
        name: 'Menu',
        component: Menu
    }])

export class App {
    constructor(public translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.setTranslation('en', require('../../../yoobic/translate/en.json'));
        translate.use('en');
    }
}
