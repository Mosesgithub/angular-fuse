import {FuseElement} from './fuse_element';
import {RenderViewRef, RenderEventDispatcher, RenderProtoViewRef} from 'angular2/src/core/render/api';


export function resolveInternalFuseView(viewRef: RenderViewRef) {
	return (<FuseViewRef>viewRef)._view;
}

export class FuseViewRef extends RenderViewRef {
	_view: FuseView;
	constructor(view: FuseView) {
		super();
		this._view = view;
	}
}

export class FuseView {
	hydrated: boolean;
	eventDispatcher: RenderEventDispatcher;

	renderTree;

	constructor(public proto: RenderProtoViewRef, public rootChildElements, public boundElements: Array<FuseElement>, public boundTextNodes) {
		this.hydrated = false;
	}
}