/* beautify ignore:start */
import {Requestor} from './requestor';
import {Config} from './config';
import {Injectable} from 'angular2/core';
import {AuthToken} from './authToken';
//import {IMissionDescription} from '../interfaces/imissiondescription';
/* beautify ignore:end */
@Injectable()
export class DashboardBroker {
    private config: Config;
    private requestor: Requestor;
    private authToken: AuthToken;

    constructor(requestor: Requestor, authToken: AuthToken) {
        this.requestor = requestor;
        this.authToken = authToken;
        this.config = new Config();
    }

    getCampaignsProgress(): Promise<any> {
        let url = this.config.apiUrl + '/api/businesslogic/getCampaignsProgress';
        return this.requestor.get(url).then(res => {
            return res.data;
        });
    }

    getCurrentSession(): Promise<any> {
        let url = this.config.apiUrl + '/api/businesslogic/getCurrentSession';
        return this.requestor.get(url).then(res => {
            return res.data;
        });
    }
}
