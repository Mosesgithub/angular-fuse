/* beautify ignore:start */

import {Page, ViewController} from 'ionic-framework/ionic';
import {Modal, NavController, NavParams, Animation} from 'ionic-framework/ionic';
/* beautify ignore:end */

@Page({
    styles: [require('./login.component.scss').toString()],
    template: require('./login.component.html')
})
export class LoginComponent {
    private nav: NavController;
    private myParam: any;

    constructor(nav: NavController) {
        this.nav = nav;
        this.myParam = '';
    }

    openBasicModal() {
        let myModal = Modal.create(LoginModalContent);
        this.nav.present(myModal, {
            animation: 'my-fade-in',
        });
    }

}

@Page({
    template: require('./login.modal.html')
})
class LoginModalContent {
    private nav: NavController;
    private myParam: any;
    private viewCtrl: ViewController;
    constructor(nav: NavController, params: NavParams, viewCtrl: ViewController) {
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        this.myParam = params.get('myParam');
    }

    closeModal() {
        this.viewCtrl.dismiss({
            animation: 'my-fade-out',
        });
    }
}

class FadeIn extends Animation {
    constructor(enteringView, leavingView) {
        super(enteringView.pageRef());
        this.easing('ease')
            .duration(1000)
            .fromTo('translateY', '0%', '0%')
            .fadeIn()
            .before.addClass('show-page');
    }
}
Animation.register('my-fade-in', FadeIn);

class FadeOut extends Animation {
    constructor(enteringView, leavingView) {
        super(leavingView.pageRef());
        this.easing('ease')
            .duration(500)
            .fadeOut()
            .before.addClass('show-page');
    }
}
Animation.register('my-fade-out', FadeOut);
