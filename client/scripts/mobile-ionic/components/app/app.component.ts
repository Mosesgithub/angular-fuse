/* beautify ignore:start */
import {App} from 'ionic-framework/ionic';
import {LoginComponent} from '../login/login.component';
/* beautify ignore:end */

@App({
    template: require('./app.component.html')
})

export class AppComponent {
    private rootPage: any;
    constructor() {
        // First page to push onto the stack
        this.rootPage = LoginComponent;
    }
}
