/* beautify ignore:start */
import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {DynamicField} from '../../../dynamic-form/interfaces/dynamic-field/dynamic-field.interface';
import {DynamicFormComponent} from '../../../dynamic-form/components/dynamic-form/dynamic-form.component';
import {DynamicFilterComponent} from '../../../dynamic-form/components/dynamic-filter/dynamic-filter.component';
/* beautify ignore:end */

@Component({
    selector: 'form-creator',
    template: require('./form-creator.html'),
    styles: [require('./form-creator.scss').toString()],
    directives: [ROUTER_DIRECTIVES, DynamicFormComponent, DynamicFilterComponent]
})

export class FormCreator {

    private form: Array<DynamicField>;
    private data: {};

    constructor(private router: Router) {
        this.data = {};
        this.form = [{
            name: 'column1',
            title: 'This is number only',
            visible: true,
            type: 'number'
        }, {
				name: 'column2',
				title: 'This a text field',
				visible: true,
				type: 'text',
				condition: 'column1>10'
			}, {
				name: 'column3',
				title: 'Column 3',
				visible: true,
				required: true,
				type: 'text',
				condition: 'column4===true'
			}, {
				name: 'column4',
				title: 'Toggle and see',
				visible: true,
				type: 'boolean'
			}, {
				name: 'column5',
				title: 'Column 5',
				visible: true,
				type: 'enum',
				values: ['Blue', 'Yellow', 'White']
			}];
    }
}
