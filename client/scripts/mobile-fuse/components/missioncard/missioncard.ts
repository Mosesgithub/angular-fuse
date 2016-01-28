/* beautify ignore:start */
import {Component, EventEmitter, Output, Input} from 'angular2/core';
import {IMission} from '../../../yoobic/interfaces/imission';

require('./ngux/missioncard.js');
/* beautify ignore:end */
@Component({
    selector: 'MissionCard',
    template: require('./missioncard.ngux') //,
    //inputs: ['mission']
})

export class MissionCard {
    @Output() select = new EventEmitter(); //<IMission>
    @Input() mission: IMission;
    constructor() {
        //
    }

    selectEmit() {
        console.log('selectEmit');
        this.select.emit(null);
    }
}
