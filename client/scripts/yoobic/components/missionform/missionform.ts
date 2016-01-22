/* beautify ignore:start */
import {Component, Inject, forwardRef} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Router, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {MissionCard} from '../missioncard/missioncard';
import {Menu} from '../menu/menu';
import {MissionsBroker} from '../../services/missionsbroker';
import {MissionDescriptionsBroker} from '../../services/missiondescriptionsbroker';
import {Requestor} from '../../services/requestor';
import {Authentication} from '../../services/authentication';
import {IMission} from '../../interfaces/imission';
require('./ngux/missionform.js');
/* beautify ignore:end */

@Component({
    selector: 'MissionForm',
    template: require('./missionform.ngux'),
    providers: [Requestor, MissionDescriptionsBroker],
    directives: [ROUTER_DIRECTIVES]
})

export class MissionForm {
    private id;
    public form: any = null;
    public active: string = "";
    private menu: Menu;

    constructor(private router: Router, private routeParams: RouteParams, private missiondescriptionsBroker: MissionDescriptionsBroker, @Inject(forwardRef(() => Menu)) menu) {
        this.menu = menu;
        this.id = this.routeParams.get('id');
        console.log('Mission : ' + this.id);
        this.missiondescriptionsBroker.getById(this.id).then((res) => {
            this.form = res;
        })
    }
    showMenu() {
        this.menu.toggleMenu();
    }
    changeActive(name: string) {
        console.log('Activate ' + name);
        this.active = 'page' + name;
    }
}
