 import {Injectable} from 'angular2/core';
 import {Http, Jsonp} from 'angular2/http';
 import {IHero} from '../interfaces/ihero';

 let heroes: IHero[] = [
 	{ id: 11, name: 'Mr. Nice!' },
 	{ id: 12, name: 'Narco' },
 	{ id: 13, name: 'Bombasto' },
 	{ id: 14, name: 'Celeritas' },
 	{ id: 15, name: 'Magneta' },
 	{ id: 16, name: 'RubberMan' },
 	{ id: 17, name: 'Dynama' },
 	{ id: 18, name: 'Dr IQ' },
 	{ id: 19, name: 'Magma' },
 	{ id: 20, name: 'Tornado' }
 ];

 @Injectable()
 export class HeroService {
	constructor(private jsonp: Jsonp) {
	}
	getData() {
		//return null;
		return this.jsonp.get('https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.digg.com/rss/index.xml&callback=JSONP_CALLBACK')
		.map(res => res.json())
		.toPromise();

		// return this.http.get('https://yoobic-ims.herokuapp.com/api/Vehicles?filter=%7B%22limit%22%3A20%7D')
		// .map(res => res.json())
		// 	.subscribe(responseData => { this.responseData = responseData; console.log(this.responseData); })
	}
 }