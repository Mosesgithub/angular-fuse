/* beautify ignore:start */
import {Injectable} from 'angular2/core';
import {IHero} from '../interfaces/ihero';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
/* beautify ignore:end */

@Injectable()
export class HeroService {
    constructor(private http: Http) {}
    getHeroes(): Observable < IHero[] > {
        //return heroes;
        // return this.jsonp.get('https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.digg.com/rss/index.xml&callback=JSONP_CALLBACK')
        //     .map(res => res.json())
        //     .toPromise();
        return this.http.get('https://yoobic-ims.herokuapp.com/api/Vehicles?filter=%7B%22limit%22%3A20%7D')
            .map(res => res.json())
            .map((heroes: Array < any > ) => {
                let result: Array < IHero > = [];
                if (heroes) {
                    heroes.forEach((h) => {
                        result.push({
                            id: h.id,
                            name: h.id
                        });
                    });
                }
                return result;
            });
    }
}
