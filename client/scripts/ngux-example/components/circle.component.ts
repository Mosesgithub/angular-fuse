/* beautify ignore:start */
import {Component} from 'angular2/core';
/* beautify ignore:end */
@Component({
    selector: 'MyCircleComponent',
    template: require('./cache/circle.component.html')
})

export class MyCircle {
    public message = 'Circle binding';
}
