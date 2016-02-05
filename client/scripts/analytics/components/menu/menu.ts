/* beautify ignore:start */
import {Component, Output, EventEmitter} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Grid} from '../grid/grid';
import {NavBar} from '../navbar/navbar';
import {MenuContent} from '../menucontent/menucontent';
import {CampaignsOverview} from '../campaigns-overview/campaigns-overview';
import {FormCreator} from '../form-creator/form-creator';
/* beautify ignore:end */
@Component({
    selector: 'menu',
    template: require('./menu.html'),
    styles: [require('./menu.scss').toString()],
    directives: [ROUTER_DIRECTIVES, MenuContent, NavBar] //,
})

@RouteConfig([{
    path: '/campaigns-overview',
    name: 'CampaignsOverview',
    component: CampaignsOverview
}, {
        path: '/form-creator',
        name: 'FormCreator',
        component: FormCreator
    }, {
        path: '/grid',
        name: 'Grid',
        component: Grid
    }])

export class Menu {
    public isActive: boolean = false;
    public navbarTitle: string;
    @Output() refresh = new EventEmitter();

    constructor(private router: Router) {
        //
    }

    toggleMenu() {
        this.isActive = !this.isActive;
    }

    setTitle(title) {
        this.navbarTitle = title;
    }

    refreshData() {
        this.refresh.emit(null);
    }
}
