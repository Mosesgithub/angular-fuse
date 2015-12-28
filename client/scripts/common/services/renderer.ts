import {Inject, Injectable} from 'angular2/src/core/di';
import {RenderComponentTemplate} from 'angular2/src/core/render/api';
import {createRenderView, NodeFactory} from 'angular2/src/core/render/view_factory';
import {Renderer, RenderEventDispatcher, RenderElementRef, RenderProtoViewRef, RenderViewRef, RenderFragmentRef, RenderViewWithFragments, RenderTemplateCmd} from 'angular2/src/core/render/api';
import {isBlank} from 'angular2/src/facade/lang';
import {DefaultProtoViewRef, DefaultRenderView, DefaultRenderFragmentRef} from 'angular2/src/core/render/view';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';

import {resolveInternalFuseView, FuseViewRef, FuseView} from './view';
import {FuseElement, FuseFragmentRef, resolveInternalFuseFragment} from './fuse_element';

@Injectable()
export class FuseRenderer extends Renderer {
    constructor() {
        super();
        console.log("FuseRenderer.constructor", arguments);
    }

    setBindingDebugInfo(location: RenderElementRef, propertyName: string, propertyValue: string): void {
        //let node = resolveBoundNode(location);
        //console.log('FuseRenderer.setBindingDebugInfo: ' + node.viewName + ', ' + propertyName + ' = ' + propertyValue, arguments);
    }

    public createProtoView(componentTemplateId: string, cmds: RenderTemplateCmd[]): RenderProtoViewRef {
        console.log('FuseRenderer.createProtoView: ', arguments);
        return new DefaultProtoViewRef(this._componentTemplates.get(componentTemplateId), cmds);
    }

    private _componentTemplates: Map<string, RenderComponentTemplate> = new Map<string, RenderComponentTemplate>();

    public registerComponentTemplate(template: RenderComponentTemplate) {
        console.log('FuseRenderer.registerComponentTemplate: ' + template.id, arguments);
        this._componentTemplates.set(template.id, template);
    }

    public resolveComponentTemplate(templateId: string): RenderComponentTemplate {
        console.log('FuseRenderer.resolveComponentTemplate: ' + templateId, arguments);
        return this._componentTemplates.get(templateId);
    }

    createRootHostView(hostProtoViewRef: RenderProtoViewRef, fragmentCount: number, hostElementSelector: string): RenderViewWithFragments {
        console.log("FuseRenderer.createRootHostView", arguments);
        //var hostProtoView = resolveInternalDomProtoView(hostProtoViewRef);
        return this._createView(hostProtoViewRef, true);
    }

    detachFreeHostView(parentHostViewRef: RenderViewWithFragments, hostViewRef: RenderViewWithFragments) {
        console.log("FuseRenderer.detachFreeHostView", arguments);
    }

    createView(protoViewRef: RenderProtoViewRef, fragmentCount: number): RenderViewWithFragments {
        console.log("FuseRenderer.createView", arguments);
        //var protoView = resolveInternalDomProtoView(protoViewRef);
        return this._createView(protoViewRef);
    }

    destroyView(viewRef: RenderViewRef) {
        console.log("FuseRenderer.destroyView", arguments);
    }

    attachFragmentAfterFragment(previousFragmentRef: RenderFragmentRef, fragmentRef: RenderFragmentRef) {
        console.log("FuseRenderer.attachFragmentAfterFragment", arguments);
        var previousFragmentNodes = resolveInternalFuseFragment(previousFragmentRef);
        var sibling = previousFragmentNodes[previousFragmentNodes.length - 1];
        moveNodesAfterSibling(sibling, resolveInternalFuseFragment(fragmentRef));
    }

    attachFragmentAfterElement(elementRef: RenderElementRef, fragmentRef: RenderFragmentRef) {
        console.log("FuseRenderer.attachFragmentAfterElement", arguments);
        var view = resolveInternalFuseView(elementRef.renderView);
        var internalBoundIndex = (<any>elementRef).boundElementIndex;
        var element = view.boundElements[internalBoundIndex];
        moveNodesAfterSibling(element, resolveInternalFuseFragment(fragmentRef));
    }

