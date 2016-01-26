/* beautify ignore:start */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
//import {Grid} from '../grid/grid';
import {MenuContent} from '../menucontent/menucontent';
import {CampaignsOverview} from '../campaigns-overview/campaigns-overview';
import {FormCreator} from '../form-creator/form-creator';
/* beautify ignore:end */
@Component({
    selector: 'menu',
    template: require('./menu.html'),
    styles: [require('./menu.scss').toString()],
    directives: [ROUTER_DIRECTIVES, MenuContent] //,
})

@RouteConfig([{
    path: '/campaigns-overview',
    name: 'CampaignsOverview',
    component: CampaignsOverview
}, {
        path: '/form-creator',
        name: 'FormCreator',
        component: FormCreator
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
