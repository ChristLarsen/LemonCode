import { buildRequiredFieldValidationFailedResponse, buildValidationFailedResult, builtValidationSucceededResult, isDateAfterToday, isEmailWellFormed, isPositiveNumber, isStringValueInformed, isValidIban, isValueNotNullOrUndefined } from "@/common/validations";
import { FieldValidationResult } from "@/common/validations/validation.model";
import { INVALID_IBAN_MESSAGE, INVALID_AMOUNT_MESSAGE, INVALID_REAL_DATE_MESSAGE, INVALID_EMAIL_MESSAGE } from "@/common/validations/validations.const";

export const validateIBANField = (value : string) : FieldValidationResult => {

    if (!isStringValueInformed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    };
    if (!isValidIban(value)) {
        return buildValidationFailedResult(INVALID_IBAN_MESSAGE);
    };

    return builtValidationSucceededResult();

};

export const validateAccountIdField = (value : string) : FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    };

    return builtValidationSucceededResult();

};

export const validateNameField = (value : string) : FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    };
    
    return builtValidationSucceededResult();

};

export const validateAmountField = (value: number) : FieldValidationResult => {
    if (!isPositiveNumber(value)) {
        return buildValidationFailedResult(INVALID_AMOUNT_MESSAGE);
    };

    return builtValidationSucceededResult();

};

export const validateConceptField = (value: string) : FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    };

    return builtValidationSucceededResult();
};

export const validateNotesField = (_ : string) : FieldValidationResult => {
    return builtValidationSucceededResult();
};

export const validateRealDateTransferField = (value?: Date) : FieldValidationResult => {
    if (!isValueNotNullOrUndefined(value)) {
        return builtValidationSucceededResult();
    };

    if (value && !isDateAfterToday(value)) {
        return buildValidationFailedResult(INVALID_REAL_DATE_MESSAGE);
    };

    return builtValidationSucceededResult();
};

export const validateEmailField = (value: string) : FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        return buildValidationFailedResult(INVALID_EMAIL_MESSAGE);
    };

    if (!isEmailWellFormed(value)) {
        return buildValidationFailedResult(INVALID_EMAIL_MESSAGE);
    };

    return builtValidationSucceededResult();
};
