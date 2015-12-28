import {Inject, Injectable} from 'angular2/src/core/di';
import {RenderComponentTemplate} from 'angular2/src/core/render/api';
import {createRenderView, NodeFactory} from 'angular2/src/core/render/view_factory';
import {
Renderer,
RenderEventDispatcher,
RenderElementRef,
RenderProtoViewRef,
RenderViewRef,
RenderFragmentRef,
RenderViewWithFragments,
RenderTemplateCmd
} from 'angular2/src/core/render/api';
import {isBlank} from 'angular2/src/facade/lang';
import {
DefaultProtoViewRef,
DefaultRenderView,
DefaultRenderFragmentRef
} from 'angular2/src/core/render/view';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {ViewNode, DummyViewNode} from './view_node';

//var console = {log: function(msg) {}}



@Injectable()
export class FuseRenderer extends Renderer {
    constructor() {
        super();
        console.log('FuseRenderer created');
    }

    public createProtoView(componentTemplateId: string, cmds: RenderTemplateCmd[]): RenderProtoViewRef {
        console.log('FuseRenderer.createProtoView: ', arguments);
        return new DefaultProtoViewRef(this._componentTemplates.get(componentTemplateId), cmds);
    }

    public createRootHostView(hostProtoViewRef: RenderProtoViewRef, fragmentCount: number, hostElementSelector: string): RenderViewWithFragments {
        console.log("FuseRenderer.createRootHostView", arguments);
        let rootViewWithFragments = this._createView(hostProtoViewRef, null);
        let rootView = resolveInternalDomView(rootViewWithFragments.viewRef);
        let rootNode = rootView.boundElements[0];
        rootNode.attachToView();
        return rootViewWithFragments;
    }

    public createView(protoViewRef: RenderProtoViewRef, fragmentCount: number): RenderViewWithFragments {
        console.log("FuseRenderer.createView", arguments);
        return this._createView(protoViewRef, null);
    }

    private _createView(protoViewRef: RenderProtoViewRef, inplaceElement: HTMLElement): RenderViewWithFragments {
        var dpvr = <DefaultProtoViewRef>protoViewRef;
        var view = createRenderView(dpvr.template, dpvr.cmds, inplaceElement, this);
        return new RenderViewWithFragments(view, view.fragments);
    }

    public destroyView(viewRef: RenderViewRef) {
        console.log("FuseRenderer.destroyView", arguments);
        // Seems to be called on component dispose only (router outlet)
        //TODO: handle this when we resolve routing and navigation.
    }

    // public getRootNodes(fragment: RenderFragmentRef): ViewNode[] {
    //     return resolveInternalDomFragment(fragment);
    // }

    public attachFragmentAfterFragment(previousFragmentRef: RenderFragmentRef, fragmentRef: RenderFragmentRef) {
        console.log("FuseRenderer.attachFragmentAfterFragment", arguments);

        var previousFragmentNodes = resolveInternalDomFragment(previousFragmentRef);
        if (previousFragmentNodes.length > 0) {
            var sibling = previousFragmentNodes[previousFragmentNodes.length - 1];
            let nodes = resolveInternalDomFragment(fragmentRef);
            this.attachFragmentAfter(sibling, nodes);
        }
    }

    public attachFragmentAfterElement(location: RenderElementRef, fragmentRef: RenderFragmentRef) {
        console.log("FuseRenderer.attachFragmentAfterElement", arguments);

        let element = resolveBoundNode(location);
        let nodes = resolveInternalDomFragment(fragmentRef);
        this.attachFragmentAfter(element, nodes);
    }

    private attachFragmentAfter(anchorNode: ViewNode, fragmentNodes: ViewNode[]) {
        console.log("FuseRenderer.attachFragmentAfter", arguments);
        var startIndex = anchorNode.parentNode.getChildIndex(anchorNode) + 1;

        fragmentNodes.forEach((node, index) => {
            console.log('attachFragmentAfterElement: child: ' + node.viewName + ' after: ' + anchorNode.viewName + ' startIndex: ' + startIndex + ' index: ' + index);
            anchorNode.parentNode.insertChildAt(startIndex + index, node);
            node.attachToView(startIndex + index);
        });
    }

    detachFragment(fragmentRef: RenderFragmentRef) {
        console.log('FuseRenderer.detachFragment', arguments);

        var fragmentNodes = resolveInternalDomFragment(fragmentRef);
        fragmentNodes.forEach((node) => {
            console.log('detaching fragment child: ' + node.viewName);
            if (node.parentNode)
                node.parentNode.removeChild(node);
        });
    }

    hydrateView(viewRef: RenderViewRef) {
        console.log("FuseRenderer.hydrateView", arguments);
        //DOING nothing -- the view init code happens on attach: ViewNode#createUI
    }

    dehydrateView(viewRef: RenderViewRef) {
        console.log("FuseRenderer.dehydrateView", arguments);
        //TODO: detach events
    }

    setElementProperty(location: RenderElementRef, propertyName: string, propertyValue: any) {
        console.log("FuseRenderer.setElementProperty " + propertyName + " = " + propertyValue, arguments);
        let node = resolveBoundNode(location);
        node.setProperty(propertyName, propertyValue);
    }

