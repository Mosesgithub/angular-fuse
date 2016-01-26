/* beautify ignore:start */
import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
/* beautify ignore:end */

@Component({
    selector: 'campaigns-overview',
    template: require('./campaigns-overview.html'),
    styles: [require('./campaigns-overview.scss').toString()],
    directives: [ROUTER_DIRECTIVES]
})

export class CampaignsOverview {

    constructor(private router: Router) {

    }
}
