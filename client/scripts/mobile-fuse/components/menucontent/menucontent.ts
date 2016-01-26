/* beautify ignore:start */
import {Component} from 'angular2/core';
import {NgFor, NgIf} from 'angular2/common';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Requestor} from '../../../yoobic/services/requestor';
import {Authentication} from '../../../yoobic/services/authentication';
import {IUser} from '../../../yoobic/interfaces/iuser';
require('./ngux/menucontent.js');
/* beautify ignore:end */
@Component({
    selector: 'MenuContent',
    template: require('./menucontent.ngux'),
    providers: [Requestor, Authentication],
    directives: [ROUTER_DIRECTIVES, NgFor, NgIf]
})

export class MenuContent {
    public user: IUser;
    public contents = [];

    constructor(private router: Router, private authentication: Authentication) {
        this.user = this.authentication.getCurrentUser();
        this.contents = [{
            name: 'missions',
            delay: 0.3 / 4,
            title: 'My Missions',
            icon: 'yo-bicycle',
            action: function() {
                this.goTo('missionMaster');
            }.bind(this)
        }, {
                name: 'map',
                delay: 0.6 / 4,
                title: 'Map',
                icon: 'yo-map',
                action: function() {
                    //
                }.bind(this)
            }, {
                name: 'chat',
                delay: 0.9 / 4,
                title: 'Chat',
                icon: 'yo-chat',
                action: function() {
                    this.goTo('friends');
                }.bind(this)
            }, {
                name: 'calendar',
                delay: 1.2 / 4,
                title: 'Calendar',
                icon: 'yo-calendar',
                action: function() {
                    this.goTo('calendar');
                }.bind(this)
            }, {
                name: 'profile',
                delay: 1.5 / 4,
                title: 'Profile',
                icon: 'yo-profile',
                action: function() {
                    this.goTo('profile');
                }.bind(this)
            }, {
                name: 'logout',
                delay: 1.8 / 4,
                title: 'Logout',
                icon: 'yo-logout',
                action: function() {
                    this.logout();
                }.bind(this)
            }];

    }

    logout() {
        this.authentication.logout().then(res => {
            this.router.parent.navigate(['Login']);
        });
    }

    goTo(state: string) {
        //
    }

}