    detachFragment(fragmentRef: RenderFragmentRef) {
        console.log("FuseRenderer.detachFragment", arguments);
        var fragment = resolveInternalFuseFragment(fragmentRef);
        for (var i = 0; i < fragment.length; i++) {
            var element = fragment[i];
            element.parent.removeAtIndex(element.parent.children.indexOf(element));
        }
        var item = fragment[0];
        var text = item.children[1].children[0].props.text;
    }

    hydrateView(viewRef: RenderViewRef) {
        console.log("FuseRenderer.hydrateView", arguments);
        var view = resolveInternalFuseView(viewRef);
        if (view.hydrated) throw 'The view is already hydrated.';
        view.hydrated = true;
        //TODO: actually hydrate anything.
    }

    dehydrateView(viewRef: RenderViewRef) {
        console.log("FuseRenderer.dehydrateView", arguments);
        var view = resolveInternalFuseView(viewRef);
        view.hydrated = false;
        //TODO: actually dehydrate anything.
    }

    getNativeElementSync(location: RenderElementRef): any {
        console.log("FuseRenderer.getNativeElementSync", arguments);
        var view = resolveInternalFuseView(location.renderView);
        var internalBoundIndex = (<any>location).boundElementIndex;
        return view.boundElements[internalBoundIndex];
    }

    setElementProperty(location: RenderElementRef, propertyName: string, propertyValue: any) {
        console.log("FuseRenderer.setElementProperty", arguments);
        var view = resolveInternalFuseView(location.renderView);
        var internalBoundIndex = (<any>location).boundElementIndex;
        var element = view.boundElements[internalBoundIndex];
        element.setProperty(propertyName, propertyValue);
    }

    setElementAttribute(location: RenderElementRef, attributeName: string, attributeValue: string) {
        console.log("FuseRenderer.setElementAttribute", arguments);
    }

    setElementClass(location: RenderElementRef, className: string, isAdd: boolean) {
        console.log("FuseRenderer.setElementClass", arguments);
    }

    setElementStyle(location: RenderElementRef, styleName: string, styleValue: string) {
        console.log("FuseRenderer.setElementStyle", arguments);
    }

    invokeElementMethod(location: RenderElementRef, methodName: string, args: Array<any>) {
        console.log("FuseRenderer.invokeElementMethod", arguments);
    }

    setText(viewRef: RenderViewRef, textNodeIndex: number, text: string) {
        console.log("FuseRenderer.setText", arguments);
        var view = resolveInternalFuseView(viewRef);
        view.boundTextNodes[textNodeIndex].setProperty("text", text);
    }

    setEventDispatcher(viewRef: RenderViewRef, dispatcher: RenderEventDispatcher) {
        console.log("FuseRenderer.setEventDispatcher", arguments);
        var view = resolveInternalFuseView(viewRef);
        view.eventDispatcher = dispatcher;
    }

    _createView(protoViewRef: RenderProtoViewRef, isRoot = false): RenderViewWithFragments {
        console.log('FuseRenderer._createView', arguments);

        var dpvr = <DefaultProtoViewRef>protoViewRef;
        var view1 = createRenderView(dpvr.template, dpvr.cmds, null, null);

        console.log(view1);
     
        // var nativeElements;
        // var boundElements = [];
        // if (proto.rootElement.tagName == "template") {
        //     nativeElements = this._dfsAndCreateNativeElements(proto.rootElement.childNodes[0].childNodes, boundElements);
        // } else {
        //     nativeElements = this._dfsAndCreateNativeElements([proto.rootElement], boundElements);
        // }

        // var fragments = [];
        // var currentRootIndex = 0;
        // for (var i = 0; i < proto.fragmentsRootNodeCount.length; i++) {
        //     var rootNodeCount = proto.fragmentsRootNodeCount[i];
        //     var fragmentElements = [];
        //     for (var j = 0; j < rootNodeCount; j++) {
        //         fragmentElements.push(nativeElements[currentRootIndex++])
        //     }
        //     fragments.push(new FuseFragmentRef(fragmentElements));
        // }

        // if (isRoot) {
        //     nativeElements[0].attachToNative();
        // }
        // var boundTextNodes = this._createBoundTextNodes(proto, boundElements);
        // var view = new FuseView(proto, nativeElements, boundElements, boundTextNodes);

        // for (var i = 0; i < view.boundElements.length; i++) {
        //     this._initElementEventListener(i, view.boundElements[i], view);
        // }


        var view = new FuseView(protoViewRef, null, null, null);
        var fragments = [];
        return new RenderViewWithFragments(new FuseViewRef(view), fragments);
    }

