export class QuestionBase<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;

    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: string,
        controlType?: string
    } = {}) {
        this.value = options.value;
        this.key = options.key;
        this.label = options.label;
        this.required = options.required;
        this.order = this.order;
        this.controlType = this.controlType;
    }
}
