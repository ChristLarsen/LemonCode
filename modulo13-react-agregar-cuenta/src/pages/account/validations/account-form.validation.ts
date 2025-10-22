import { FormValidationResult } from "@/common/validations/validation.model";
import { AccountError, AccountVm } from "../account.vm";
import { validateAccountIdField, validateAliasField } from "./account-field.validation";

export const validateForm = (account : AccountVm) : FormValidationResult<AccountError> => {

    const fieldValidationResults = [
        validateAccountIdField(account.type),
        validateAliasField(account.name),
    ];

    return {
        succeeded : fieldValidationResults.every((f) => f.succeeded),
        errors : {
            type : fieldValidationResults[0].errorMessage ?? "",
            name : fieldValidationResults[1].errorMessage ?? "",
        }
    };

};