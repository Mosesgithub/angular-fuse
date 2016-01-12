/* beautify ignore:start */
import {Pipe, PipeTransform} from 'angular2/core';
import * as moment from 'moment';
/* beautify ignore:end */

@Pipe({
    name: 'timeAgo'
})
export class TimeAgo implements PipeTransform {
    transform(value: Date, args: string[]): any {
        return moment(value).calendar();
    }
}
