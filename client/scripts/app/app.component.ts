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
	public height = 60;
 	public heroes;
 	
 	public selectedHero: IHero;
 	 constructor(private heroService: HeroService) {
		   console.log('AppComponent constructor');
 	 }
 	 ngOnInit() {
 	 	this.getHeroes();
 	 }
 	 getHeroes() {
 	 	this.heroes = this.heroService.getHeroes();
 	 }
 	 onSelect(hero: IHero) {
 	 	this.selectedHero = hero;
 	 }
}