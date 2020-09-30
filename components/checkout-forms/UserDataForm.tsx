import formStyles from "./form.module.scss";
import {IUserData, UserDataFieldMap} from "../../models/user-data-forms";

type UserDataFormProps = {
    form: IUserData,
    onChangeForm: Function
}

const UserDataForm: React.FunctionComponent<UserDataFormProps> = ({ form, onChangeForm }) => {

    const inputChangeEvent = (key: string, value: any) => {
        form[key] = value;
        onChangeForm(form);
    };

    return (
        <form className={formStyles.form}>
            <input type="text" placeholder={UserDataFieldMap['name']} defaultValue={form.name} onChange={(event) => inputChangeEvent('name', event.target.value)} />
            <input type="text" placeholder={UserDataFieldMap['email']} defaultValue={form.email} onChange={(event) => inputChangeEvent('email', event.target.value)} />
            <input type="password" placeholder={UserDataFieldMap['password']} defaultValue={form.password} onChange={(event) => inputChangeEvent('password', event.target.value)} />
            <input type="password" placeholder={UserDataFieldMap['confirmPassword']} defaultValue={form.confirmPassword} onChange={(event) => inputChangeEvent('confirmPassword', event.target.value)} />

            <input type="text" placeholder={UserDataFieldMap['phone']} defaultValue={form.phone} onChange={(event) => inputChangeEvent('phone', event.target.value)} />
            <input type="text" placeholder={UserDataFieldMap['cep']} defaultValue={form.cep} onChange={(event) => inputChangeEvent('cep', event.target.value)} />
            <input type="text" placeholder={UserDataFieldMap['street']} defaultValue={form.street} onChange={(event) => inputChangeEvent('street', event.target.value)} />
            <input type="text" placeholder={UserDataFieldMap['streetNumber']} defaultValue={form.streetNumber} onChange={(event) => inputChangeEvent('streetNumber', event.target.value)} />
            <input type="text" placeholder={UserDataFieldMap['addressComplement']} defaultValue={form.addressComplement} onChange={(event) => inputChangeEvent('addressComplement', event.target.value)} />
            <input type="text" placeholder={UserDataFieldMap['city']} defaultValue={form.city} onChange={(event) => inputChangeEvent('city', event.target.value)} />
            <input type="text" placeholder={UserDataFieldMap['state']} defaultValue={form.state} onChange={(event) => inputChangeEvent('state', event.target.value)} />
        </form>
    );
};

export default UserDataForm;
