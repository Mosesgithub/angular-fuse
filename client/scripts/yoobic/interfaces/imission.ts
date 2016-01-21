/* beautify ignore:start */
import {IMissionDescription}  from './imissiondescription';
/* beautify ignore:end */
export interface IMission {
    _id: string;
    address: string;
    icon: string;
    title: string;
    type: string;
    description: IMissionDescription;
}
