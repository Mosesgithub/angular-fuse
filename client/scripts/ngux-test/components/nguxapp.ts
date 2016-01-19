/* beautify ignore:start */
import {Component} from 'angular2/core';
import {NgIf} from 'angular2/common';
import {NGUXChild} from './nguxchild';
require('./nguxapp.js');
/* beautify ignore:end */
@Component({
    selector: 'NGUXApp',
    directives: [NGUXChild, NgIf],
    template: require('./nguxapp.ngux')
    //properties: ['width', 'sexe']
})

export class NGUXApp {

    public static version: string = '1.0.0.5';
    public backgroundColor: string;
    public showPanel: boolean = false;
    public text: string = 'Default value';
    public foo: Array<string> = ['First']; //, 'Second', 'Third', 'Fourth'

    constructor() {
        //console.log('NGUXApp_constructor 1');
        this.backgroundColor = '#df5';
        //console.log(this.backgroundColor);
        //setTimeout(() => this.togglePanel(), 300    0);
        //setTimeout(() => this.togglePanel(), 6000);
    }

    changeColor() {
        this.backgroundColor = this.backgroundColor !== '#0f0' ? '#0f0' : '#00f';
    }

    valueChanged(args) {
        if (args && args.value && this.text !== args.value) {
            this.text = args.value;
        }
    }

    togglePanel() {
        console.log('togglePanel ' + this.showPanel);
        this.showPanel = !this.showPanel;
    }
}
