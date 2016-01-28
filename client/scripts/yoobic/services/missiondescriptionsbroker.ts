/* beautify ignore:start */
import {Requestor} from './requestor';
import {Config} from './config';
import {Injectable} from 'angular2/core';
import {AuthToken} from './authToken';
import {IMissionDescription} from '../interfaces/imissiondescription';
/* beautify ignore:end */
@Injectable()
export class MissionDescriptionsBroker {
    private config: Config;
    private requestor: Requestor;
    private authToken: AuthToken;

    constructor(requestor: Requestor, authToken: AuthToken) {
        this.requestor = requestor;
        this.authToken = authToken;
        this.config = new Config();
    }

    getById(id: string): Promise<IMissionDescription> {
        let url = this.config.apiUrl + '/api/missiondescriptions/' + (id || '55bba776433ad2c619012410');
        return this.requestor.get(url).then(data => {
            let retVal: IMissionDescription = data;
            return retVal;
        });
    }
}
