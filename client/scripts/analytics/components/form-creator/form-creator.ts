/* beautify ignore:start */
import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Dragula} from '../../../yoobic/directives/dragula';
import {DragulaService} from '../../../yoobic/services/dragula.provider';
/* beautify ignore:end */

@Component({
    selector: 'form-creator',
    template: require('./form-creator.html'),
    styles: [require('./form-creator.scss').toString()],
    viewProviders: [DragulaService],
    directives: [ROUTER_DIRECTIVES, Dragula]
})

export class FormCreator {

    public components: any = [{
        title: 'COMP1'
    }, {
			title: 'COMP2'
		}, {
			title: 'COMP3'
		}, {
			title: 'COMP4'
		}, {
			title: 'COMP5'
		}, {
			title: 'COMP6'
		}, {
			title: 'COMP7'
		}, {
			title: 'COMP8'
		}, {
			title: 'COMP9'
		}, {
			title: 'COMP10'
		}];
    public activeSlide: number = 0;
    public page1: any = {
        title: 'page1',
        items: [{
            title: 'FIELD1'
        }, {
				title: 'FIELD2'
			}, {
				title: 'FIELD3'
			}, {
				title: 'FIELD4'
			}, {
				title: 'FIELD5'
			}, {
				title: 'FIELD6'
			}, {
				title: 'FIELD7'
			}, {
				title: 'FIELD8'
			}, {
				title: 'FIELD9'
			}, {
				title: 'FIELD10'
			}]
    };
    public page2: any = {
        title: 'page2',
        items: [{
            title: 'FIELD1'
        }, {
				title: 'FIELD2'
			}, {
				title: 'FIELD3'
			}, {
				title: 'FIELD4'
			}, {
				title: 'FIELD5'
			}, {
				title: 'FIELD6'
			}, {
				title: 'FIELD7'
			}, {
				title: 'FIELD8'
			}, {
				title: 'FIELD9'
			}, {
				title: 'FIELD10'
			}]
    };

    public slides: Array<any> = [this.page1, this.page2];

    constructor(private router: Router, private dragulaService: DragulaService) {
        dragulaService.setOptions('first-bag', {
            copy: function(el, source) {
                return source.className.indexOf('components') > -1;
            },
            accepts: function(el, target) {
                return target.className.indexOf('form') > -1;
            }
        });
        dragulaService.dropModel.subscribe((value) => {
            this.onDropModel(value.slice(1));
        });
        dragulaService.removeModel.subscribe((value) => {
            this.onRemoveModel(value.slice(1));
        });
    }

    private onDropModel(args) {
        let [el, target, source] = args;
        console.dir(this.slides);
    }

    private onRemoveModel(args) {
        let [el, source] = args;
        // do something else
    }
}
