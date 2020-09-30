import {IPaymentData} from "../../models/payment-data-forms";
import {IUserData} from "../../models/user-data-forms";
import styles from "./CheckoutSummary.module.scss";

type CheckoutReviewProps = {
    userData: IUserData,
    paymentData: IPaymentData
}
const CheckoutSummary: React.FunctionComponent<CheckoutReviewProps> = ({ userData, paymentData }) => {
    console.log(userData, paymentData);
    return (
        <article className={styles.summary}>
            <h1>Revisão dos seus Dados</h1>
            <section>
                <h2>Dados de usuário</h2>
                <ul>
                    <li><strong>Nome:</strong> {userData.name}</li>
                    <li><strong>Email:</strong> {userData.email}</li>
                    <li><strong>Telefone:</strong> {userData.phone}</li>
                    <li><strong>CEP:</strong> {userData.cep}</li>
                    <li>
                        <strong>Endereço:</strong> {userData.street},
                        {userData.streetNumber},
                        {userData.addressComplement},
                        {userData.city},
                        {userData.state}
                    </li>
                </ul>
            </section>
            <section>
                <h2>Dados do Pagamento</h2>
                <ul>
                    <li><strong>Nome no Cartão:</strong> {paymentData.cardName}</li>
                    <li><strong>Número no Cartão:</strong> {paymentData.cardNumber}</li>
                    <li><strong>Data Vencimento:</strong> {paymentData.expiryMonth}/{paymentData.expiryYear}</li>
                    <li><strong>CVV:</strong> {paymentData.cvv}</li>
                    <li><strong>Doação:</strong> {paymentData.donation} {paymentData.subscription ? '(Doação mensal)' : ''}</li>
                </ul>
            </section>
        </article>
    );
};

export default CheckoutSummary;
