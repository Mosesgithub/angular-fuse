// Borrowed from the react-native-renderer project at:
// https://github.com/uber5001/react-native-renderer
//import ZoneScriptPatch from './zone_patch';

//let core = require('zone.js/lib/core.js');
//let microtask = require('zone.js/lib/microtask.js');
//microtask.addMicrotaskSupport(core.Zone);
//global.Zone = core.Zone;
//window.zone = global.zone; = new core.Zone();

//ZoneScriptPatch.apply();

console.log('manual patching zone');
window.Zone = global.Zone;
window.zone = global.zone;

//window.zone = global.zone;
