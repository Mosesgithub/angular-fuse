/* beautify ignore:start */
import {Requestor} from './requestor';
import {Config} from './config';
import {Injectable} from 'angular2/core';
import {AuthToken} from './authToken';
/* beautify ignore:end */
@Injectable()
export class Authentication {
    config: Config;
    requestor: Requestor;
    authToken: AuthToken;

    constructor(requestor: Requestor, authToken: AuthToken) {
        this.requestor = requestor;
        this.authToken = authToken;
        this.config = new Config();
    }

    login(username: string, password: string) {

        let url = this.config.apiUrl + '/auth/login';
        return this.requestor.post(url, {
            username: username || 'kevinteam@yoobic.com',
            password: password || 'yoolb2015'
        }).then(res => {
            this.authToken.token = res.$mcfly$token;
            this.authToken.user = res.user;
            return res;
        });

    }
}
