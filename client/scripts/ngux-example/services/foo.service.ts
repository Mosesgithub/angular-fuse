/* beautify ignore:start */
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
/* beautify ignore:end */

@Injectable()
export class FooService {
    constructor(private http: Http) { }
    getFoos(): Observable<any[]> {
        return this.http.get('https://yoobic-ims.herokuapp.com/api/Vehicles?filter=%7B%22limit%22%3A20%7D')
            .map(res => res.json())
            .map((heroes: Array<any>) => {
                let result: Array<any> = [];
                if (heroes) {
                    heroes.forEach((h) => {
                        result.push({
                            background: h.id
                        });
                    });
                }
                return result;
            });
    }
}
