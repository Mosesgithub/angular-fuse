/* beautify ignore:start */
import {Component, Inject, forwardRef} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {Menu} from '../menu/menu';
import {MissionDescriptionsBroker} from '../../services/missiondescriptionsbroker';
import {Requestor} from '../../services/requestor';
import {Camera} from '../../services/camera';
import {HtmlParser} from '../../services/htmlparser';
require('./ngux/missionform.js');
let _ = require('lodash');
/* beautify ignore:end */

@Component({
    selector: 'MissionForm',
    template: require('./missionform.ngux'),
    providers: [Requestor, MissionDescriptionsBroker, Camera, HtmlParser],
    directives: [ROUTER_DIRECTIVES]
})

export class MissionForm {
    public form: any = null;
    public active: string = '';
    private id;
    private menu: Menu;

    constructor(private htmlParser: HtmlParser, private camera: Camera, private router: Router, private routeParams: RouteParams, private missiondescriptionsBroker: MissionDescriptionsBroker, @Inject(forwardRef(() => Menu)) menu) {
        this.menu = menu;
        this.id = this.routeParams.get('id');
        console.log('Mission : ' + this.id);
        console.log('Camera loaded : ', this.camera);
        let htmlParserLocal = this.htmlParser;
        this.missiondescriptionsBroker.getById(this.id).then((res) => {
            if (res.slides) {
                _.forEach(res.slides, function(s) {
                    if (s.items) {
                        _.forEach(s.items, function(i) {
                            i.description = htmlParserLocal.parse(i.description);
                        });
                    }
                });
            }
            console.log(JSON.stringify(res, null, 4));

            this.form = res;
        });
    }
    showMenu() {
        this.menu.toggleMenu();
    }
    goSummary() {
        console.log('goSummary');
        this.active = 'summary';
    }
    changeActive(name: string) {
        console.log('Activate ' + name);
        this.active = 'page' + name;
    }
    selectUnique(v, i) {
        i.value = [v];
    }
    toggle(v, i) {
        if (i.value) {
            let idx = i.value.indexOf(v);
            if (idx > -1) {
                i.value.splice(idx, 1);
            } else {
                i.value.push(v);
            }
        } else {
            i.value = [];
            i.value.push(v);
        }
    }
    isSelected(v, i) {
        return (i.value) && (i.value.indexOf(v) > -1);
    }
    parseDescription(d) {
        return this.htmlParser.parse(d);
    }
    takePicture(i) {
        this.camera.takePicture().then(function(file) {
            i.photo = file;
            return file;
        });
    }

}
