/* beautify ignore:start */
import {Component} from 'angular2/core';

require('./ngux/missioncard.js');
/* beautify ignore:end */
@Component({
    selector: 'MissionCard',
    template: require('./missioncard.ngux'),
    inputs: ['mission']
})

export class MissionCard {
    //
    constructor() {
        //
    }
}
