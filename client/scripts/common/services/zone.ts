// Borrowed from the react-native-renderer project at:
// https://github.com/uber5001/react-native-renderer
import ZoneScriptPatch from "./zone_patch"

var core = require('zone.js/lib/core.js');
var microtask = require('zone.js/lib/microtask.js');
microtask.addMicrotaskSupport(core.Zone);
global.Zone = core.Zone;
global.zone = new core.Zone();

ZoneScriptPatch.apply();
