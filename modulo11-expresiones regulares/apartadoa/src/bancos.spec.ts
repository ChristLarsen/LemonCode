import {
  obtenerDescripcionBanco
} from "./bancos";

describe("obtenerDescriptionBanco", () => {
  test.each([
    ["xxxx", "Banco no encontrado"],
    ["2222", "Banco no encontrado"],
    ["9999", "Banco no encontrado"],
    ["0061", "Banca March"],
    ["2103", "Unicaja Banco"],
  ])(
    "Debería devolver para el código de banco %p el valor %p",
    (codigoBanco: string, esperado: string) => {
      expect(obtenerDescripcionBanco(codigoBanco)).toBe(esperado);
    }
  );
});

