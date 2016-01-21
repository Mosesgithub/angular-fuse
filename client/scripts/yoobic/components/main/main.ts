/* beautify ignore:start */
import {Component} from 'angular2/core';
import {Login} from '../login/login';
import {Menu} from '../menu/menu';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

require('./ngux/main.js');
/* beautify ignore:end */
@Component({
    selector: 'Main',
    directives: [ROUTER_DIRECTIVES],
    template: require('./main.ngux')
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

export class Main { }
