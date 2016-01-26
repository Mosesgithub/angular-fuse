/* beautify ignore:start */
import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
/* beautify ignore:end */

@Component({
    selector: 'form-creator',
    template: require('./form-creator.html'),
    styles: [require('./form-creator.scss').toString()],
    directives: [ROUTER_DIRECTIVES]
})

export class FormCreator {

    constructor(private router: Router) {

    }
}
