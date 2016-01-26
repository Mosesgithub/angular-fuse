/* beautify ignore:start */
import {Injectable} from 'angular2/core';
/* beautify ignore:end */

@Injectable()
export class HtmlParser {
    constructor() {
        //
    }

    getSrc(toParse: string): any {
        console.log('finding src from : ' + toParse);
        let re = new RegExp('(.*)src="(.*?)"(.*)');

        console.log('which gives : ' + re.exec(toParse)[2]);
        return re.exec(toParse)[2];
    }

    removeTags(toParse: string): any {
        console.log('removing tags from : ' + toParse);
        let re = new RegExp('(.*?)<(.*?)>(.*)');
        let retVal = '';
        let parsed = re.exec(toParse);

        while (parsed) {
            retVal += parsed[1];
            toParse = parsed[3];
            parsed = re.exec(toParse);
        }
        retVal += toParse;

        console.log('which gives : ' + retVal);
        return retVal;
    }

    parse(toParse: string): any {
        console.log('PARSING : ' + toParse);
        let re = new RegExp('(.*)<img(.*)>(.*)');
        let retVal = [];
        toParse = toParse.replace(/[\n]/gi, "");
        let parsed = re.exec(toParse);

        while (parsed) {
            retVal.push({
                type: 'text',
                value: this.removeTags(parsed[1])
            });
            retVal.push({
                type: 'image',
                value: this.getSrc(parsed[2])
            });
            toParse = parsed[3];
            parsed = re.exec(toParse);
        }
        retVal.push({
            type: 'text',
            value: this.removeTags(toParse)
        });

        return retVal;
    }
}
