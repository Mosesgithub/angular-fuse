/* beautify ignore:start */
import {Component, Input} from 'angular2/core';
import {Requestor} from '../../../yoobic/services/requestor';
import {FormGenerator} from '../../../yoobic/services/form-generator/form-generator.service';
/* beautify ignore:end */

@Component({
    selector: 'dynamic-filter',
    styles: [require('./dynamic-filter.component.scss').toString()],
    template: require('./dynamic-filter.component.html'),
    providers: [FormGenerator, Requestor]
})

export class DynamicFilterComponent {
    @Input() collectionName: string;

    private schema: any;

    constructor(private formGenerator: FormGenerator) {

    }

    ngOnInit() {
        this.formGenerator.getSchema(this.collectionName).then(function(data) {
            this.schema = data;
        });
    }

}
