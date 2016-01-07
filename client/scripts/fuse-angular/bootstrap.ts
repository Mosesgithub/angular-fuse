import './zone';

import {isPresent, Type} from 'angular2/src/facade/lang';
import {Promise} from 'angular2/src/facade/async';
//import {Promise, PromiseWrapper} from 'angular2/src/facade/async';
import {platform, ComponentRef, PLATFORM_DIRECTIVES, PLATFORM_PIPES} from 'angular2/core';
import {provide, Provider} from 'angular2/src/core/di';
//import {bind, provide, Provider} from 'angular2/src/core/di';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';

import {Renderer} from 'angular2/src/core/render/api';
import {FuseRenderer} from './renderer';
import {FuseDomAdapter} from './dom_adapter';
import {XHR} from 'angular2/src/compiler/xhr';
import {FileSystemXHR} from './xhr';
//import {Parse5DomAdapter} from 'angular2/src/platform/server/parse5_adapter';
import {ExceptionHandler} from 'angular2/src/facade/exception_handler';
import {APPLICATION_COMMON_PROVIDERS} from 'angular2/src/core/application_common_providers';
import {COMPILER_PROVIDERS} from 'angular2/src/compiler/compiler';
import {PLATFORM_COMMON_PROVIDERS} from 'angular2/src/core/platform_common_providers';
import {COMMON_DIRECTIVES, COMMON_PIPES, FORM_PROVIDERS} from 'angular2/common';
/* beautify ignore:end */

export type ProviderArray = Array < Type | Provider | any[] > ;

export function fuseBootstrap(appComponentType: any, customProviders: ProviderArray = null): Promise < ComponentRef > {
    FuseDomAdapter.makeCurrent();

    let fuseProviders: ProviderArray = [
        FuseRenderer,
        provide(Renderer, {
            useClass: FuseRenderer
        }),
        provide(XHR, {
            useClass: FileSystemXHR
        }),
        provide(ExceptionHandler, {
            useFactory: () => new ExceptionHandler(DOM, true),
            deps: []
        }),

        provide(PLATFORM_PIPES, {
            useValue: COMMON_PIPES,
            multi: true
        }),
        provide(PLATFORM_DIRECTIVES, {
            useValue: COMMON_DIRECTIVES,
            multi: true
        }),

        APPLICATION_COMMON_PROVIDERS,
        COMPILER_PROVIDERS,
        PLATFORM_COMMON_PROVIDERS,
        FORM_PROVIDERS,
    ];

    let appProviders = [];
    if (isPresent(customProviders)) {
        appProviders.push(customProviders);
    }

    let app = platform(fuseProviders).application(appProviders);
    console.log('starting bootstrap');
    return app.bootstrap(appComponentType);
}