    setElementAttribute(location: RenderElementRef, attributeName: string, attributeValue: string) {
        console.log("FuseRenderer.setElementAttribute " + attributeName + " = " + attributeValue, arguments);
        return this.setElementProperty(location, attributeName, attributeValue);
    }

    setElementClass(location: RenderElementRef, className: string, isAdd: boolean): void {
        console.log("FuseRenderer.setElementClass " + className + " - " + isAdd, arguments);

        let node = resolveBoundNode(location);
        if (isAdd) {
            node.addClass(className);
        } else {
            node.removeClass(className);
        }
    }

    setElementStyle(location: RenderElementRef, styleName: string, styleValue: string): void {
        console.log("FuseRenderer.setElementStyle " + styleName + "=" + styleValue, arguments);
        let node = resolveBoundNode(location);
        node.setStyleProperty(styleName, styleValue);
    }

    /**
    * Used only in debug mode to serialize property changes to comment nodes,
    * such as <template> placeholders.
    */
    setBindingDebugInfo(location: RenderElementRef, propertyName: string, propertyValue: string): void {
        let node = resolveBoundNode(location);
        console.log('FuseRenderer.setBindingDebugInfo: ' + node.viewName + ', ' + propertyName + ' = ' + propertyValue, arguments);
    }


    getNativeElementSync(location: RenderElementRef): any {
        console.log("FuseRenderer.getNativeElementSync", arguments);
        let node = resolveBoundNode(location);
        return node.nativeView;
    }

    /**
    * Calls a method on an element.
    */
    invokeElementMethod(location: RenderElementRef, methodName: string, args: Array<any>) {
        console.log("FuseRenderer.invokeElementMethod " + methodName + " " + args, arguments);
    }

    setText(viewRef: RenderViewRef, textNodeIndex: number, text: string) {
        console.log("FuseRenderer.setText ", arguments);
    }

    setEventDispatcher(viewRef: RenderViewRef, dispatcher: RenderEventDispatcher) {
        console.log("FuseRenderer.setEventDispatcher ", arguments);
        var view = resolveInternalDomView(viewRef);
        view.eventDispatcher = dispatcher;
    }

    private _componentTemplates: Map<string, RenderComponentTemplate> = new Map<string, RenderComponentTemplate>();

    public registerComponentTemplate(template: RenderComponentTemplate) {
        console.log('FuseRenderer.registerComponentTemplate: ' + template.id), arguments;
        this._componentTemplates.set(template.id, template);
    }

    public resolveComponentTemplate(templateId: string): RenderComponentTemplate {
        console.log('FuseRenderer.resolveComponentTemplate: ' + templateId, arguments);
        return this._componentTemplates.get(templateId);
    }

    public createRootContentInsertionPoint(): ViewNode {
        console.log('FuseRenderer.createRootContentInsertionPoint', arguments);
        return this.createTemplateAnchor([]);
    }

    public createTemplateAnchor(attrNameAndValues: string[]): ViewNode {
        console.log('FuseRenderer.createTemplateAnchor', arguments);
        return new ViewNode(null, 'template', attrNameAndValues);
    }

    public createElement(name: string, attrNameAndValues: string[]): ViewNode {
        console.log('FuseRenderer.createElement: ' + name, arguments);
        return new ViewNode(null, name, attrNameAndValues);
    }

    public mergeElement(existing: ViewNode, attrNameAndValues: string[]) {
        console.log('FuseRenderer.mergeElement: ' + existing.viewName, arguments);
        existing.clearChildren();
        existing.setAttributeValues(attrNameAndValues);
    }

    public createShadowRoot(host: ViewNode, templateId: string): ViewNode {
         throw new Error('FuseRenderer.createShadowRoot Not implemented.');
    }

    public createText(value: string): ViewNode {
        console.log('FuseRenderer.createText', arguments);
        return new DummyViewNode(null);
    }

    public appendChild(parent: ViewNode, child: ViewNode) {
        console.log('FuseRenderer.appendChild: ' + parent.viewName + ' -> ' + child.viewName, arguments);
        parent.appendChild(child);
    }

    public on(element: ViewNode, eventName: string, callback: Function) {
        console.log('FuseRenderer.on: ' + eventName, arguments);
        //let zonedCallback = global.zone.bind(callback);
        //element.on(eventName, zonedCallback);
    }

    public globalOn(target: string, eventName: string, callback: Function): Function {
        throw new Error('FuseRenderer.globalOn: ' + eventName +'Not implemented.');
    }
}

function resolveInternalDomView(viewRef: RenderViewRef): DefaultRenderView<ViewNode> {
    console.log('resolveInternalDomView', arguments);
    return <DefaultRenderView<ViewNode>>viewRef;
}

function resolveBoundNode(elementRef: RenderElementRef): ViewNode {
    console.log('resolveBoundNode', arguments);
    let view = resolveInternalDomView(elementRef.renderView);
    //Using an Angular internal API to get the index of the bound element.
    let internalBoundIndex = (<any>elementRef).boundElementIndex;
    return view.boundElements[internalBoundIndex]
}

function resolveInternalDomFragment(fragmentRef: RenderFragmentRef): ViewNode[] {
    console.log('resolveInternalDomFragment', arguments);
    return (<DefaultRenderFragmentRef<ViewNode>>fragmentRef).nodes;
}