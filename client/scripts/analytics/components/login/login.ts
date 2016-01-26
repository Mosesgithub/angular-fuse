/* beautify ignore:start */
import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Requestor} from '../../../yoobic/services/requestor';
import {Authentication} from '../../../yoobic/services/authentication';
import {TranslatePipe} from 'ng2-translate/ng2-translate';
/* beautify ignore:end */

@Component({
    selector: 'login',
    template: require('./login.html'),
    styles: [require('./login.scss').toString()],
    providers: [Requestor, Authentication],
    directives: [ROUTER_DIRECTIVES],
    pipes: [TranslatePipe]
})

export class Login {

    username: string = 'kevinteam@yoobic.com';
    password: string = 'yoolb2015';
    error: string = '';

    constructor(private router: Router, private authentication: Authentication) {

    }

    doLogin = function() {
        this.authentication.login(this.username, this.password).then(
            res => this.router.navigate(['Menu/CampaignsOverview']),
            err => this.error = err.error
        );
    };

    doSignup = function() {
        //
    };
}
