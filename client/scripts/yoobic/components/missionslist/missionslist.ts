/* beautify ignore:start */
import {Component, Inject, forwardRef} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {MissionCard} from '../missioncard/missioncard';
import {Menu} from '../menu/menu';
import {MissionsBroker} from '../../services/missionsbroker';
import {Requestor} from '../../services/requestor';
import {Authentication} from '../../services/authentication';
import {IMission} from '../../interfaces/imission';
require('./ngux/missionslist.js');
/* beautify ignore:end */

@Component({
    selector: 'MissionsList',
    template: require('./missionslist.ngux'),
    providers: [Requestor, MissionsBroker, Authentication],
    directives: [ROUTER_DIRECTIVES, MissionCard]
})

export class MissionsList {
    public missions: Array<IMission> = [];
    public selectedMission: IMission;
    private menu: Menu;

    constructor(private router: Router, private authentication: Authentication, private missionsBroker: MissionsBroker, @Inject(forwardRef(() => Menu)) menu) { //, @Inject(Menu) menu: Menu
        this.refreshData();
        this.menu = menu;
    }

    showMenu() {
        this.menu.toggleMenu();
    }

    refreshData() {
        this.missionsBroker.getAll().then(data => this.missions = data);
    }

    selectMission(mission: IMission) {
        this.selectedMission = mission;
    }

    unselectMission() {
        this.selectedMission = null;
    }
}
