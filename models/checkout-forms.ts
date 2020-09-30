export interface IFieldValidation {
    field: string;
    msg: string;
}

export interface IFormValidation {
    valid: boolean;
    fieldValidations: IFieldValidation[];
}

export interface IFormValidator<T> {
    form: T;
    validate(): IFormValidation;
}

