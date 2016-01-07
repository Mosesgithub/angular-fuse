/* beautify ignore:start */
import {View} from './view';
//import {ViewClass, getViewClass, isKnownView} from './element-registry';
/* beautify ignore:end */

class EventData {}

type EventHandler = (args: EventData) => void;

export class ViewNode {
    private static whiteSpaceSplitter = /\s+/;
    //private static propertyMaps: Map < Function, Map < string, string >> = new Map < Function, Map < string, string >> ();

    public nativeView: View;
    public children: Array < ViewNode > = [];

    private eventListeners: Map < string, EventHandler > = new Map < string, EventHandler > ();

    private parentView: View;
    private attachedToView: boolean = false;
    private attributes: Map < string, any > = new Map < string, any > ();
    private cssClasses: Map < string, boolean > = new Map < string, boolean > ();
    private objectCount: number = 1;

    constructor(public parentNode: ViewNode, public viewName: string, attrNameAndValues: string[]) {
        ////console.log('ViewNode.constructor', arguments);
        this.setAttributeValues(attrNameAndValues);

        if (this.parentNode) {
            this.parentNode.children.push(this);
        }
    }

    // print(depth: number = 0) {
    //     let line = "";

    //     for (let i = 0; i < depth; i++)
    //         line += "    "

    //     //console.log(line + this.viewName + '(' + this.attachedToView + ') ');

    //     this.children.forEach(child => {
    //         child.print(depth + 1);
    //     });
    // }

    get parentNativeView(): View {
        //console.log('ViewNode.parentNativeView', arguments);
        if (this.parentView) {
            return this.parentView;
        }

        if (this.parentNode) {
            if (this.parentNode.viewName !== 'template' && this.parentNode.nativeView) {
                this.parentView = this.parentNode.nativeView;
            } else {
                this.parentView = this.parentNode.parentNativeView;
            }
        }
        // if (!this.parentView) {
        //     this.parentView = topmost().currentPage;
        // }
        return this.parentView;
    }

    // get isComplexProperty(): boolean {
    //     //console.log('ViewNode.isComplexProperty', arguments);
    //     return ViewNode.isComplexProperty(this.viewName);
    // }

    public attachToView(atIndex: number = -1) {
        //console.log('ViewNode.attachToView ' + this.viewName, arguments);
        if (this.attachedToView) {
            //console.log('already attached.');
            return;
        }

        this.attachedToView = true;

        this.createUI(atIndex);
        this.attachUIEvents();

        this.children.forEach(child => {
            child.attachToView();
        });

        this.postAttachUI();
    }

    public setAttributeValues(attrNameAndValues: string[]) {
        //console.log('ViewNode.attrNameAndValues', arguments);
        if (attrNameAndValues) {
            for (let i = 0; i < attrNameAndValues.length; i += 2) {
                let name = attrNameAndValues[i];
                let value = attrNameAndValues[i + 1];
                this.setAttribute(name, value);
            }
        }
    }

    public setAttribute(attributeName: string, value: any): void {
        //console.log('ViewNode.setAttribute', arguments);
        if (!this.nativeView) {
            //console.log('Native view not created. Delaying attribute set: ' + attributeName);
            this.attributes.set(attributeName, value);
            return;
        }

        if (typeof window.AngularRenderer !== 'undefined') {
            console.log('Setting attribute: id:' + this.nativeView.id + ' att:' + attributeName + ' value:' + value);
            window.AngularRenderer.setAttribute(this.nativeView.id, attributeName, value);
        }
    }

    public setStyleProperty(styleName: string, styleValue: string): void {
        throw new Error('Not implemented: setStyleProperty');
    }

    public on(eventName, callback) {
        //console.log('ViewNode.on: ' + this.viewName + ' -> ' + eventName);
        if (!this.nativeView) {
            this.eventListeners.set(eventName, callback);
        } else {
            this.attachNativeEvent(eventName, callback);
        }
    }

    public appendChild(childNode: ViewNode) {
        //console.log('ViewNode.appendChild', arguments);
        this.insertChildAt(this.children.length, childNode);
    }

    public insertChildAt(index: number, childNode: ViewNode): void {
        //console.log('ViewNode.insertChildAt: ' + this.viewName + ' ' + index + ' ' + childNode.viewName);
        if (childNode.parentNode) {
            //console.log('Moving child to new parent');
            childNode.parentNode.removeChild(childNode);
        }
        this.children.splice(index, 0, childNode);
        childNode.parentNode = this;
    }

