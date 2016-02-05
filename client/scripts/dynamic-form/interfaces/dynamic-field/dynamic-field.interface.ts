/* beautify ignore:start */

/* beautify ignore:end */
export interface DynamicField {
    title?: string;
    name: string;
    type: string;
    visible?: boolean;
    condition?: string;
    multiple?: boolean;
    required?: boolean;
    clearable?: boolean;
    values?: Array<any>;
}
