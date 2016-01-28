/* beautify ignore:start */
import {Directive, ElementRef, Renderer, Input} from 'angular2/core';
/* beautify ignore:end */

@Directive({
    selector: '[backImg]'
})

export class BackImg {
    private _emptyImage: string = 'data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw==';
    private _cloudinary: string;
    private _rgbaStart: string;
    private _rgbaStop: string;

    constructor(private el: ElementRef, private renderer: Renderer) {
        this.renderer.setElementStyle(this.el.nativeElement, 'background-image', 'none');
        this.renderer.setElementStyle(this.el.nativeElement, 'background-repeat', 'no-repeat');
        this.renderer.setElementStyle(this.el.nativeElement, 'background-attachment', 'center');
        this.renderer.setElementStyle(this.el.nativeElement, 'background-size', 'cover');
        this.renderer.setElementStyle(this.el.nativeElement, 'background-position-x', '50%');
    }

    @Input() set color(value) {
        if (value) {
            this.renderer.setElementStyle(this.el.nativeElement, 'background-color', value);
        }
    }

    @Input() set contain(value) {
        if (value) {
            this.renderer.setElementStyle(this.el.nativeElement, 'background-color', 'contain');
        }
    }

    @Input() set positionX(value) {
        if (value) {
            this.renderer.setElementStyle(this.el.nativeElement, 'background-position-x', value);
        }
    }

    @Input() set positionY(value) {
        if (value) {
            this.renderer.setElementStyle(this.el.nativeElement, 'background-position-y', value);
        }
    }

    @Input() set opacity(value) {
        if (value) {
            this.renderer.setElementStyle(this.el.nativeElement, 'opacity', value);
            this.renderer.setElementStyle(this.el.nativeElement, 'filter', 'alpha(opacity=' + value + ')');
        }
    }

    @Input() set cloudinary(value) {
        this._cloudinary = value;
    }

    @Input() set rgbaStart(value) {
        this._rgbaStart = value;
    }

    @Input() set rgbaStop(value) {
        this._rgbaStop = value;
    }

    @Input('backImg') set url(value) {
        let backgroundImage = '';
        if (value) {
            let prefix = 'data:image/jpg;base64,';
            if (value.indexOf('http') === 0 || value.indexOf('data:') === 0) {
                prefix = '';
            }
            value = value.replace(/[']/g, '%27');
            if (this._cloudinary && value.indexOf('res.cloudinary') >= 0) {
                let position = value.indexOf('upload/');
                if (position > 0) {
                    position += 7;
                    value = [value.slice(0, position), this._cloudinary + '/', value.slice(position)].join('');
                }
            }
            backgroundImage = 'url(\'' + prefix + value + '\')';
        }
        if (this._rgbaStart && this._rgbaStop) {
            backgroundImage = 'linear-gradient(' + this._rgbaStart + ',' + this._rgbaStop + '), ' + backgroundImage;
        }
        if (backgroundImage) {
            this.renderer.setElementStyle(this.el.nativeElement, 'background-image', backgroundImage);
        }

        this.renderer.setElementStyle(this.el.nativeElement, 'src', this._emptyImage);
    }

}
