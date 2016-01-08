/* beautify ignore:start */
import {Component, OnInit} from 'angular2/core';
import {IHero} from '../common/interfaces/ihero';
import {HeroService} from '../common/services/hero.service';

import {Login} from '../login/login.component';
/* beautify ignore:end */

@Component({
    selector: 'app',
    providers: [HeroService],
    directives: [Login],
    template: require('./app.component.html')
})
export class AppComponent implements OnInit {
    public title = 'Tour Of Heroes';
    public dock = 'Top';
    public height = 160;
    public clickCount = 0;
    public background = 'Red';
    public mywidth = 100;

    public heroes = new Array < IHero > ();

    public selectedHero: IHero;
    constructor(private heroService: HeroService) {
        //console.log('AppComponent constructor');
    }
    ngOnInit() {
        //this.getHeroes();

        this.heroService.getHeroes().subscribe(
            res => {
                //debugger;
                console.log(this);
                this.heroes = res;
            }
        );
    }
    getHeroes() {
        // setTimeout(() => {
        //     this.heroes = < IHero[] > [{
        //         id: '3'
        //     }];
        // }, 5000);
         setTimeout(() => {
             // this.heroService.getHeroes().subscribe(
             //     res => {
             //         debugger;
             //         this.heroes = res;
             //     }
             // );
         }, 4000);
    }
    onSelect(hero: IHero) {
        this.selectedHero = hero;
    }
    onHeaderClick() {
        this.clickCount++;
        if (this.background === 'Red') {
            this.height += 40;
            this.background = 'Blue';
        } else {
            this.height -= 40;
            this.background = 'Red';
        }
    }
}
