let utils = require('zone.js/lib/utils');
window.Zone = global['Zone'];
window.zone = global['zone'];
utils.patchEventTargetMethods(global['XMLHttpRequest'] && global['XMLHttpRequest'].prototype);
