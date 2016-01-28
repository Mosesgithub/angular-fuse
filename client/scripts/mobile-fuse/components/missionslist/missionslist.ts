/* beautify ignore:start */
import {Component, Inject, forwardRef} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {MissionCard} from '../missioncard/missioncard';
import {MissionDetail} from '../missiondetail/missiondetail';
import {Menu} from '../menu/menu';
import {MissionsBroker} from '../../../yoobic/services/missionsbroker';
import {MissionDescriptionsBroker} from '../../../yoobic/services/missiondescriptionsbroker';
import {Requestor} from '../../../yoobic/services/requestor';
import {Authentication} from '../../../yoobic/services/authentication';
import {IMission} from '../../../yoobic/interfaces/imission';
require('./ngux/missionslist.js');
/* beautify ignore:end */

@Component({
    selector: 'MissionsList',
    template: require('./missionslist.ngux'),
    providers: [Requestor, MissionsBroker, MissionDescriptionsBroker, Authentication],
    directives: [ROUTER_DIRECTIVES, MissionCard, MissionDetail, NgFor]
})

export class MissionsList {

    public selectedMission: IMission;
    private menu: Menu;
    private data: any = {};
    private tabs: Array<string>;
    private activePage: number = 0;
    private isInit: boolean = false;
    // private missions: Array<IMission> = [];
    // private services: Array<IMission> = [];
    // private polls: Array<IMission> = [];
    // private todos: Array<IMission> = [];
    // 
    // private missionsCount: number;
    // private servicesCount: number;
    // private pollsCount: number;
    // private todosCount: number;

    constructor(private router: Router, private authentication: Authentication, private missionsBroker: MissionsBroker, private missiondescriptionsBroker: MissionDescriptionsBroker, @Inject(forwardRef(() => Menu)) menu) { //, @Inject(Menu) menu: Menu
        this.menu = menu;
        this.data = {};
        //this.tabs = [];
        this.tabs = ['missions', 'polls', 'services', 'todos'];
    }

    ngAfterContentInit() {
        setTimeout(() => this.refreshData(), 500);

    }

    showMenu() {
        this.menu.toggleMenu();
    }

    getTabsCount() {
        let count = 0;
        this.tabs.forEach(t => {
            if (this.data[t + 'Count'] > 0) {
                count += 1;
            }
        });
        return count;
    }

    refreshData() {

        //this.tabs = [];
        this.missionsBroker.getAvailable().then(data => {
            // if (data.missionsCount > 0) {
            //     this.tabs.push('missions');
            // }

            // if (data.pollsCount > 0) {
            //     this.tabs.push('polls');
            // }

            // if (data.servicesCount > 0) {
            //     this.tabs.push('services');
            // }

            // if (data.todosCount > 0) {
            //     this.tabs.push('todos');
            // }

            this.data.missionsCount = data.missionsCount;
            this.data.pollsCount = data.pollsCount;
            this.data.servicesCount = data.servicesCount;
            this.data.todosCount = data.todosCount;
            this.data.services = data.services;
            this.data.missions = data.missions;
            this.data.polls = data.polls;
            this.data.todos = data.todos;
            setTimeout(() => {
                this.isInit = true;

            }, 500);
        });
    }

    startMission(mission: IMission) {
        this.missiondescriptionsBroker.getById(mission.description._id).then((res) => {
            //this.router.navigate(['MissionForm'])
            //this.router.parent.navigate(['MissionForm'])
            //console.log(res.slides)
        });
    }

    selectMission(mission: IMission) {
        console.log('selectMission');
        this.selectedMission = mission;
    }

    unselectMission() {
        this.selectedMission = null;
    }

    setActivePage(i) {
        if (this.isInit) {
            this.activePage = i;
        }
    }

}
