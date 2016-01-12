/* beautify ignore:start */
import {Component} from 'angular2/core';
/* beautify ignore:end */
@Component({
    selector: 'MyCircleComponent',
    template: require('./cache/circle.component.html')
})

export class MyCircle {
    public static count = 0;
    public message = 'Circle binding';
    constructor() {
        MyCircle.count += 1;
        this.message += MyCircle.count;
    }
}
