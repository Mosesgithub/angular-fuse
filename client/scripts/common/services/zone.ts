
// Borrowed from the react-native-renderer project at:
// https://github.com/uber5001/react-native-renderer
import ZonePatch from "./zone_patch"


var core = require('zone.js/lib/core.js');
//var microtask = require('zone.js/lib/microtask.js');
//microtask.addMicrotaskSupport(core.Zone);
var zone = global.zone = new core.Zone()


ZonePatch.apply();