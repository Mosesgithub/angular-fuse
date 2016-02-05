/* beautify ignore:start */
import {Component, Input} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators, Control} from 'angular2/common';
import {DynamicFormControlComponent} from '../dynamic-form-control/dynamic-form-control.component';
import {DynamicField} from '../../interfaces/dynamic-field/dynamic-field.interface';
/* beautify ignore:end */

@Component({
    selector: 'dynamic-form',
    styles: [require('./dynamic-form.component.scss').toString()],
    template: require('./dynamic-form.component.html'),
    directives: [DynamicFormControlComponent]
})

export class DynamicFormComponent {
    @Input('form') formDefinition: Array<DynamicField>;
    @Input() data: Object;

    private form: ControlGroup;

    constructor(private builder: FormBuilder) {
        //
    }

    ngOnInit() {
        if (!this.data) {
            this.data = {};
        }
        let fieldControls = {};
        this.formDefinition.forEach(function(field) {
            fieldControls[field.name] = new Control(null, field.required ? Validators.required : null);
        });
        this.form = this.builder.group(fieldControls);
    }

    onSubmit() {
        console.log(this.data);
    }
}
