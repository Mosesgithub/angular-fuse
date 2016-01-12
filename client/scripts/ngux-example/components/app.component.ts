/* beautify ignore:start */
import {Component, OnInit} from 'angular2/core';
import {MyCircle} from './circle.component';
import {FooService} from '../services/foo.service';
/* beautify ignore:end */

@Component({
    selector: 'MyApp',
    providers: [FooService],
    directives: [MyCircle],
    template: require('./cache/app.component.html')
})

export class AppComponent implements OnInit {
    public amount = 30;
    public background = 'Yellow';
    public textvalue = 'Hello World';

    public foo = [{
        background: 'Red',
        sexe: 'Male',
        width: 100
    }, {
            background: 'Blue',
            sexe: 'Female',
            width: 200
        }, {
            background: 'Green',
            sexe: 'Female',
            width: 300
        }, {
            background: 'Yellow',
            sexe: 'Male',
            width: 400
        }];

    public too = [{
        background: 'Red'
    }, {
            background: 'Blue'
        }];

    constructor(private fooService: FooService) {
        //console.log('AppComponent constructor');
    }

    ngOnInit() {
        this.fooService.getFoos().subscribe(res => {
            console.log('foos updated');
            this.foo = res;
            console.log(JSON.stringify(this.foo));
        });
    }

    public clickHandler(amount) {
        this.amount += 30;
        this.textvalue += ' ' + amount;
        console.log('you clicked me ' + amount);
    }

}
