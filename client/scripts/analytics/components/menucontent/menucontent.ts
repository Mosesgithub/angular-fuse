/* beautify ignore:start */
import {Component} from 'angular2/core';
import {NgFor, NgIf} from 'angular2/common';
import {Router, ROUTER_DIRECTIVES, Location} from 'angular2/router';
import {Requestor} from '../../../yoobic/services/requestor';
import {Authentication} from '../../../yoobic/services/authentication';
import {IUser} from '../../../yoobic/interfaces/iuser';
import {TranslatePipe} from 'ng2-translate/ng2-translate';
import {UserName} from '../../../common/pipes/username';
import {BackImg} from '../../../common/attribute-directives/backimg';
/* beautify ignore:end */

@Component({
    selector: 'menu-content',
    template: require('./menucontent.html'),
    styles: [require('./menucontent.scss').toString()],
    providers: [Requestor, Authentication],
    directives: [ROUTER_DIRECTIVES, NgFor, NgIf, BackImg],
    pipes: [TranslatePipe, UserName]
})

export class MenuContent {
    public user: IUser;
    public contents = [];

    constructor(private router: Router, private authentication: Authentication, private location: Location) {
        this.user = this.authentication.getCurrentUser();
    }

    ngAfterContentInit() {
        if (!this.user) {
            //   this.logout();
        }
    }

    isActive(path) {
        return this.location.path().indexOf(path) >= 0;
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
