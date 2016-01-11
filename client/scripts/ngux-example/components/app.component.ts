/* beautify ignore:start */
import {Component} from 'angular2/core';
/* beautify ignore:end */
@Component({
    selector: 'MyApp',
    template: require('./cache/app.component.html')
})

export class AppComponent {
    public amount = 30;
    public background = 'Green';
    public foo = [{
        background: 'Red'
    }, {
        background: 'Blue'
    }];

}
