/* beautify ignore:start */
import {Component} from 'angular2/core';
import {TimeAgo} from '../../common/pipes/timeAgo';
/* beautify ignore:end */
@Component({
    selector: 'MyCircleComponent',
    template: require('./cache/circle.component.html'),
    pipes: [TimeAgo],
    properties: ['width', 'sexe']
})

export class MyCircle {
    public static count = 0;
    public message = 'Circle binding';
    public width = 20;
    public sexe;
    public date;
    constructor() {
        MyCircle.count += 1;
        this.message += MyCircle.count;
        this.date = new Date();
    }
}
