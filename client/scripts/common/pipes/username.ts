/* beautify ignore:start */
import {Pipe, PipeTransform} from 'angular2/core';
/* beautify ignore:end */

@Pipe({
    name: 'username'
})
export class UserName implements PipeTransform {
    transform(user: any, args: any[]): any {
        let displayName = '';
        if (typeof user !== 'undefined' && user) {
            displayName = user.username;
            if (user.firstName && user.lastName) {
                displayName = _.capitalize(user.firstName.toLowerCase()) + ' ' + _.capitalize(user.lastName.toLowerCase());
            } else if (user.first_name && user.last_name) {
                displayName = _.capitalize(user.first_name.toLowerCase()) + ' ' + _.capitalize(user.last_name.toLowerCase());
            } else if (user._socialIdentity && user._socialIdentity.facebook && user._socialIdentity.facebook.name) {
                displayName = user._socialIdentity.facebook.name;
            } else if (user.email) {
                displayName = user.email;
            } else if (user._socialIdentity && user._socialIdentity.facebook && user._socialIdentity.facebook.email) {
                displayName = user._socialIdentity.facebook.email;
            }
        }

        if (args && args.length > 0 && args[0]) {
            displayName = user.username + '  (' + displayName + ')';
        }
        return displayName;
    }
}
