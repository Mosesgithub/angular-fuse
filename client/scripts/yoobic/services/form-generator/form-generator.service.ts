/* beautify ignore:start */
import {Injectable} from 'angular2/core';
import {Config} from '../config';
import {Requestor} from '../requestor';
import {AuthToken} from '../authToken';
/* beautify ignore:end */

@Injectable()
export class FormGenerator {
    private config: Config;
    private requestor: Requestor;
    private authToken: AuthToken;

    constructor(requestor: Requestor, authToken: AuthToken) {
        this.requestor = requestor;
        this.authToken = authToken;
        this.config = new Config();
    }

    getSchema(collectionName: string) {
        let url = this.config.apiUrl + '/api/businesslogic/getCollectionSchema';
        return this.requestor.post(url, {
            collectionName: collectionName
        }).then(res => {
            return res.data;
        });
    }

}
