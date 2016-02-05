/* beautify ignore:start */
import {Component, Input} from 'angular2/core';
import {DynamicField} from '../../interfaces/dynamic-field/dynamic-field.interface';
import {FORM_DIRECTIVES, ControlGroup} from 'angular2/common';
/* beautify ignore:end */

@Component({
    selector: 'dynamic-form-control',
    styles: [require('./dynamic-form-control.component.scss').toString()],
    template: require('./dynamic-form-control.component.html'),
    directives: [FORM_DIRECTIVES]
})

export class DynamicFormControlComponent {
    @Input() form: ControlGroup;
    @Input() field: DynamicField;
    @Input() data: any;

    private htmlElementType: string;

    ngOnInit() {
        this.htmlElementType = this.computeHtmlElementType();
    }

    computeHtmlElementType(): string {
        if (this.field.type === 'boolean') {
            return 'checkbox';
        } else if (this.field.type === 'enum') {
            return 'option';
        } else if (this.field.type === 'text' || this.field.type === 'email' || this.field.type === 'number') {
            return 'input';
        } else {
            return 'unknown';
        }
    }

    computeInputSubType() {
        if (this.field.type === 'text') {
            return 'text';
        } else if (this.field.type === 'email') {
            return 'email';
        } else if (this.field.type === 'number') {
            return 'number';
        } else {
            return 'text';
        }
    }

    evalInContext(js: string, context) {
        with (context) {
            try {
                return eval(js);
            } catch (e) {
                return false;
            }
        }
    }

    get isVisible() {
        if (this.field.visible === false) {
            return false;
        } else if (this.field.condition) {
            return this.evalInContext(this.field.condition, this.data);
        }
        return true;
    }
}
