import {
  validarFormatoIBAN
} from "./comprobacion-iban";

describe("validarFormatoIBAN", () => {
  test.each([
    ["111", false],
    ["aaa", false],
    ["ES21 1465 0100 72 2030876293", true],
    ["ES2114650100722030876293", true],
    ["ES21-1465-0100-72-2030876293", true],
    ["ES6621000418401234567891", true],
    ["ES66210004184012345678911", false],
    ["ESA621000418401234567891", false],
    ["ESA621000418401234567891", false],
    ["ESA621000418401234567-891", false],
  ])(
    "Debería devolver para el IBAN %p que el resultado es %p",
    (iban: string, esperado: boolean) => {
      expect(validarFormatoIBAN(iban).formatoOK).toBe(esperado);
    }
  );
});

