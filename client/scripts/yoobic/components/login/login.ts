/* beautify ignore:start */
import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Requestor} from '../../services/requestor';
import {Authentication} from '../../services/authentication';
import {MissionsBroker} from '../../services/missionsbroker';
require('./login.js');
/* beautify ignore:end */
@Component({
    selector: 'Login',
    template: require('./login.ngux'),
    providers: [Requestor, Authentication, MissionsBroker],
    directives: [ROUTER_DIRECTIVES]
})

export class Login {

    constructor(private router: Router, private authentication: Authentication, private missionsbroker: MissionsBroker) {
        //
        // this.authentication.login(null, null).then(res => {
        //     console.log(res);
        //     return missionsbroker.getAll();
        // }).then((data) => {
        //     console.log(data);
        // });
    }

    goToLogin = function(param) {
        this.authentication.login(null, null).then(res => {
            console.log('login successfull');
            this.router.navigate(['MissionsList', {
                param: param
            }]);
        });
    };
}
