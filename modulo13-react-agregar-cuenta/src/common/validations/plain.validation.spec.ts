import { isValidIban, isPositiveNumber, isDateAfterToday, isEmailWellFormed, isStringValueInformed, isValueNotNullOrUndefined } from "./plain.validation";

describe("plain.validation", () => {

    describe("isValidIban specs", () => {

        it("Should return true when iban is valid", () => {
            // Arrange
            const iban = "ES91 2100 0418 4502 0005 1332";

            // Act
            const result = isValidIban(iban);

            // Assert
            expect(result).toBeTruthy();

        });

        it("Should return true when iban is formatted with dashes and is valid", () => {
            // Arrange
            const iban = "ES91-2100-0418-4502-0005-1332";

            // Act
            const result = isValidIban(iban);

            // Assert
            expect(result).toBeTruthy();

        });

        it("Should return true when iban is formatted with no spaces and is valid", () => {
            // Arrange
            const iban = "ES9121000418450200051332";

            // Act
            const result = isValidIban(iban);

            // Assert
            expect(result).toBeTruthy();

        });

        it("Should return false when iban is invalid", () => {
            // Arrange
            const iban = "ES91 2100 0418 4502 0005 1333";

            // Act
            const result = isValidIban(iban);

            // Assert
            expect(result).toBeFalsy();

        });

        it("Should return false when iban is empty", () => {
            // Arrange
            const iban = "";

            // Act
            const result = isValidIban(iban);

            // Assert
            expect(result).toBeFalsy();

        });

        
            
    });

    describe("isPositiveNumber specs", () => {

        it("Should return true when amount is positive", () => {
            // Arrange
            const amount = 100;

            // Act
            const result = isPositiveNumber(amount);

            // Assert
            expect(result).toBeTruthy();
        });

        it("Should return false when amount is not positive", () => {
            // Arrange
            const amount = -100;

            // Act
            const result = isPositiveNumber(amount);

            // Assert
            expect(result).toBeFalsy();
        });


    });

    describe("isDateAfterToday specs", () => {

        it("Should return true when date is after today", () => {
            // Arrange
            const date = new Date();
            date.setDate(date.getDate() + 1);

            // Act
            const result = isDateAfterToday(date);

            // Assert
            expect(result).toBeTruthy();
        });

        it("Should return false when date is not after today (including today)", () => {
            // Arrange
            const date = new Date();

            // Act
            const result = isDateAfterToday(date);

            // Assert
            expect(result).toBeFalsy();
        });


    });

    describe("isEmailWellFormed specs", () => {

        it("Should return true when email is valid", () => {
            // Arrange
            const email = "john@gmail.com";
            // Act
            const result = isEmailWellFormed(email);

            // Assert
            expect(result).toBeTruthy();
        });

        it("Should return false when email is not valid", () => {
            // Arrange
            const email = "john@gmail";

            // Act
            const result = isEmailWellFormed(email);

            // Assert
            expect(result).toBeFalsy();
        });


    });

    describe("isStringValueInformed specs", () => {

        it("Should return true when string value is informed", () => {
            // Arrange
            const value = "a";
            // Act
            const result = isStringValueInformed(value);

            // Assert
            expect(result).toBeTruthy();
        });

        it("Should return false when string value is not informed", () => {
            // Arrange
            const value = "";

            // Act
            const result = isStringValueInformed(value);

            // Assert
            expect(result).toBeFalsy();
        });


    });

    describe("isValueNotNullOrUndefined specs", () => {

        it("Should return true value is not null or undefined", () => {
            // Arrange
            const value = "a";
            // Act
            const result = isValueNotNullOrUndefined(value);

            // Assert
            expect(result).toBeTruthy();
        });

        it("Should return false when value is null", () => {
            // Arrange
            const value = null;

            // Act
            const result = isValueNotNullOrUndefined(value);

            // Assert
            expect(result).toBeFalsy();
        });

        it("Should return false when value is undefined", () => {
            // Arrange
            const value = undefined;

            // Act
            const result = isValueNotNullOrUndefined(value);

            // Assert
            expect(result).toBeFalsy();
        });

    });    

});