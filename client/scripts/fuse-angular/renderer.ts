/* beautify ignore:start */
//import {Inject, Injectable} from 'angular2/src/core/di';
import {RenderComponentTemplate} from 'angular2/src/core/render/api';
import {createRenderView} from 'angular2/src/core/render/view_factory'; //NodeFactory
import {Renderer, RenderEventDispatcher, RenderElementRef, RenderProtoViewRef, RenderViewRef, RenderFragmentRef, RenderViewWithFragments, RenderTemplateCmd} from 'angular2/src/core/render/api';
//import {isBlank} from 'angular2/src/facade/lang';
import {DefaultProtoViewRef, DefaultRenderView, DefaultRenderFragmentRef} from 'angular2/src/core/render/view';
//import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {ViewNode, DummyViewNode} from './view_node';
/* beautify ignore:end */

//@Injectable()
export class FuseRenderer extends Renderer {

    private componentTemplates: Map<string, RenderComponentTemplate> = new Map<string, RenderComponentTemplate>();

    constructor() {
        super();
        consoleLog('FuseRenderer created');
    }

    public createProtoView(componentTemplateId: string, cmds: RenderTemplateCmd[]): RenderProtoViewRef {
        consoleLog('FuseRenderer.createProtoView: ', arguments);
        return new DefaultProtoViewRef(this.componentTemplates.get(componentTemplateId), cmds);
    }

    public createRootHostView(hostProtoViewRef: RenderProtoViewRef, fragmentCount: number, hostElementSelector: string): RenderViewWithFragments {
        consoleLog('FuseRenderer.createRootHostView', arguments);
        let rootViewWithFragments = this._createView(hostProtoViewRef, null);
        let rootView = resolveInternalDomView(rootViewWithFragments.viewRef);
        let rootNode = rootView.boundElements[0];
        rootNode.attachToView();
        return rootViewWithFragments;
    }

    public createView(protoViewRef: RenderProtoViewRef, fragmentCount: number): RenderViewWithFragments {
        consoleLog('FuseRenderer.createView', arguments);
        return this._createView(protoViewRef, null);
    }

    public destroyView(viewRef: RenderViewRef) {
        consoleLog('FuseRenderer.destroyView', arguments);
        // Seems to be called on component dispose only (router outlet)
        //TTODO: handle this when we resolve routing and navigation.
    }

    public getRootNodes(fragment: RenderFragmentRef): ViewNode[] {
        consoleLog('FuseRenderer.getRootNodes', arguments);
        return resolveInternalDomFragment(fragment);
    }

    public attachFragmentAfterFragment(previousFragmentRef: RenderFragmentRef, fragmentRef: RenderFragmentRef) {
        consoleLog('FuseRenderer.attachFragmentAfterFragment', arguments);
        let previousFragmentNodes = resolveInternalDomFragment(previousFragmentRef);
        if (previousFragmentNodes.length > 0) {
            let sibling = previousFragmentNodes[previousFragmentNodes.length - 1];
            let nodes = resolveInternalDomFragment(fragmentRef);
            this.attachFragmentAfter(sibling, nodes);
        }
    }

    public attachFragmentAfterElement(location: RenderElementRef, fragmentRef: RenderFragmentRef) {
        consoleLog('FuseRenderer.attachFragmentAfterElement', arguments);
        let element = resolveBoundNode(location);
        let nodes = resolveInternalDomFragment(fragmentRef);
        this.attachFragmentAfter(element, nodes);
    }

    public registerComponentTemplate(template: RenderComponentTemplate) {
        consoleLog('FuseRenderer.registerComponentTemplate: ' + template.id);
        this.componentTemplates.set(template.id, template);
    }

    public resolveComponentTemplate(templateId: string): RenderComponentTemplate {
        consoleLog('FuseRenderer.resolveComponentTemplate: ' + templateId, arguments);
        return this.componentTemplates.get(templateId);
    }

    public createRootContentInsertionPoint(): ViewNode {
        consoleLog('FuseRenderer.createRootContentInsertionPoint', arguments);
        return this.createTemplateAnchor([]);
    }

    public createTemplateAnchor(attrNameAndValues: string[]): ViewNode {
        consoleLog('FuseRenderer.createTemplateAnchor', arguments);
        return new ViewNode(null, 'template', attrNameAndValues);
    }

    public createElement(name: string, attrNameAndValues: string[]): ViewNode {
        consoleLog('FuseRenderer.createElement: ' + name, arguments);
        return new ViewNode(null, name, attrNameAndValues);
    }

    public mergeElement(existing: ViewNode, attrNameAndValues: string[]) {
        consoleLog('FuseRenderer.mergeElement: ' + existing.viewName, arguments);
        existing.clearChildren();
        existing.setAttributeValues(attrNameAndValues);
    }

    public createShadowRoot(host: ViewNode, templateId: string): ViewNode {
        throw new Error('FuseRenderer.createShadowRoot Not implemented.');
    }

    public createText(value: string): ViewNode {
        //consoleLog('FuseRenderer.createText', arguments);
        return new DummyViewNode(null);
    }

    public appendChild(parent: ViewNode, child: ViewNode) {
        consoleLog('FuseRenderer.appendChild: ' + parent.viewName + ' -> ' + child.viewName, arguments);
        parent.appendChild(child);
    }

    public on(element: ViewNode, eventName: string, callback: Function) {
        consoleLog('FuseRenderer.on: ' + element.viewName + '.' + eventName);
        let zonedCallback = global['zone'].bind(callback);
        element.on(eventName, zonedCallback);
    }

