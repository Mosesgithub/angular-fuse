/* beautify ignore:start */
import {Component} from 'angular2/core';
import {Login} from '../login/login';
import {MissionsList} from '../missionslist/missionslist';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

require('./main.js');
/* beautify ignore:end */
@Component({
    selector: 'Main',
    directives: [Login, MissionsList, ROUTER_DIRECTIVES],
    template: require('./main.ngux')
})

@RouteConfig([
    {
        path: '/',
        redirectTo: ['/Login'],
        name: 'root'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/missionslist',
        name: 'MissionsList',
        component: MissionsList
    }
])

export class Main { }
