import {Component, OnInit} from 'angular2/core';
import {IHero} from '../common/interfaces/ihero';
import {HeroService} from '../common/services/hero.service';

@Component({
    selector: 'app',
    providers: [HeroService],
    template: require('./app.component.html')
})
 export class AppComponent implements OnInit {
 	public title = 'Tour Of Heroes';
	public dock = 'Top';
	public height = 160;
 	public heroes;
 	
 	public selectedHero: IHero;
	constructor(private heroService: HeroService) {
		console.log('AppComponent constructor');
	}
	ngOnInit() {
		this.getHeroes();
	}
	getHeroes() {
		this.heroService.getData().then(data => { console.log(data) });
		this.heroService.getData().then(h => { this.heroes = h.responseData.feed.entries; console.log(this.heroes); });
	}
	onSelect(hero: IHero) {
		this.selectedHero = hero;
	}
	onClickRectangle() {
		console.log('Rectangle clicked');
	}
}