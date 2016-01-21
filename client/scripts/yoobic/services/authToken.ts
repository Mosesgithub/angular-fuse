/* beautify ignore:start */
import {Injectable} from 'angular2/core';
import {IUser} from '../interfaces/iuser';
/* beautify ignore:end */

@Injectable()
export class AuthToken {
    public token: string;
    public user: IUser;
}
