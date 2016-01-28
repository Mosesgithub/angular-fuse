/* beautify ignore:start */
import {Component, EventEmitter, Output, Input} from 'angular2/core';
/* beautify ignore:end */
@Component({
    selector: 'navbar',
    template: require('./navbar.html'),
    styles: [require('./navbar.scss').toString()]
})

export class NavBar {
    @Output() toggleMenu: EventEmitter<any> = new EventEmitter();
    @Output() refreshData: EventEmitter<any> = new EventEmitter();

    @Input() title: string;

    toggle() {
        this.toggleMenu.emit(null);
    }

    refresh() {
        this.refreshData.emit(null);
    }

}
