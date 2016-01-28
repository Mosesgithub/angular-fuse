/* beautify ignore:start */
import {Component, EventEmitter, Output, Input} from 'angular2/core';
import {IMission} from '../../../yoobic/interfaces/imission';

require('./ngux/missiondetail.js');
/* beautify ignore:end */
@Component({
    selector: 'MissionDetail',
    template: require('./missiondetail.ngux') //,
    //inputs: ['mission']
})

export class MissionDetail {
    @Output() book = new EventEmitter(); //<IMission>
    @Output() close = new EventEmitter(); //<IMission>
    @Input() mission: IMission;
    constructor() {
        //
    }

    bookEmit() {
        //console.log(this.mission);
        this.book.emit(null);
    }

    closeEmit() {
        this.close.emit(null);
    }
}
