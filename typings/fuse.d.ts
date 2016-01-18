interface AngularRenderer {
    addElement(type: string, parentId: string): string;
    setAttribute(id: string, attribute: string, value: any): void;
    renderElement(id: string, parentId: string, collection: string): void;
    removeElement(id: string, parentId: string): void;
    setEventListener(id: string, eventName: string, callback: () => any): void;
    removeEventListener(id: string, eventName: string, callback: () => any): void;
    navigateTo(page: string, id: string): void;
}

interface Window {
    angularRenderer: AngularRenderer;
    applicationRef: any;
    rootComponent: any;
    bootstraper: any;
    Zone: any;
    zone: any;
    JSON: any;
    RegExp: any;
    Map: any;
    Set: any;
    Reflect: any;
    Promise: any;
    Math: any;
    EventTarget: any;
    isFuse: boolean;
    requireCache: any;
}