    public globalOn(target: string, eventName: string, callback: Function): Function {
        throw new Error('FuseRenderer.globalOn: ' + eventName + 'Not implemented.');
    }

    detachFragment(fragmentRef: RenderFragmentRef) {
        consoleLog('FuseRenderer.detachFragment', arguments);
        let fragmentNodes = resolveInternalDomFragment(fragmentRef);
        fragmentNodes.forEach((node) => {
            consoleLog('detaching fragment child: ' + node.viewName);
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
        });
    }

    hydrateView(viewRef: RenderViewRef) {
        consoleLog('FuseRenderer.hydrateView', arguments);
        //DOING nothing -- the view init code happens on attach: ViewNode#createUI
    }

    dehydrateView(viewRef: RenderViewRef) {
        consoleLog('FuseRenderer.dehydrateView', arguments);
        //TTODO: detach events
    }

    setElementProperty(location: RenderElementRef, propertyName: string, propertyValue: any) {
        consoleLog('FuseRenderer.setElementProperty ' + propertyName + ' = ' + propertyValue, arguments);
        let node = resolveBoundNode(location);
        node.setProperty(propertyName, propertyValue);
    }

    setElementAttribute(location: RenderElementRef, attributeName: string, attributeValue: string) {
        consoleLog('FuseRenderer.setElementAttribute ' + attributeName + ' = ' + attributeValue, arguments);
        return this.setElementProperty(location, attributeName, attributeValue);
    }

    setElementClass(location: RenderElementRef, className: string, isAdd: boolean): void {
        consoleLog('FuseRenderer.setElementClass ' + className + ' - ' + isAdd, arguments);
        let node = resolveBoundNode(location);
        if (isAdd) {
            node.addClass(className);
        } else {
            node.removeClass(className);
        }
    }

    setElementStyle(location: RenderElementRef, styleName: string, styleValue: string): void {
        consoleLog('FuseRenderer.setElementStyle ' + styleName + '=' + styleValue, arguments);
        let node = resolveBoundNode(location);
        node.setStyleProperty(styleName, styleValue);
    }

    setBindingDebugInfo(location: RenderElementRef, propertyName: string, propertyValue: string): void {
        //let node = resolveBoundNode(location);
        consoleLog('FuseRenderer.setBindingDebugInfo');
    }

    getNativeElementSync(location: RenderElementRef): any {
        consoleLog('FuseRenderer.getNativeElementSync', arguments);
        // let node = resolveBoundNode(location);
        // return node.nativeView;
        return null;
    }

    invokeElementMethod(location: RenderElementRef, methodName: string, args: Array<any>) {
        consoleLog('FuseRenderer.invokeElementMethod ' + methodName + ' ' + args, arguments);
    }

    setText(viewRef: RenderViewRef, textNodeIndex: number, text: string) {
        consoleLog('FuseRenderer.setText ', arguments);
    }

    setEventDispatcher(viewRef: RenderViewRef, dispatcher: RenderEventDispatcher) {
        consoleLog('FuseRenderer.setEventDispatcher ', arguments);
        let view = resolveInternalDomView(viewRef);
        view.eventDispatcher = dispatcher;
    }

    private _createView(protoViewRef: RenderProtoViewRef, inplaceElement: HTMLElement): RenderViewWithFragments {
        consoleLog('FuseRenderer._createView', arguments);
        let dpvr = <DefaultProtoViewRef>protoViewRef;
        let view = createRenderView(dpvr.template, dpvr.cmds, inplaceElement, this);
        return new RenderViewWithFragments(view, view.fragments);
    }

    private attachFragmentAfter(anchorNode: ViewNode, fragmentNodes: ViewNode[]) {
        consoleLog('FuseRenderer.attachFragmentAfter', arguments);
        let startIndex = anchorNode.parentNode.getChildIndex(anchorNode) + 1;
        fragmentNodes.forEach((node, index) => {
            consoleLog('attachFragmentAfterElement: child: ' + node.viewName + ' after: ' + anchorNode.viewName + ' startIndex: ' + startIndex + ' index: ' + index);
            anchorNode.parentNode.insertChildAt(startIndex + index, node);
            node.attachToView(startIndex + index);
            if (anchorNode.viewName === 'router-outlet' && window.angularRenderer) {
                window.angularRenderer.navigateTo(node.viewName, node.nativeView.id);
            }
        });
    }
}

function consoleLog(...a: any[]) {
    if (false) {
        console.log(a[0].toString());
    }
}

function resolveInternalDomView(viewRef: RenderViewRef): DefaultRenderView<ViewNode> {
    consoleLog('resolveInternalDomView', arguments);
    return <DefaultRenderView<ViewNode>>viewRef;
}

function resolveBoundNode(elementRef: RenderElementRef): ViewNode {
    consoleLog('resolveBoundNode', arguments);
    let view = resolveInternalDomView(elementRef.renderView);
    //Using an Angular internal API to get the index of the bound element.
    let internalBoundIndex = (<any>elementRef).boundElementIndex;
    return view.boundElements[internalBoundIndex];
}

function resolveInternalDomFragment(fragmentRef: RenderFragmentRef): ViewNode[] {
    consoleLog('resolveInternalDomFragment', arguments);
    return (<DefaultRenderFragmentRef<ViewNode>>fragmentRef).nodes;
}
