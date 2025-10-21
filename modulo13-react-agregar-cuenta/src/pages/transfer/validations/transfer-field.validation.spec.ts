import { REQUIRED_FIELD_MESSAGE, INVALID_IBAN_MESSAGE, INVALID_AMOUNT_MESSAGE, INVALID_EMAIL_MESSAGE } from "@/common/validations/validations.const";
import {
  validateIBANField,
  validateAccountIdField,
  validateNameField,
  validateAmountField,
  validateConceptField,
  validateRealDateTransferField,
  validateEmailField,
} from "./transfer-field.validation";

describe("transfer-field.validation specs", () => {
  describe("validateIBANField", () => {
    it("Should return false when IBAN is empty", () => {
      // Arrange
      const value = "";

      // Act
      const result = validateIBANField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it("Should return false when IBAN is not well formed", () => {
      // Arrange
      const value = "ES91 2100 0418 4502 0003 1333";

      // Act
      const result = validateIBANField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_IBAN_MESSAGE);
    });
  });

  describe("validateAccountIdField", () => {
    it("Should return false when Id Field is empty", () => {
      // Arrange
      const value = "";

      // Act
      const result = validateAccountIdField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it("Should return true when Id Field is informed", () => {
      // Arrange
      const value = "1";

      // Act
      const result = validateAccountIdField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateNameField", () => {
    it("Should return false when name field is empty", () => {
      // Arrange
      const value = "";

      // Act
      const result = validateNameField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it("Should return true when name field is informed", () => {
      // Arrange
      const value = "Name";

      // Act
      const result = validateNameField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateAmountField", () => {
    it("Should return false when amount is less or equal to zero", () => {
      // Arrange
      const value = -1;

      // Act
      const result = validateAmountField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_AMOUNT_MESSAGE);
    });

    it("Should return true when amount is greater than zero", () => {
      // Arrange
      const value = 1;

      // Act
      const result = validateAmountField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateConceptField", () => {
    it("Should return false when Concept Field is empty", () => {
      // Arrange
      const value = "";

      // Act
      const result = validateConceptField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it("Should return true when Concept Field is informed", () => {
      // Arrange
      const value = "Concept";

      // Act
      const result = validateConceptField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateRealDateTransferField", () => {
    it("Should return true when date is not informed", () => {
      // Arrange
      const value = undefined;

      // Act
      const result = validateRealDateTransferField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });

    it("Should return false when date is before today", () => {
      // Arrange
      const value = new Date();
      value.setDate(value.getDate() - 1);

      // Act
      const result = validateRealDateTransferField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
    });

    it("Should return true when date is after today", () => {
      // Arrange
      const value = new Date();
      value.setDate(value.getDate() + 1);

      // Act
      const result = validateRealDateTransferField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateEmailField", () => {
    it("Should return false when email field is empty", () => {
      // Arrange
      const value = "";

      // Act
      const result = validateEmailField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_EMAIL_MESSAGE);
    });

    it("Should return true when email field is informed", () => {
      // Arrange
      const value = "email@email.com";

      // Act
      const result = validateEmailField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

});

