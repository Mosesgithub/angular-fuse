/* beautify ignore:start */
import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
/* beautify ignore:end */

@Component({
    selector: 'Page1',
    template: require('./cache/page1.component.html'),
    directives: [ROUTER_DIRECTIVES]
})

export class Page1 {
    constructor(private router: Router) {
    }
    public navigate(param) {
        console.log('navigating to Page 2');
        this.router.parent.navigate(['Page2', {
            param: param
        }]);
    }
}
