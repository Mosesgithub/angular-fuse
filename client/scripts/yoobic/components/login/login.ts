/* beautify ignore:start */
import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Requestor} from '../../services/requestor';
import {Authentication} from '../../services/authentication';
require('./ngux/login.js');
/* beautify ignore:end */
@Component({
    selector: 'Login',
    template: require('./login.ngux'),
    providers: [Requestor, Authentication],
    directives: [ROUTER_DIRECTIVES]
})

export class Login {

    constructor(private router: Router, private authentication: Authentication) {

    }

    goToLogin = function(param) {
        this.authentication.login(null, null).then(res => {
            this.router.navigate(['Menu/MissionsList', {
                param: param
            }]);
        });
    };
}
