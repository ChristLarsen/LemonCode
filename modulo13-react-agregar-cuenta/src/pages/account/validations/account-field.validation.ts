import { buildRequiredFieldValidationFailedResponse, builtValidationSucceededResult, isStringValueInformed } from "@/common/validations";
import { FieldValidationResult } from "@/common/validations/validation.model";

export const validateAccountIdField = (value : string) : FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    };

    return builtValidationSucceededResult();

};

export const validateAliasField = (value : string) : FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    };
    
    return builtValidationSucceededResult();

};
