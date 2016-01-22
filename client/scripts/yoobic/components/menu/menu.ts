/* beautify ignore:start */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {MissionsList} from '../missionslist/missionslist';
import {MenuContent} from '../menucontent/menucontent';
import {MissionForm} from '../missionform/missionform';
require('./ngux/menu.js');
/* beautify ignore:end */
@Component({
    selector: 'Menu',
    template: require('./menu.ngux'),
    directives: [ROUTER_DIRECTIVES, MenuContent]
})

@RouteConfig([{
    path: '/missionslist',
    name: 'MissionsList',
    component: MissionsList
}, {
        path: '/missionform/:id',
        name: 'MissionForm',
        component: MissionForm
    }])

export class Menu {
    public menuState: string = 'main';

    constructor(private router: Router) {
        //
    }

    toggleMenu() {
        this.menuState = this.menuState === 'menu' ? 'main' : 'menu';
    }

}
