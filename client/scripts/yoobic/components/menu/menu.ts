/* beautify ignore:start */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Requestor} from '../../services/requestor';
import {Authentication} from '../../services/authentication';
import {IUser} from '../../interfaces/iuser';
import {MissionsList} from '../missionslist/missionslist';
require('./ngux/menu.js');
/* beautify ignore:end */
@Component({
    selector: 'Menu',
    template: require('./menu.ngux'),
    providers: [Requestor, Authentication],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([{
    path: '/missionslist',
    name: 'MissionsList',
    component: MissionsList
}])

export class Menu {
    public user: IUser;
    public menuState: string = 'main';

    constructor(private router: Router, private authentication: Authentication) {
        this.user = this.authentication.getCurrentUser();
        console.log(JSON.stringify(this.user));
    }

    toggleMenu() {
        this.menuState = this.menuState === 'menu' ? 'main' : 'menu';
    }

    logout() {
        this.authentication.logout().then(res => {
            this.router.parent.navigate(['Login']);
        });
    }
}
