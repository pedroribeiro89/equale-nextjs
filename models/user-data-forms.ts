import {IFieldValidation, IFormValidation, IFormValidator} from "./checkout-forms";

export interface IUserData {
    name: string;
    email: string;
    phone: string;
    cep: number;
    street: string;
    streetNumber: number;
    addressComplement: string;
    city: string;
    state: string;
    password: string;
    confirmPassword: string;
}

export const UserDataFieldMap = {
    name: "Nome",
    email: "Email",
    phone: "Telefone",
    cep: "CEP",
    street: "Rua",
    streetNumber: "Número",
    addressComplement: "Complemento",
    city: "Cidade",
    state: "Estado",
    password: "Senha",
    confirmPassword: "Confirmar Senha"
};

export class UserDataFormValidator implements IFormValidator<IUserData> {

    form: IUserData;

    constructor(form: IUserData) {
        this.form = form;
    }

    validate(): IFormValidation {
        const fieldValidations: IFieldValidation[] = [];
        if (this.form.name === null || this.form.name.length === 0) {
            fieldValidations.push({ field: 'name', msg: 'Nome é obrigatório' });
        }
        if (this.form.email === null || this.form.email.length === 0) {
            fieldValidations.push({ field: 'email', msg: 'Email é obrigatório' });
        }
        if (this.form.phone === null || this.form.phone.length === 0) {
            fieldValidations.push({ field: 'phone', msg: 'Telefone é obrigatório' });
        }
        if (this.form.cep === null) {
            fieldValidations.push({ field: 'cep', msg: 'Cep é obrigatório' });
        }
        if (this.form.street === null || this.form.street.length === 0) {
            fieldValidations.push({ field: 'street', msg: 'Rua é obrigatório' });
        }
        if (this.form.streetNumber === null) {
            fieldValidations.push({ field: 'streetNumber', msg: 'Número é obrigatório' });
        }
        if (this.form.city === null || this.form.city.length === 0) {
            fieldValidations.push({ field: 'city', msg: 'Cidade é obrigatório' });
        }
        if (this.form.state === null || this.form.state.length === 0) {
            fieldValidations.push({ field: 'state', msg: 'Estado é obrigatório' });
        }
        if (this.form.password === null || this.form.confirmPassword.length === null) {
            fieldValidations.push({ field: 'password', msg: 'Senha é obrigatório' });
        } else if (this.form.password !== this.form.confirmPassword) {
            fieldValidations.push({ field: 'password', msg: 'Senhas estão diferentes' });
        }
        return { valid: fieldValidations.length === 0, fieldValidations};
    }
}
