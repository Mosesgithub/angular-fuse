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
	public clickCount = 0;
	public background = 'Red';

	public heroes;

	public selectedHero: IHero;
	constructor(private heroService: HeroService) {
		console.log('AppComponent constructor');
	}
	ngOnInit() {
		this.getHeroes();
		setInterval(() => {
			this.clickCount++;
		}, 1000);
	}
	getHeroes() {
		this.heroes = this.heroService.getHeroes();
	}
	onSelect(hero: IHero) {
		this.selectedHero = hero;
	}
	onHeaderClick() {
		this.clickCount++;
		this.height += 40;
		if (this.background === 'Red') {
			this.background = 'Blue';
		}
		else {
			this.background = 'Red';
		}
		console.log('onHeaderClick ' + this.clickCount + ' ' + this.height + ' ' + this.background);
	}
}