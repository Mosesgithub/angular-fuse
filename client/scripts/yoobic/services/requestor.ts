/* beautify ignore:start */
import {Http, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {AuthToken} from './authToken';
/* beautify ignore:end */

@Injectable()
export class Requestor {

    constructor(private http: Http, private authToken: AuthToken) {

    }

    post(url, body): any {
        return new Promise((resolve, reject) => {
            this.http.post(url, body ? JSON.stringify(body) : null, {
                headers: this._buildHeaders()
            })
				.map(res => res.json())
				.subscribe(res => {
					if (res.error) {
						reject(res.error);
					} else {
						resolve(res);
					}
				});

        });
    }

    get(url): any {
        return new Promise((resolve, reject) => {
            this.http.get(url, {
                headers: this._buildHeaders()
            })
				.map(res => res.json())
				.subscribe(res => {
					if (res.error) {
						reject(res.error);
					} else {
						resolve(res);
					}
				});
        });
    }

    put(url, body): any {
        return new Promise((resolve, reject) => {
            this.http.put(url, body ? JSON.stringify(body) : null, {
                headers: this._buildHeaders()
            })
				.map(res => res.json())
				.subscribe(res => {
					if (res.error) {
						reject(res.error);
					} else {
						resolve(res);
					}
				});
        });
    }

    _buildHeaders() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        if (this.authToken.token) {
            headers.append('Authorizaton', 'Bearer ' + this.authToken.token);
        }
        return headers;
    }

}
