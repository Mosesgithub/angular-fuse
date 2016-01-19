/* beautify ignore:start */
import {Component} from 'angular2/core';
require('./nguxchild.js');
/* beautify ignore:end */
@Component({
    selector: 'NGUXChild',
    template: require('./nguxchild.ngux'),
    properties: ['prop']
})

export class NGUXChild {

    public backgroundColor: string;
    public prop: string;
    constructor() {
        this.backgroundColor = '#f00';
    }

    changeColor() {
        //
    }
}
