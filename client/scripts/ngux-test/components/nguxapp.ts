/* beautify ignore:start */
import {Component} from 'angular2/core';
import {NGUXChild} from './nguxchild';
require('./nguxapp.js');
/* beautify ignore:end */
@Component({
    selector: 'NGUXApp',
    directives: [NGUXChild],
    template: require('./nguxapp.ngux')
    //properties: ['width', 'sexe']
})

export class NGUXApp {

    public backgroundColor: string;
    public text: string = 'Default value';
    public foo: Array<string> = ['First', 'Second', 'Third'];

    constructor() {
        console.log('NGUXApp constructor 1');
        this.backgroundColor = '#00f';
        console.log(this.backgroundColor);
    }

    changeColor() {
        this.backgroundColor = this.backgroundColor !== '#0f0' ? '#0f0' : '#00f';
    }

    valueChanged(args) {
        if (args && args.value && this.text !== args.value) {
            this.text = args.value;
        }
    }
}
