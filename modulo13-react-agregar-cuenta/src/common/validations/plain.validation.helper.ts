import { FieldValidationResult } from "./validation.model";
import { REQUIRED_FIELD_MESSAGE } from "./validations.const";

export const buildValidationFailedResult = (errorMessage: string) : FieldValidationResult => {
    return {
        succeeded: false,
        errorMessage
    };
};

export const builtValidationSucceededResult = () : FieldValidationResult => {
    return {
        succeeded: true
    };
};

export const buildRequiredFieldValidationFailedResponse = () =>
    buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
