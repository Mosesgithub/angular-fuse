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
                .subscribe(
                res => resolve(res),
                err => reject(err.json())
                );
        });
    }

    get(url): any {
        return new Promise((resolve, reject) => {
            this.http.get(url, {
                headers: this._buildHeaders()
            })
                .map(res => res.json())
                .subscribe(
                res => resolve(res),
                err => reject(err.json())
                );
        });
    }

    put(url, body): any {
        return new Promise((resolve, reject) => {
            this.http.put(url, body ? JSON.stringify(body) : null, {
                headers: this._buildHeaders()
            })
                .map(res => res.json())
                .subscribe(
                res => resolve(res),
                err => reject(err.json())
                );
        });
    }

    _buildHeaders() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        if (this.authToken.token) {
            headers.append('Authorization', 'Bearer ' + this.authToken.token);
        } else {
            headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMC4wLjAuMDo1MDIyMS8iLCJzdWIiOiI1NGY0NjBkMzFlOTNkZmY4M2QwMDQ2MzgiLCJleHAiOjE0NTU5MjA0OTcsImlhdCI6MTQ1MzMyODQ5NywidXNlcm5hbWUiOiJrZXZpbnRlYW1AeW9vYmljLmNvbSIsImVtYWlsIjoiYWJyaWxsaW9uQHlvb2JpYy5jIiwiX2lkIjoiNTRmNDYwZDMxZTkzZGZmODNkMDA0NjM4In0.sZjHUxQkOa9WAZ0w7IBWQts6Rdt_oQeSAiSdDVf_85A');
        }
        return headers;
    }

}
