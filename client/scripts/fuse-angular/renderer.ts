/* beautify ignore:start */
import {Injectable} from 'angular2/src/core/di';
//import {createRenderView} from 'angular2/src/core/render/view_factory'; //NodeFactory
import {Renderer, RenderComponentType, RootRenderer} from 'angular2/src/core/render/api';
import {isBlank, isPresent} from 'angular2/src/facade/lang';
//import {DefaultProtoViewRef, DefaultRenderView, DefaultRenderFragmentRef} from 'angular2/src/core/render/view';
//import {DOM} from 'angular2/src/platform/dom/dom_adapter';
//import {ViewNode, DummyViewNode} from './view_node';
import {Element} from './element';
/* beautify ignore:end */

@Injectable()
export class FuseRootRenderer implements RootRenderer {
    private _registeredComponent: Map<string, FuseRenderer> = new Map<string, FuseRenderer>();

    renderComponent(componentProto: RenderComponentType): Renderer {
        let renderer = this._registeredComponent.get(componentProto.id);
        if (isBlank(renderer)) {
            renderer = new FuseRenderer(this, componentProto);
            this._registeredComponent.set(componentProto.id, renderer);
        }
        return renderer;
    }
}

@Injectable()
export class FuseRenderer implements Renderer {
    private objectCount: number = 1;

    constructor(private _rootRenderer: FuseRootRenderer, private componentProto: RenderComponentType) { }

    public renderComponent(componentType: RenderComponentType): Renderer {
        console.log('renderComponent', arguments);
        return this._rootRenderer.renderComponent(componentType);
    }

    public selectRootElement(selector: string): Element {
        console.log('selectRootElement', arguments);
        let id = '';
        if (window.fusejs) {
            id = window.fusejs.angularRenderer.createElement(selector, true);
            window.fusejs.angularRenderer.renderElement(id, null, null, null);
        } else {
            id = (this.objectCount++).toString();
        }
        return new Element(selector, id, null);
    }

    public createElement(parentElement: Element, type: string): Element {
        console.log('createElement', arguments);
        let id = '';
        if (window.fusejs) {
            id = window.fusejs.angularRenderer.createElement(type, false);
            if (isPresent(parentElement)) {
                let collection = parentElement.getAttribute('collection');
                window.fusejs.angularRenderer.renderElement(id, type, parentElement.id, collection);
            }
        } else {
            id = '' + this.objectCount++;
        }
        console.log('Element created : ' + type + ' ' + id);
        return new Element(type, id, parentElement);
    }

    public createViewRoot(hostElement: Element): Element {
        console.log('createViewRoot', arguments);
        return hostElement;
    }

    public createTemplateAnchor(parentElement: Element): Element {
        console.log('createTemplateAnchor', arguments);
        return new Element('#comment', null, parentElement);
    }

    public createText(parentElement: Element, value: string): any {
        // console.log('createText', arguments);
        return new Element(null, null, parentElement);
    }

    public projectNodes(parentElement: Element, nodes: Element[]) {
        console.log('projectNodes', arguments);
    }

    public attachViewAfter(anchorElement: Element, viewRootNodes: Element[]) {
        console.log('attachViewAfter', arguments);
        for (let i = 0; i < viewRootNodes.length; i++) {
            let node = viewRootNodes[i];
            node.parent = anchorElement.parent;
            let collection = node.getAttribute('collection'); //.parent
            console.log(collection);
            if (window.fusejs) {
                window.fusejs.angularRenderer.renderElement(node.id, node.type, node.parent.id, collection);
            }
        }
    }

    public detachView(viewRootNodes: Element[]) {
        console.log('detachView', arguments);

        console.log(viewRootNodes[0]);
        for (let i = 0; i < viewRootNodes.length; i++) {
            let node = viewRootNodes[i];
            let collection = node.getAttribute('collection');
            if (window.fusejs && node.id) {
                window.fusejs.angularRenderer.removeElement(node.id, node.type, node.parent ? node.parent.id : null, collection);
            }
        }
    }

    public destroyView(hostElement: Element, viewAllNodes: Element[]) {
        console.log('destroyView', arguments);
        for (let i = 0; i < viewAllNodes.length; i++) {
            let node = viewAllNodes[i];
            let collection = node.getAttribute('collection');

            if (window.fusejs && node.id) {
                window.fusejs.angularRenderer.removeAllListeners(node.id);
                window.fusejs.angularRenderer.removeElement(node.id, node.type, node.parent ? node.parent.id : null, collection);
            }
        }
    }

    public listen(renderElement: Element, name: string, callback: Function) {
        console.log('listen', arguments);
        let zonedCallback = global['zone'].bind(callback);
        if (window.fusejs) {
            window.fusejs.angularRenderer.setEventListener(renderElement.id, name, zonedCallback);
        }
    }

    public listenGlobal(target: string, name: string, callback: Function): Function {
        console.log('listenGlobal', arguments);
        return null;
    }

    public setElementProperty(renderElement: Element, propertyName: string, propertyValue: any) {
        console.log('setElementProperty', arguments);
        renderElement.setAttribute(propertyName, propertyValue);
        if (window.fusejs) {
            window.fusejs.angularRenderer.setAttribute(renderElement.id, propertyName, propertyValue);
        }
    }

    public setElementAttribute(renderElement: Element, attributeName: string, attributeValue: string) {
        console.log('setElementAttribute', arguments);
        renderElement.setAttribute(attributeName, attributeValue);
    }

    /**
     * Used only in debug mode to serialize property changes to comment nodes,
     * such as <template> placeholders.
     */
    public setBindingDebugInfo(renderElement: Element, propertyName: string, propertyValue: string) {
        console.log('setBindingDebugInfo', arguments);
    }

    public setElementClass(renderElement: Element, className: string, isAdd: boolean) {
        console.log('setElementClass', arguments);
    }

    public setElementStyle(renderElement: Element, styleName: string, styleValue: string) {
        console.log('setElementStyle', arguments);
    }

    public invokeElementMethod(renderElement: Element, methodName: string, args: any[]) {
        console.log('invokeElementMethod', arguments);
    }

    public setText(renderNode: Element, text: string) {
        console.log('setText', arguments);
    }
}
