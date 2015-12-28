import {RenderFragmentRef} from 'angular2/src/core/render/api';

//Taken from a search of react-native for file names that match: /(RCT[^/]*)Manager\.m
const RCT_VIEW_NAMES = {
	"rectangle":"Rectangle"
}

export const RCT_PROPERTY_NAMES = {
	"background": "Background"
}

export var tagElementMap = {};

export function resolveInternalFuseFragment(fragmentRef: RenderFragmentRef) {
	return (<FuseFragmentRef>fragmentRef)._nodes;
}

export class FuseFragmentRef extends RenderFragmentRef {
	constructor(public _nodes: FuseElement[]) { super(); }
}


export class FuseElement {
	tag;
	viewName;
	parent: FuseElement;
	children: Array<FuseElement> = [];
	listenerCallback = (name, event) => { };
	//Keeping track of native properties so that we can re-create
	//the element when re-attaching it.
	props: any = {};
	_created = false;
	constructor(viewName: string, properties = {}) {
		console.log('FuseElement.ctor', arguments);
		var nativeViewName = RCT_VIEW_NAMES[viewName];
		if (nativeViewName == undefined) {
			// console.log("%cNode viewName invalid: " + viewName + ". defaulting to RCTView", "background: #FFFF00");
			nativeViewName = RCT_VIEW_NAMES["view"];
		}
		this.viewName = nativeViewName;

		//this.tag = FuseTagHandles.allocateTag();

		this._mergeInProps(properties);

		this._createIfNeeded();
		tagElementMap[this.tag] = this;
	}

	insertChildAtIndex(node: FuseElement, index: number) {
		console.log('FuseElement.insertChildAtIndex', arguments);
		this.children.splice(index, 0, node);
		node.parent = this;
		node._createIfNeeded();
		//NativeModules.UIManager.manageChildren(this.tag, null, null, [node.tag], [index], null);
	}

	removeAtIndex(index: number) {
		console.log('FuseElement.removeAtIndex', arguments);
		var removedElement = this.children.splice(index, 1)[0];
		//NativeModules.UIManager.manageChildren(this.tag, null, null, null, null, [index])
		removedElement.parent = null;
		removedElement._destroy();
	}

	setProperty(prop, value) {
		console.log('FuseElement.setProperty', arguments);
		this.props[RCT_PROPERTY_NAMES[prop] || prop] = value;
		//NativeModules.UIManager.updateView(this.tag, this.viewName, this.props);
	}

	attachToNative() {
		console.log('FuseElement.attachToNative', arguments);
		//NativeModules.UIManager.manageChildren(1, null, null, [this.tag], [0], null);
	}

	focus() {
		console.log('FuseElement.focus', arguments);
		//NativeModules.UIManager.focus(this.tag);
	}

	setEventListener(listener) {
		console.log('FuseElement.setEventListener', arguments);
		this.listenerCallback = listener;
	}

	fireEvent(name, event) {
		console.log('FuseElement.fireEvent', arguments);
		this.listenerCallback(name, event);
	}

	_mergeInProps(properties) {
		console.log('FuseElement._mergeInProps', arguments);
		for (var i in properties) {
			this.props[RCT_PROPERTY_NAMES[i] || i] = properties[i];
		}
	}

	_createIfNeeded() {
		console.log('FuseElement._createIfNeeded', arguments);
		if (!this._created) {
			//NativeModules.UIManager.createView(this.tag, this.viewName, null, this.props);
			for (var i = 0; i < this.children.length; i++) {
				var node = this.children[i];
				node._createIfNeeded();
				//NativeModules.UIManager.manageChildren(this.tag, null, null, [node.tag], [i], null);
			}
			this._created = true;
		}
	}

	_destroy() {
		console.log('FuseElement._destroy', arguments);
		this._created = false;
		for (var i = 0; i < this.children.length; i++) {
			this.children[i]._destroy();
		}
	}
}