interface FormField {
    title: string;
    name: string;
    type: string;
    description: string;
    required: boolean;
    values: any;
}

interface FormSlide {
    title: string;
    isDirty: boolean;
    index: number;
    description: string;
    items: Array<FormField>;
}

export interface IMissionDescription {
    _id: string;
    background: any;
    icon: any;
    title: string;
    text: string;
    slides: Array<FormSlide>;
}
