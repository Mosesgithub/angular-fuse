/* beautify ignore:start */
import {
    it,
    inject,
    //injectAsync,
    beforeEachProviders
    //TestComponentBuilder
} from 'angular2/testing';
import {FormGenerator} from './form-generator.service.ts';
/* beautify ignore:end */

describe('Service: FormGenerator', () => {

    beforeEachProviders(() => [FormGenerator]);

    it('should be defined', inject([FormGenerator], (service: FormGenerator) => {
        expect(service).toBeDefined();
    }));

});