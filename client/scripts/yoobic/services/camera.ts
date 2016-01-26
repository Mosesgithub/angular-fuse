/* beautify ignore:start */
import {Injectable} from 'angular2/core';
/* beautify ignore:end */

@Injectable()
export class Camera {
    constructor() {
        //
    }

    takePicture(): any {
        if (window.fusejs && window.fusejs.camera) {
            return window.fusejs.camera.takePicture({
                targetWidth: 640,
                targetHeight: 360,
                correctOrientation: true
            });
            // .then(function(file) {
            //     // file is a standard JavaScript File object
            //     // file.path contains the path to the saved image on the device
            //     return file;
            // }).catch(function(e) {
            //     console.log(JSON.stringify(e));
            // });
        }
    }
}
