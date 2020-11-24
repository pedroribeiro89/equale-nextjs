import {IFieldValidation, IFormValidation, IFormValidator} from "./checkout-forms";

export interface IPaymentData {
    cardName: string;
    cardNumber: string;
    expiryMonth: string;
    expiryYear: string;
    cvv: string;
    donation: number;
    subscription: boolean;
    cpf: string;
}

export const PaymentDataFieldMap = {
    cardName: "Nome no Cartão",
    cardNumber: "Número do Cartão",
    expiryMonth: "Mês de Expiração",
    expiryYear: "Ano de Expiração",
    cvv: "CVV",
    donation: "Doação",
    subscription: "Doar mensamente",
    cpf: "CPF"
};

export class PaymentDataFormValidator implements IFormValidator<IPaymentData> {

    form: IPaymentData;

    constructor(form: IPaymentData) {
        this.form = form;
    }

    validate(): IFormValidation {
        const fieldValidations: IFieldValidation[] = [];
        if (this.form.cardName === null || this.form.cardName.length === 0) {
            fieldValidations.push({ field: 'cardName', msg: 'Nome é obrigatório' });
        }
        if (this.form.cardNumber === null || this.form.cardNumber.length === 0) {
            fieldValidations.push({ field: 'cardNumber', msg: 'Número do Cartão é obrigatório' });
        }
        if (this.form.expiryMonth === null || this.form.expiryMonth.length === 0) {
            fieldValidations.push({ field: 'expiryMonth', msg: 'Mês de Expiração é obrigatório' });
        }
        if (this.form.expiryYear === null || this.form.expiryYear.length === 0) {
            fieldValidations.push({ field: 'expiryYear', msg: 'Ano de Expiração é obrigatório' });
        }
        if (this.form.cvv === null || this.form.cvv.length === 0) {
            fieldValidations.push({ field: 'cvv', msg: 'CVV é obrigatório' });
        }
        if (this.form.donation === null) {
            fieldValidations.push({ field: 'donation', msg: 'Doação é obrigatório' });
        }
        if (this.form.subscription === null) {
            fieldValidations.push({ field: 'subscription', msg: 'Assinatura é obrigatório' });
        }
        if (this.form.cpf === null) {
            fieldValidations.push({ field: 'cpf', msg: 'CPF é obrigatório' });
        }
        return { valid: fieldValidations.length === 0, fieldValidations};
    }
}
