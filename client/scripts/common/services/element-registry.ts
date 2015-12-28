import {View} from './view';

// interface Map<K, V> {
//     keys(): Array<K>;
//     values(): Array<V>;
// }

export interface ViewClass {
     new (): View
}

export type ViewResolver = () => ViewClass;

var elementMap: Map<string, ViewResolver> = new Map<string, ViewResolver>();

export function registerElement(elementName: string, resolver: ViewResolver): void {
     console.log('elementegistry.registerElement', arguments);
     if (elementMap.has(elementName)) {
          throw new Error(`Element for ${elementName} already registered.`);
     } else {
          elementMap.set(elementName, resolver);
          elementMap.set(elementName.toLowerCase(), resolver);
     }
}

export function getViewClass(elementName: string): ViewClass {
     console.log('elementegistry.getViewClass', arguments);
     const resolver = elementMap.get(elementName) ||
          elementMap.get(elementName.toLowerCase());
     if (!resolver) {
          throw new TypeError(`No known component for element ${elementName}.`);
     }
     try {
          return resolver();
     } catch (e) {
          throw new TypeError(`Could not load view for: ${elementName}.${e}`);
     }
     console.log('getViewClass', arguments);
     return null;
}

export function isKnownView(elementName: string): boolean {
     console.log('isKnownView', arguments);
     return elementMap.has(elementName) || elementMap.has(elementName.toLowerCase());
}

//registerElement("Rectangle", () => null);
