import { buildRequiredFieldValidationFailedResponse, builtValidationSucceededResult, isStringValueInformed } from "@/common/validations";
import { FieldValidationResult } from "@/common/validations/validation.model";


export const validateUserField = (value: string) : FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    };

    return builtValidationSucceededResult();
};

export const validatePasswordField = (value: string) : FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    };

    return builtValidationSucceededResult();
};
