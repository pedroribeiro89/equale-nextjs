import Head from "next/dist/next-server/lib/head";
import {HEAD_CONFIG} from "../components/head-config";
import doacaoStyle from "../styles/doacao.module.scss";
import Layout from "../components/layout";
import {useState} from "react";
import UserDataForm from "../components/checkout-forms/UserDataForm";
import PaymentDataForm from "../components/checkout-forms/PaymentDataForm";
import CheckoutSummary from "../components/checkout-forms/CheckoutSummary";
import {IFormValidation} from "../models/checkout-forms";
import FormValidationError from "../components/form-valiation-error/form-validation-error";
import {IPaymentData, PaymentDataFieldMap, PaymentDataFormValidator} from "../models/payment-data-forms";
import {IUserData, UserDataFieldMap, UserDataFormValidator} from "../models/user-data-forms";

export default function Donate() {
    const [step, setStep] = useState(1);

    const [userDataForm, setUserDataForm] = useState<IUserData>({
            name: '',
            email: '',
            phone: '',
            cep: null,
            street: '',
            streetNumber: null,
            addressComplement: '',
            city: '',
            state: '',
            password: '',
            confirmPassword: ''
        });

    const userDataValidator = new UserDataFormValidator(userDataForm);
    const [userDataFormValidation, setUserDataFormValidation] = useState<IFormValidation>(null);
    const changeUserDataForm = value => { setUserDataForm(value); };

    const [paymentDataForm, setPaymentDataForm] = useState<IPaymentData>({
        cardName: '',
        cardNumber: '',
        expiryMonth: '',
        expiryYear: '',
        cvv: '',
        donation: 200,
        subscription: true,
        cpf: ''
    });

    const paymentDataValidator = new PaymentDataFormValidator(paymentDataForm);
    const [paymentDataFormValidation, setPaymentDataFormValidation] = useState<IFormValidation>(null);
    const changePaymentDataForm = value => { setPaymentDataForm(value);  };

    const next = () => {
        if (step === 1) {
            const formValidation = userDataValidator.validate();
            setUserDataFormValidation(formValidation);
            if (userDataFormValidation && userDataFormValidation.valid) { setStep(2); }
        } else if (step === 2) {
            const formValidation = paymentDataValidator.validate();
            setPaymentDataFormValidation(formValidation);
            if (formValidation && formValidation.valid) { setStep(3); }
        }
    };

    // let serverMsg = '';
    const [serverMsg, setServerMsg] = useState({status: '', msg: ''});
    const [isDonationRequest, setIsDonationRequest] = useState(false);
    const donate = () => {
        const body = {
            payment: paymentDataForm,
            user: userDataForm
        };//JSON.stringify(body)

        const params = new URLSearchParams();
        params.append('paymentDataForm', JSON.stringify(paymentDataForm));
        params.append('userDataForm', JSON.stringify(userDataForm));

        setIsDonationRequest(true);
        fetch(process.env.BASE_URL + '/donation', {
            method: 'POST',
            body: params,
        })
            .then(response => response.ok ? { status: 200 } : response.json())
            .then(responseBody => {
                if (responseBody.status >= 200 && responseBody.status < 300) {
                    setServerMsg({status: 'ok', msg:'Doação realizada com sucesso'});
                } else {
                    setServerMsg(
                        responseBody && responseBody.message ?
                            {status: 'error', msg: responseBody.message} :
                            {status: 'error', msg:'Erro inesperado, tente novamente mais tarde'}
                    );
                }
                setIsDonationRequest(false);
            })
    };

    return (
        <Layout>
            <Head>
                <title>{HEAD_CONFIG.title}</title>
            </Head>
            <article className={doacaoStyle.checkout}>
                <h1>Doação</h1>
                <nav>
                    <ul className={doacaoStyle.stepper}>
                        <li className={step === 1 ? doacaoStyle.active : ''}>Seus Dados</li>
                        <li className={step === 2 ? doacaoStyle.active : ''}>Dados do Cartão</li>
                        <li className={step === 3 ? doacaoStyle.active : ''}>Finalizar Doação</li>
                    </ul>
                </nav>

                {step === 1 ? <UserDataForm form={userDataForm} onChangeForm={changeUserDataForm} /> : '' }
                {step === 2 ? <PaymentDataForm form={paymentDataForm} onChangeForm={changePaymentDataForm} /> : ''}
                {step === 3 ? <CheckoutSummary userData={userDataForm} paymentData={paymentDataForm}/> : ''}

                {
                    step === 1 && userDataFormValidation && !userDataFormValidation.valid ?
                        <FormValidationError validations={userDataFormValidation.fieldValidations} fieldNameMap={UserDataFieldMap} />
                        : ''
                }
                {
                    step === 2 && paymentDataFormValidation && !paymentDataFormValidation.valid ?
                        <FormValidationError validations={paymentDataFormValidation.fieldValidations} fieldNameMap={PaymentDataFieldMap} />
                        : ''
                }
                {
                    serverMsg.status !== '' ? <p className={doacaoStyle.servermsg}><strong>{serverMsg.msg}</strong></p> : ''
                }


                <div className={doacaoStyle.btncontainer}>
                    { step > 1 ? <button className={doacaoStyle.prevbtn} onClick={() => setStep(step - 1)}><strong>Voltar</strong></button> : '' }
                    { step < 3 ? <button className={doacaoStyle.nextbtn} onClick={next}><strong>Próximo</strong></button> : '' }
                    { step === 3 && serverMsg.status !== 'ok' ? <button className={doacaoStyle.nextbtn} onClick={donate} disabled={isDonationRequest}><strong>Finalizar Doação</strong></button> : '' }
                </div>
            </article>
        </Layout>
    );
}



// {
//     step === 1 ? <li className={doacaoStyle.active}>Seus Dados</li> : <li>Seus Dados</li>
// }
//
// {
//     step === 2 ? <li className={doacaoStyle.active}>Seus Dados</li> : <li>Seus Dados</li>
// }
//
// {
//     step === 3 ? <li className={doacaoStyle.active}>Seus Dados</li> : <li>Seus Dados</li>
// }
