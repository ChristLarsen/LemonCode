import { FormValidationResult } from "@/common/validations/validation.model";
import { CredentialsFormErrors } from "./login.vm";
import { validatePasswordField, validateUserField } from "./login-field.validation";

export const validateForm = (credentials : CredentialsFormErrors) : FormValidationResult<CredentialsFormErrors> => {

    const fieldValidationResults = [
        validateUserField(credentials.user),
        validatePasswordField(credentials.password)
    ];

    return {
        succeeded : fieldValidationResults.every((f) => f.succeeded),
        errors : {
            user: fieldValidationResults[0].errorMessage ?? "",
            password : fieldValidationResults[1].errorMessage ?? ""
        }
    }

};