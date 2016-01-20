/* beautify ignore:start */
import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
require('./missionslist.js');
import {AuthToken} from '../../services/authToken';
/* beautify ignore:end */
@Component({
    selector: 'MissionsList',
    template: require('./missionslist.ngux'),
    directives: [ROUTER_DIRECTIVES]
})

export class MissionsList {
    public missions = [1, 2, 3, 4, 5];
    public user;
    constructor(private router: Router, authToken: AuthToken) {
        //
        this.user = authToken.user;
        console.log(JSON.stringify(this.user));
    }
}