    public removeChild(childNode: ViewNode): void {
        //console.log('ViewNode.removeChild', arguments);
        childNode.parentNode = null;
        childNode.parentView = null;
        this.children = this.children.filter((item) => item !== childNode);

        childNode.detachFromView();
    }

    public detachFromView(): void {
        this.attachedToView = false;
        //console.log('detachFromView', arguments);
        this.detachUIEvents();
        // if (this.nativeView) {
        //     let nativeParent = this.nativeView.parent;
        //     if (nativeParent) {
        //         if (nativeParent instanceof LayoutBase) {
        //             (<LayoutBase>nativeParent).removeChild(this.nativeView);
        //         } else if (nativeParent instanceof ContentView) {
        //             (<ContentView>nativeParent).content = undefined;
        //         }
        //         else {
        //             nativeParent._removeView(this.nativeView);
        //         }
        //     }
        // }

        this.children.forEach((childNode) => {
            childNode.detachFromView();
        });
    }

    public clearChildren() {
        //console.log('clearChildren', arguments);
        while (this.children.length > 0) {
            this.removeChild(this.children[0]);
        }
    }

    public getChildIndex(childNode: ViewNode) {
        //console.log('getChildIndex', arguments);
        return this.children.indexOf(childNode);
    }

    public setProperty(name: string, value: any) {
        //console.log('ViewNode.setProperty ' + this.viewName + ' setProperty ' + name + ' ' + value);
        if (this.nativeView) {
            this.setAttribute(name, value);
        } else {
            //console.log('setProperty called without a nativeView');
        }
    }

    public addClass(className: string): void {
        //console.log('ViewNode.addClass', arguments);
        this.cssClasses.set(className, true);
        this.syncClasses();
    }

    public removeClass(className: string): void {
        //console.log('ViewNode.removeClass', arguments);
        this.cssClasses.delete(className);
        this.syncClasses();
    }

    public setClasses(classesValue: string): void {
        //console.log('ViewNode.setClasses', arguments);
        let classes = classesValue.split(ViewNode.whiteSpaceSplitter);
        classes.forEach((className) => this.cssClasses.set(className, true));
        this.syncClasses();
    }

    private createUI(attachAtIndex: number): boolean {
        //console.log('ViewNode.createUI', this.viewName);
        let parentId = this.parentNativeView ? this.parentNativeView.id : null;
        let id = '';
        if (!this.nativeView) {
            if (typeof window.AngularRenderer !== 'undefined') {
                //console.log('AngularRenderer is defined');
                id = window.AngularRenderer.addElement(this.viewName, parentId);
            } else {
                id = '' + this.objectCount++;
            }
            this.nativeView = new View(this.viewName, id);
            console.log('create ui ' + this.viewName + ' id:' + id);
        } else {
            //console.log('Reattaching old view: ' + this.viewName);
        }

        this.configureUI();
        return true;
    }

    private configureUI() {
        //console.log('ViewNode.configureUI', arguments);
        if (this.attributes.size === 0) {
            return;
        }

        this.attributes.forEach((value, name) => {
            this.setAttribute(name, value);
        });
        this.syncClasses();
    }

    private postAttachUI() {
        let parentId = this.parentNativeView ? this.parentNativeView.id : null;

        console.log('render ui ' + this.viewName + ' id:' + this.nativeView.id + ' parentId:' + parentId);
        if (typeof window.AngularRenderer !== 'undefined') {
            //console.log('AngularRenderer is defined');
            let retVal = window.AngularRenderer.renderElement(this.nativeView.id, parentId);
            console.log(retVal);
        }

        //console.log('ViewNode.postAttachUI', arguments);
        //     if (this.isComplexProperty) {
        //         let nativeParent = <any>this.parentNativeView;
        //         if (!nativeParent) {
        //             return;
        //         }

        //         let propertyName = ViewNode.getComplexPropertyName(this.viewName);
        //         let realChildren = [];
        //         for (let child of this.children) {
        //             if (child.nativeView) {
        //                 realChildren.push(child.nativeView);
        //             }
        //         }
        //         if (realChildren.length > 0) {
        //             if (nativeParent._addArrayFromBuilder) {
        //                 nativeParent._addArrayFromBuilder(propertyName, realChildren);
        //             }
        //             else {
        //                 this.parentNode.setAttribute(propertyName, realChildren[0]);
        //             }
        //         }
        //     }
    }

