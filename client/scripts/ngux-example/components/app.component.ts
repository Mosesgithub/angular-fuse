/* beautify ignore:start */
import {Component} from 'angular2/core';
import {MyCircle} from './circle.component';
/* beautify ignore:end */
@Component({
    selector: 'MyApp',
    directives: [MyCircle],
    template: require('./cache/app.component.html')
})

export class AppComponent {
    public amount = 30;
    public background = 'Yellow';
    public textvalue = 'Hello World';

    public foo = [];

    // {
    // 	background: 'Red'
    // }, {
    // 	background: 'Blue'
    // }, {
    // 	background: 'Green'
    // }, {
    // 	background: 'Yellow'
    // }
    public clickHandler(amount) {
        this.amount += amount;
        this.textvalue += ' ' + amount;
        console.log('you clicked me ' + amount);
    }

}
