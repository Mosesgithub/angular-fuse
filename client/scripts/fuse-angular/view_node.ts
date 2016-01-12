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
        ////this.consoleLog('ViewNode.constructor', arguments);
        this.setAttributeValues(attrNameAndValues);
        if (this.parentNode) {
            this.parentNode.children.push(this);
        }
    }

    get parentNativeView(): View {
        //this.consoleLog('ViewNode.parentNativeView', arguments);
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
    //     //this.consoleLog('ViewNode.isComplexProperty', arguments);
    //     return ViewNode.isComplexProperty(this.viewName);
    // }

    public attachToView(atIndex: number = -1) {
        //this.consoleLog('ViewNode.attachToView ' + this.viewName, arguments);
        if (this.attachedToView) {
            //this.consoleLog('already attached.');
            return;
        }

        this.attachedToView = true;

        this.createUI(atIndex);
        this.attachUIEvents();

        this.children.forEach(child => {
            child.attachToView();
        });

        let parentId = this.getParentId();
        this.consoleLog('render ui ' + this.viewName + ' id:' + this.nativeView.id + ' parentId:' + (parentId || ''));
        if (typeof window.angularRenderer !== 'undefined') {
            //this.consoleLog('AngularRenderer is defined');
            let retVal = window.angularRenderer.renderElement(this.nativeView.id, parentId);
            this.consoleLog(retVal);
        }
    }

    public detachFromView(): void {
        this.attachedToView = false;
        //this.consoleLog('detachFromView', arguments);
        this.detachUIEvents();
        let parentId = this.getParentId();
        this.consoleLog('remove ui ' + this.viewName + ' id:' + this.nativeView.id + ' parentId:' + parentId);
        if (typeof window.angularRenderer !== 'undefined') {
            //this.consoleLog('AngularRenderer is defined');
            if (this.nativeView) {
                //this.consoleLog()
                window.angularRenderer.removeElement(this.nativeView.id, parentId);
            }
        }

        this.children.forEach((childNode) => {
            childNode.detachFromView();
        });
    }

    public setAttributeValues(attrNameAndValues: string[]) {
        //this.consoleLog('ViewNode.attrNameAndValues', arguments);
        if (attrNameAndValues) {
            for (let i = 0; i < attrNameAndValues.length; i += 2) {
                let name = attrNameAndValues[i];
                let value = attrNameAndValues[i + 1];
                this.setAttribute(name, value);
            }
        }
    }

    public setAttribute(attributeName: string, value: any): void {
        if (!this.nativeView) {
            //this.consoleLog('Native view not created. Delaying attribute set: ' + attributeName);
            this.attributes.set(attributeName, value);
            return;
        }

        if (typeof window.angularRenderer !== 'undefined') {
            this.consoleLog('Setting attribute: id:' + this.nativeView.id + ' att:' + attributeName + ' value:' + value);
            window.angularRenderer.setAttribute(this.nativeView.id, attributeName, value);
        }
    }

    public setStyleProperty(styleName: string, styleValue: string): void {
        throw new Error('Not implemented: setStyleProperty');
    }

    public on(eventName, callback) {
        //this.consoleLog('ViewNode.on: ' + this.viewName + ' -> ' + eventName);
        if (!this.nativeView) {
            this.eventListeners.set(eventName, callback);
        } else {
            this.attachNativeEvent(eventName, callback);
        }
    }

    public appendChild(childNode: ViewNode) {
        //this.consoleLog('ViewNode.appendChild', arguments);
        this.insertChildAt(this.children.length, childNode);
    }

    public insertChildAt(index: number, childNode: ViewNode): void {
        //this.consoleLog('ViewNode.insertChildAt: ' + this.viewName + ' ' + index + ' ' + childNode.viewName);
        if (childNode.parentNode) {
            //this.consoleLog('Moving child to new parent');
            childNode.parentNode.removeChild(childNode);
        }
        this.children.splice(index, 0, childNode);
        childNode.parentNode = this;
    }

    public removeChild(childNode: ViewNode): void {
        //this.consoleLog('ViewNode.removeChild', arguments);
        childNode.detachFromView();
        childNode.parentNode = null;
        childNode.parentView = null;
        this.children = this.children.filter((item) => item !== childNode);
    }

    public clearChildren() {
        //this.consoleLog('clearChildren', arguments);
        while (this.children.length > 0) {
            this.removeChild(this.children[0]);
        }
    }

    public getChildIndex(childNode: ViewNode) {
        //this.consoleLog('getChildIndex', arguments);
        return this.children.indexOf(childNode);
    }

    public setProperty(name: string, value: any) {
        //this.consoleLog('ViewNode.setProperty ' + this.viewName + ' setProperty ' + name + ' ' + value);
        if (this.nativeView) {
            this.setAttribute(name, value);
        } else {
            //this.consoleLog('setProperty called without a nativeView');
        }
    }

    public addClass(className: string): void {
        //this.consoleLog('ViewNode.addClass', arguments);
        this.cssClasses.set(className, true);
        this.syncClasses();
    }

    public removeClass(className: string): void {
        //this.consoleLog('ViewNode.removeClass', arguments);
        this.cssClasses.delete(className);
        this.syncClasses();
    }

    public setClasses(classesValue: string): void {
        //this.consoleLog('ViewNode.setClasses', arguments);
        let classes = classesValue.split(ViewNode.whiteSpaceSplitter);
        classes.forEach((className) => this.cssClasses.set(className, true));
        this.syncClasses();
    }

    private getParentId(): string {
        return this.parentNativeView ? this.parentNativeView.id : null;
    }

    private createUI(attachAtIndex: number): boolean {
        //this.consoleLog('ViewNode.createUI', this.viewName);
        let parentId = this.getParentId();
        let id = '';
        if (!this.nativeView) {
            if (typeof window.angularRenderer !== 'undefined') {
                //window.AngularRender
                //this.consoleLog('AngularRenderer is defined');
                id = window.angularRenderer.addElement(this.viewName, parentId);
            } else {
                //this.consoleLog('AngularRenderer cannot be found');
                id = '' + this.objectCount++;
            }
            this.nativeView = new View(this.viewName, id);
            this.consoleLog('create ui ' + this.viewName + ' id:' + id);
        } else {
            //this.consoleLog('Reattaching old view: ' + this.viewName);
        }

        this.configureUI();
        return true;
    }

    private configureUI() {
        //this.consoleLog('ViewNode.configureUI', arguments);
        if (this.attributes.size === 0) {
            return;
        }

        this.attributes.forEach((value, name) => {
            this.setAttribute(name, value);
        });
        this.syncClasses();
    }

    private attachUIEvents() {
        //this.consoleLog('ViewNode.attachUIEvents', arguments);
        if (!this.nativeView) {
            return;
        }

        //this.consoleLog('ViewNode.attachUIEvents: ' + this.viewName + ' ' + this.eventListeners.size);
        this.eventListeners.forEach((callback, eventName) => {
            this.attachNativeEvent(eventName, callback);
        });
    }

    private detachUIEvents() {
        //this.consoleLog('ViewNode.detachUIEvents', arguments);
        if (!this.nativeView) {
            return;
        }

        //this.consoleLog('ViewNode.detachUIEvents: ' + this.viewName + ' ' + this.eventListeners.size);
        this.eventListeners.forEach((callback, eventName) => {
            this.detachNativeEvent(eventName, callback);
        });
    }

    // private resolveNativeEvent(parsedEventName: string): string {
    //     //this.consoleLog('ViewNode.resolveNativeEvent', arguments);
    //     //TTODO: actually resolve the event...
    //     return parsedEventName;
    // }

    // private isGesture(eventName: string): boolean {
    //     //this.consoleLog('ViewNode.eventName', arguments);
    //     return false;
    //     //return gestures.fromString(name.toLowerCase()) !== undefined;
    // }

    private attachNativeEvent(eventName, callback) {
        if (typeof window.angularRenderer !== 'undefined') {
            this.consoleLog('attachNativeEvent ' + this.nativeView.id + ' ' + eventName);
            window.angularRenderer.setEventListener(this.nativeView.id, eventName, callback);
        }
        //let resolvedEvent = this.resolveNativeEvent(eventName);
        //this.nativeView.addEventListener(resolvedEvent, callback);
    }

    private detachNativeEvent(eventName, callback) {
        //this.consoleLog('detachNativeEvent ' + eventName);
        //let resolvedEvent = this.resolveNativeEvent(eventName);
        //this.nativeView.removeEventListener(resolvedEvent, callback);
    }

    private syncClasses(): void {
            //this.consoleLog('ViewNode.syncClasses', arguments);
            let classValue = (<any>Array).from(this.cssClasses.keys()).join(' ');
        if (this.nativeView && classValue) {
            //this.nativeView.cssClass = classValue;
        }
    }

    private consoleLog(...a: any[]) {
        if (false && a && a.length > 0 && a[0] && a[0].toString) {
            console.log(a[0].toString());
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
    public detachFromView(atIndex: number = -1) {
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