    // private static getProperties(instance: any): Map < string, string > {
    //     //console.log('ViewNode.getProperties', arguments);
    //     let type = instance && instance.constructor;
    //     if (!type) {
    //         return new Map < string, string > ();
    //     }

    //     if (!ViewNode.propertyMaps.has(type)) {
    //         let propMap = new Map < string,
    //             string > ();
    //         for (let propName in instance) {
    //             propMap.set(propName.toLowerCase(), propName);
    //         }
    //         ViewNode.propertyMaps.set(type, propMap);
    //     }
    //     return ViewNode.propertyMaps.get(type);
    // }

    // private static isComplexProperty(name: string): boolean {
    //     //console.log('ViewNode.isComplexProperty', arguments);
    //     return name.indexOf(".") !== -1; //isString(name) && 
    // }

    // private static getComplexPropertyName(fullName: string): string {
    //     //console.log('ViewNode.getComplexPropertyName', arguments);
    //     let name: string;

    //     //if (isString(fullName)) {
    //     let names = fullName.split(".");
    //     name = names[names.length - 1];
    //     //}

    //     return name;
    // }

    // private isXMLAttribute(name: string): boolean {
    //     //console.log('ViewNode.isXMLAttribute', arguments);
    //     switch (name) {
    //         case "style": return true;
    //         case "rows": return true;
    //         case "columns": return true;
    //         case "fontAttributes": return true;
    //         default: return false;
    //     }
    // }

    private attachUIEvents() {
        //console.log('ViewNode.attachUIEvents', arguments);
        if (!this.nativeView) {
            return;
        }

        //console.log('ViewNode.attachUIEvents: ' + this.viewName + ' ' + this.eventListeners.size);
        this.eventListeners.forEach((callback, eventName) => {
            this.attachNativeEvent(eventName, callback);
        });
    }

    private detachUIEvents() {
        //console.log('ViewNode.detachUIEvents', arguments);
        if (!this.nativeView) {
            return;
        }

        //console.log('ViewNode.detachUIEvents: ' + this.viewName + ' ' + this.eventListeners.size);
        this.eventListeners.forEach((callback, eventName) => {
            this.detachNativeEvent(eventName, callback);
        });
    }

    // private resolveNativeEvent(parsedEventName: string): string {
    //     //console.log('ViewNode.resolveNativeEvent', arguments);
    //     //TTODO: actually resolve the event...
    //     return parsedEventName;
    // }

    // private isGesture(eventName: string): boolean {
    //     //console.log('ViewNode.eventName', arguments);
    //     return false;
    //     //return gestures.fromString(name.toLowerCase()) !== undefined;
    // }

    private attachNativeEvent(eventName, callback) {
        if (typeof window.AngularRenderer !== 'undefined') {
            console.log('attachNativeEvent ' + this.nativeView.id + ' ' + eventName);
            window.AngularRenderer.setEventListener(this.nativeView.id, eventName, callback);
        }
        //let resolvedEvent = this.resolveNativeEvent(eventName);
        //this.nativeView.addEventListener(resolvedEvent, callback);
    }

    private detachNativeEvent(eventName, callback) {
        //console.log('detachNativeEvent ' + eventName);
        //let resolvedEvent = this.resolveNativeEvent(eventName);
        //this.nativeView.removeEventListener(resolvedEvent, callback);
    }

    private syncClasses(): void {
            //console.log('ViewNode.syncClasses', arguments);
            let classValue = (<any>Array).from(this.cssClasses.keys()).join(' ');
        if (this.nativeView && classValue) {
            //this.nativeView.cssClass = classValue;
        }
    }
}

export class DummyViewNode extends ViewNode {
    constructor(public parentNode: ViewNode) {
        super(parentNode, null, []);
    }
    public attachToView(atIndex: number = -1) {
        return;
    }
    public insertChildAt(index: number, childNode: ViewNode) {
        return;
    }
    public removeChild(childNode: ViewNode) {
        return;
    }
    setProperty(name: string, value: any) {
        return;
    }
}
