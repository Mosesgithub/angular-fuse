// import {Component, OnInit} from 'angular2/core';
// import {IHero} from '../common/interfaces/ihero';
// import {HeroService} from '../common/services/hero.service';

// @Component({
// 	selector: 'app',
// 	styles: [require('./app.component.css')],
// 	providers: [HeroService],
// 	template: require('./app.component.html')
// })
// export class AppComponent implements OnInit {
// 	public title = 'Tour Of Heroes';
// 	public heroes;
// 	public selectedHero: IHero;

// 	constructor(private heroService: HeroService) {

// 	}

// 	ngOnInit() {
// 		this.getHeroes();
// 	}

// 	getHeroes() {
// 		this.heroes = this.heroService.getHeroes();
// 	}

// 	onSelect(hero: IHero) {
// 		this.selectedHero = hero;
// 	}
// }

import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: '<Panel Background="Red" ><Text>HelloWorld</Text></Panel>'
})
export class AppComponent { }