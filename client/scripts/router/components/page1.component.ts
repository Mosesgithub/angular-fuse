/* beautify ignore:start */
import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
require('./page1.component.js');
/* beautify ignore:end */

@Component({
    selector: 'Page1',
    template: require('./page1.component.ngux'),
    directives: [ROUTER_DIRECTIVES]
})

export class Page1 {
    public background: string = '#f00';
    constructor(private router: Router) { }
    public navigate(param) {
        console.log('navigating to Page 2');
        this.router.parent.navigate(['Page2', {
            param: param
        }]);
    }
}
