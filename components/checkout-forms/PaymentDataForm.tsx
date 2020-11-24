import formStyles from "./form.module.scss";
import {IPaymentData, PaymentDataFieldMap} from "../../models/payment-data-forms";
import {useState} from "react";

type PaymentDataFormProps = {
    form: IPaymentData,
    onChangeForm: Function
}

const PaymentDataForm: React.FunctionComponent<PaymentDataFormProps> = ({ form, onChangeForm }) => {

    const inputChangeEvent = (key: string, value: any) => {
        form[key] = value;
        onChangeForm(form);
    };

    const monthsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const currentYear = new Date().getFullYear();
    let yearsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    yearsArray = yearsArray.map((value: number) => value += currentYear);

    const [expiryMonth, setExpiryMonth] = useState(form.expiryMonth);
    const [expiryYear, setExpiryYear] = useState(form.expiryYear);
    const [donation, setDonation] = useState(form.donation);
    const [subscription, setSubscription] = useState(form.subscription);
    const [cpf, setCpf] = useState(form.cpf);

    return (
        <form className={formStyles.form}>
            <input type="text" placeholder={PaymentDataFieldMap['cardName']} defaultValue={form.cardName} onChange={(event) => inputChangeEvent('cardName', event.target.value)} />
            <input type="text" placeholder={PaymentDataFieldMap['cardNumber']} defaultValue={form.cardNumber} onChange={(event) => inputChangeEvent('cardNumber', event.target.value)} />
            <div className={formStyles.expiredate}>
                <select value={expiryMonth} onChange={(event) => {setExpiryMonth(event.target.value); inputChangeEvent('expiryMonth', event.target.value);}}>
                    {monthsArray.map((month: number) => <option key={month.toString()} value={month.toString()}>{month}</option>)}
                    <option value={''}>Mês</option>
                </select>
                <select value={expiryYear} onChange={(event) => {setExpiryYear(event.target.value); inputChangeEvent('expiryYear', event.target.value);}}>
                    {yearsArray.map((year: number) => <option key={year.toString()} value={year.toString()}>{year}</option>)}
                    <option value={''}>Ano</option>
                </select>
            </div>
            <input type="text" placeholder={PaymentDataFieldMap['cvv']} defaultValue={form.cvv} onChange={(event) => inputChangeEvent('cvv', event.target.value)} />
            <select value={donation} onChange={(event) => {setDonation(+event.target.value); inputChangeEvent('donation', event.target.value);}}>
                <option value={200}>R$ 200,00</option>
                <option value={100}>R$ 100,00</option>
                <option value={50}>R$ 50,00</option>
            </select>
            <input type="text" placeholder={PaymentDataFieldMap['cpf']} defaultValue={form.cpf} onChange={(event) => inputChangeEvent('cpf', event.target.value)} />
            <div className={formStyles.checkboxcontainer}>
                <span>{PaymentDataFieldMap['subscription']}: </span>
                <label className={formStyles.checkbox}>
                    <input type="checkbox" checked={subscription} onChange={(event) => { setSubscription(event.target.checked); inputChangeEvent('subscription', event.target.checked);}} />
                    <span className={formStyles.checkmark}></span>
                </label>
            </div>

        </form>
    );
};

export default PaymentDataForm;
