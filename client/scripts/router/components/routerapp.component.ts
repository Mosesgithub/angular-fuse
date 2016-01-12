/* beautify ignore:start */
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Page1} from './page1.component';
import {Page2} from './page2.component';
/* beautify ignore:end */
@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    template: require('./cache/routerapp.component.html')
})

@RouteConfig([{
    path: '/',
    redirectTo: ['/Page1'],
    name: 'root'
}, {
		path: '/page1',
		name: 'Page1',
		component: Page1
	}, {
		path: '/page2',
		name: 'Page2',
		component: Page2
	}])

export class RouterAppComponent

}
