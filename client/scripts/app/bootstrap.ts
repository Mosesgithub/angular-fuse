// import {bootstrap} from 'angular2/platform/browser';

// //import {enableProdMode} from 'angular2/core';
// //enableProdMode();

// bootstrap(AppComponent);
import './vendor';

//HACK: Unhack our global lazy loaded functions hack to make zone monkey patching work.
// var __dummy_setTimeout = global.setTimeout;
// var __dummy_clearTimeout = global.clearTimeout;
// var __dummy_setInterval = global.setInterval;
// var __dummy_clearInterval = global.clearInterval;
import '../common/services/zone';

import {isPresent, Type} from 'angular2/src/facade/lang';
import {Promise} from 'angular2/src/facade/async';
//import {Promise, PromiseWrapper} from 'angular2/src/facade/async';
import {platform, ComponentRef, PLATFORM_DIRECTIVES, PLATFORM_PIPES} from 'angular2/core';
import {provide, Provider} from 'angular2/src/core/di';
//import {bind, provide, Provider} from 'angular2/src/core/di';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';

import {Renderer} from 'angular2/src/core/render/api';
import {FuseRenderer} from '../common/services/renderer';
import {FuseDomAdapter} from '../common/services/dom_adapter';
import {XHR} from 'angular2/src/compiler/xhr';
import {FileSystemXHR} from '../common/services/xhr';
import {Parse5DomAdapter} from 'angular2/src/platform/server/parse5_adapter';
import {ExceptionHandler} from 'angular2/src/facade/exception_handler';
import {APPLICATION_COMMON_PROVIDERS} from 'angular2/src/core/application_common_providers';
import {COMPILER_PROVIDERS} from 'angular2/src/compiler/compiler';
import {PLATFORM_COMMON_PROVIDERS} from 'angular2/src/core/platform_common_providers';
import {COMMON_DIRECTIVES, COMMON_PIPES, FORM_PROVIDERS} from 'angular2/common';

//import {bootstrap} from 'angular2/bootstrap';

export type ProviderArray = Array<Type | Provider | any[]>;

export function fuseBootstrap(appComponentType: any, customProviders: ProviderArray = null): Promise<ComponentRef> {
  FuseDomAdapter.makeCurrent();

 
  let fuseProviders: ProviderArray = [
      FuseRenderer,
      provide(Renderer, {useClass: FuseRenderer}),
      provide(XHR, {useClass: FileSystemXHR}),
      provide(ExceptionHandler, {useFactory: () => new ExceptionHandler(DOM, true), deps: []}),

      provide(PLATFORM_PIPES, {useValue: COMMON_PIPES, multi: true}),
      provide(PLATFORM_DIRECTIVES, {useValue: COMMON_DIRECTIVES, multi: true}),

      APPLICATION_COMMON_PROVIDERS,
      COMPILER_PROVIDERS,
      PLATFORM_COMMON_PROVIDERS,
      FORM_PROVIDERS,
  ];

  let appProviders = [];
  if (isPresent(customProviders)) {
      appProviders.push(customProviders);
  }

  var app = platform(fuseProviders).application(appProviders);
  console.log('fusebootstrap');
  return app.bootstrap(appComponentType);
}

import {AppComponent} from './app.component';

  console.log('bootstrap is starting');
  fuseBootstrap(AppComponent).then(function() {
    console.log('bootstrap is done');
  });

