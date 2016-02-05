/* beautify ignore:start */
import {
	it,
	//inject,
	injectAsync,
	beforeEachProviders,
	TestComponentBuilder
} from 'angular2/testing';
import {DynamicFormControlComponent} from './dynamic-form-control.component.ts';
/* beautify ignore:end */

describe('Component: DynamicFormControlComponent', () => {

    beforeEachProviders(() => []);

    it('should be defined', injectAsync([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(DynamicFormControlComponent)
            .then((fixture) => {
                fixture.detectChanges();
                let compiled = fixture.debugElement.nativeElement;
                expect(compiled).toBeDefined();
            });
    }));

});