    _createBoundTextNodes(proto: RenderProtoViewRef, boundElements) {
        //expecting boundElements to already be filled out, and be an array of FuseElements
        console.log('FuseRenderer._createBoundTextNodes', arguments);
        var boundTextNodes = [];
        // var elementBinders = proto.elementBinders;
        // for (var i = 0; i < elementBinders.length; i++) {
        //     var indicies = elementBinders[i].textNodeIndices;
        //     var nativeNodes = boundElements[i].children;
        //     for (var j = 0; j < indicies.length; j++) {
        //         var index = indicies[j];
        //         boundTextNodes.push(nativeNodes[index]);
        //     }
        // }
        return boundTextNodes;
    }

    _dfsAndCreateNativeElements(childrenParam, boundElements) {
        console.log('FuseRenderer._dfsAndCreateNativeElements', arguments);
        var resultingNativeChildren = [];
        for (var i = 0; i < childrenParam.length; i++) {
            var node = childrenParam[i];
            var nativeElement;
            if (node.type == "tag") {
                nativeElement = new FuseElement(node.name, node.attribs);
            } else if (node.type == "text") {
                nativeElement = new FuseElement("rawtext", { text: node.data });
            }

            // if (DOM.hasClass(node, NG_BINDING_CLASS)) {
            //     boundElements.push(nativeElement);
            // }

            //create and then attach children
            if (node.children && node.name != "template") {
                var children = this._dfsAndCreateNativeElements(node.children, boundElements);
                for (var j = 0; j < children.length; j++) {
                    var child = children[j];
                    nativeElement.insertChildAtIndex(child, j);
                }
            }
            resultingNativeChildren.push(nativeElement)
        }
        return resultingNativeChildren;
    }

    _initElementEventListener(bindingIndex: number, element: FuseElement, view: FuseView) {
        console.log('FuseRenderer._initElementEventListener', arguments);
       // element.setEventListener(global.zone.bind(function(name, event) {
        //     var locals = new Map<string, any>();
        //     locals.set('$event', event);
        //     view.eventDispatcher.dispatchRenderEvent(bindingIndex, name, locals);
        //     // console.log("%cEvent dispatched: ", "color: #22dd22", name, locals);
        // }));
    }


}


function moveNodesAfterSibling(sibling: FuseElement, nodes: FuseElement[]) {
    console.log('FuseRenderer.moveNodesAfterSibling', arguments);
    if (sibling.parent) {
        var destIndex = sibling.parent.children.indexOf(sibling) + 1;
        for (var i = 0; i < nodes.length; i++) {
            sibling.parent.insertChildAtIndex(nodes[i], destIndex);
        }
    }
}

// function resolveInternalDomView(viewRef: RenderViewRef): DefaultRenderView<ViewNode> {
//     console.log('resolveInternalDomView', arguments);
//     return <DefaultRenderView<ViewNode>>viewRef;
// }

// function resolveBoundNode(elementRef: RenderElementRef): ViewNode {
//     console.log('resolveBoundNode', arguments);
//     let view = resolveInternalDomView(elementRef.renderView);
//     //Using an Angular internal API to get the index of the bound element.
//     let internalBoundIndex = (<any>elementRef).boundElementIndex;
//     return view.boundElements[internalBoundIndex]
// }

// function resolveInternalDomFragment(fragmentRef: RenderFragmentRef): ViewNode[] {
//     console.log('resolveInternalDomFragment', arguments);
//     return (<DefaultRenderFragmentRef<ViewNode>>fragmentRef).nodes;
// }