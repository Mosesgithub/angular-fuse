/* beautify ignore:start */
import {Component, Inject, forwardRef} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {DashboardBroker} from '../../../yoobic/services/dashboardbroker';
import {MissionsBroker} from '../../../yoobic/services/missionsbroker';
import {Requestor} from '../../../yoobic/services/requestor';
import {CampaignTile} from '../campaign-tile/campaign-tile';
import {Menu} from '../menu/menu';
/* beautify ignore:end */

@Component({
    selector: 'campaigns-overview',
    template: require('./campaigns-overview.html'),
    styles: [require('./campaigns-overview.scss').toString()],
    directives: [ROUTER_DIRECTIVES, CampaignTile],
    providers: [DashboardBroker, MissionsBroker, Requestor, NgFor]
})

export class CampaignsOverview {
    private campaigns: any;
    private menu: Menu;
    private subscription: any;

    constructor(private router: Router, private dashboardbroker: DashboardBroker, private missionsbroker: MissionsBroker, @Inject(forwardRef(() => Menu)) menu) {
        this.menu = menu;
        this.menu.setTitle('Campaigns');
        this.subscription = this.menu.refresh.subscribe(() => this.refreshData());
        this.refreshData();
    }

    ngOnDestroy() {
        this.subscription.dispose();
    }

    refreshData() {

        this.missionsbroker.getAvailable();

        this.dashboardbroker.getCurrentSession();

        this.dashboardbroker.getCampaignsProgress().then(data => {
            this.campaigns = _.map(data.campaigns, function(c: any) {
                let stat: any = _.findWhere(data.stats, {
                    descriptionRef: c._id
                }) || {};

                return {
                    _id: c._id,
                    title: c.title,
                    size: 260,
                    icon: c.icon ? c.icon._downloadURL : '',
                    backgroundImage: c.background ? c.background._downloadURL : '',
                    count: stat.count || 0,
                    //editdate: c._kmd.lmt,
                    latest: stat.latest || '0',
                    percentage: stat.count > 0 ? stat.validated / stat.count : 0,
                    overlay: {
                        title: 'View missions'
                    },
                    badges: [{
                        icon: 'yo-circle royal',
                        color: 'royal',
                        tooltip: 'finished',
                        value: stat.finished || 0
                    }, {
                            icon: 'yo-check-circle balanced',
                            color: 'balanced',
                            tooltip: 'validated',
                            value: stat.validated || 0
                        }, {
                            icon: 'yo-close-circle assertive',
                            color: 'assertive',
                            tooltip: 'unvalidated',
                            value: stat.rejected || 0
                        }]
                };
            });
        });
    }
}
