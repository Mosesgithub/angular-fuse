/* beautify ignore:start */
import {Component, Input} from 'angular2/core';
import {BackImg} from '../../../common/attribute-directives/backimg';
import {TimeAgo} from '../../../common/pipes/timeago';
import {TranslatePipe} from 'ng2-translate/ng2-translate';
/* beautify ignore:end */

@Component({
    selector: 'campaign-tile',
    template: require('./campaign-tile.html'),
    styles: [require('./campaign-tile.scss').toString()],
    directives: [BackImg],
    pipes: [TranslatePipe, TimeAgo]
})

export class CampaignTile {

    @Input() data: any;

    constructor() {
        //
    }
}
