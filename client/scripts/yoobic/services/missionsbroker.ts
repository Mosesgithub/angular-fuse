/* beautify ignore:start */
import {Requestor} from './requestor';
import {Config} from './config';
import {Injectable} from 'angular2/core';
import {AuthToken} from './authToken';
import {IMission} from '../interfaces/imission';
/* beautify ignore:end */
@Injectable()
export class MissionsBroker {
    config: Config;
    requestor: Requestor;
    authToken: AuthToken;

    constructor(requestor: Requestor, authToken: AuthToken) {
        this.requestor = requestor;
        this.authToken = authToken;
        this.config = new Config();
    }

    getAll(): Promise<IMission[]> {
        let query = {
            'where': {
                // '_geoloc': {
                //     'nearSphere': {
                //         '$geometry': {
                //             'type': 'Point',
                //             'coordinates': [-0.23796379999999998, 51.531550499999994]
                //         },
                //         '$maxDistance': 400000
                //     }
                // },
                'type': {
                    'nin': ['poll', 'service', 'todo']
                },
                // 'isService': {
                //     'ne': true
                // },
                // '_acl.groups.r': {
                //     'nin': ['public']
                // },
                'status': {
                    'nin': ['booked', 'finished']
                }
            },
            'limit': 30,
            'skip': 0,
            'fields': {},
            'include': {
                'relation': 'description',
                'scope': {
                    'fields': ['_id', 'title', 'background', 'icon', 'text']
                }
            },
            'order': []
        };
        let url = this.config.apiUrl + '/api/missions?filter=' + encodeURIComponent(JSON.stringify(query));
        return this.requestor.get(url).then(data => {
            let retVal: IMission[] = data;
            return retVal;
        });
    }
}
