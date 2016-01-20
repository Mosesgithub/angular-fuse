/* beautify ignore:start */
import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
require('./page2.component.js');
/* beautify ignore:end */
@Component({
    selector: 'Page2',
    template: require('./page2.component.ngux'),
    directives: [ROUTER_DIRECTIVES]
})

export class Page2 implements OnInit {
    public clickedOn: string = '';
    constructor(private router: Router, private routeParams: RouteParams) {

    }
    ngOnInit() {
        console.log(this.routeParams.get('param'));
        this.clickedOn = this.routeParams.get('param');
    }
    public navigate() {
        console.log('navigating to Page 1');
        this.router.parent.navigate(['Page1']);
    }
}
