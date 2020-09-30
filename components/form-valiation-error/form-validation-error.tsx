import {IFieldValidation} from "../../models/checkout-forms";
import styles from "./form-validation-error.module.scss";


type FormValidationErrorProps = {
    validations: IFieldValidation[],
    fieldNameMap: object
}

const FormValidationError: React.FunctionComponent<FormValidationErrorProps> = ({ validations, fieldNameMap }) => {

    return (
        <fieldset className={styles.fieldset}>
            <legend>Campos obrigatórios</legend>
            <ul>
                {validations.map((validation: IFieldValidation) => (
                    <li key={validation.field}><strong>{fieldNameMap[validation.field]}</strong>: {validation.msg}</li>
                ))}
            </ul>

        </fieldset>
    );
};

export default FormValidationError;
