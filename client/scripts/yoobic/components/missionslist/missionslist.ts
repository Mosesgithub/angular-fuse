/* beautify ignore:start */
import {Component, Inject, forwardRef} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {MissionCard} from '../missioncard/missioncard';
import {Menu} from '../menu/menu';
import {MissionsBroker} from '../../services/missionsbroker';
import {MissionDescriptionsBroker} from '../../services/missiondescriptionsbroker';
import {Requestor} from '../../services/requestor';
import {Authentication} from '../../services/authentication';
import {IMission} from '../../interfaces/imission';
require('./ngux/missionslist.js');
/* beautify ignore:end */

@Component({
    selector: 'MissionsList',
    template: require('./missionslist.ngux'),
    providers: [Requestor, MissionsBroker, MissionDescriptionsBroker, Authentication],
    directives: [ROUTER_DIRECTIVES, MissionCard, NgFor]
})

export class MissionsList {
    public missions: Array<IMission> = [];
    public selectedMission: IMission;
    private menu: Menu;

    constructor(private router: Router, private authentication: Authentication, private missionsBroker: MissionsBroker, private missiondescriptionsBroker: MissionDescriptionsBroker, @Inject(forwardRef(() => Menu)) menu) { //, @Inject(Menu) menu: Menu
        this.menu = menu;
    }

    ngAfterContentInit() {
        setTimeout(() => this.refreshData(), 500);
    }

    showMenu() {
        this.menu.toggleMenu();
    }

    refreshData() {
        this.missionsBroker.getAll().then(data => {
            this.missions = data;

        });
    }

    startMission(mission: IMission) {
        console.log('startMission');
        console.log(mission);
        this.router.parent.navigate(['Menu/MissionForm', {
            id: mission.description._id
        }]);
        this.missiondescriptionsBroker.getById(mission.description._id).then((res) => {
            //this.router.navigate(['MissionForm'])
            //this.router.parent.navigate(['MissionForm'])
            //console.log(res.slides)
        });
    }

    selectMission(mission: IMission) {
        this.selectedMission = mission;
    }

    unselectMission() {
        this.selectedMission = null;
    }
}
