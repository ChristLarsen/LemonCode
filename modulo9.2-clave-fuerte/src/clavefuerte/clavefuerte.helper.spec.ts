
import { commonPasswords } from "./model";
import { tieneMayusculasYMinusculas, tieneNumeros, tieneCaracteresEspeciales, tieneLongitudMinima, tieneNombreUsuario, tienePalabrasComunes } from "./clavefuerte.helper";

// Tests para "tieneMayusculasYMinusculas"
describe("tieneMayusculasYMinusculas", () => {

    it ("Debería devolver error si se pasa una clave no válida", () => {

        // Arrange
        const clave1 : any = undefined;
        const clave2 : any = null;

        // Act
        const result1 = () => tieneMayusculasYMinusculas(clave1);
        const result2 = () => tieneMayusculasYMinusculas(clave2);

        // Assert
        expect(result1).toThrowError("No se recibió una clave válida");
        expect(result2).toThrowError("No se recibió una clave válida");

    });

    it ("Debería devolver clave inválida si la clave no tiene mayusculas", () => {

        // Arrange
        const clave : string = "prueba";

        // Act
        const result = tieneMayusculasYMinusculas(clave);

        // Assert
        expect(result.esValida).toBe(false);
        expect(result.error).toBe("La clave no tiene mayúsculas");
    });

    it ("Debería devolver clave inválida si la clave no tiene minúsculas", () => {

        // Arrange
        const clave : string = "PRUEBA";

        // Act
        const result = tieneMayusculasYMinusculas(clave);

        // Assert
        expect(result.esValida).toBe(false);
        expect(result.error).toBe("La clave no tiene minúsculas");
    });    

    it ("Debería devolver clave válida si la clave tiene mayúsculas y minúsculas", () => {

        // Arrange
        const clave : string = "PRUEBAprueba";

        // Act
        const result = tieneMayusculasYMinusculas(clave);

        // Assert
        expect(result.esValida).toBe(true);

    });        

});

// Tests para "tieneNumeros"
describe("tieneNumeros", () => {

    it ("Debería devolver error si se pasa una clave no válida", () => {

        // Arrange
        const clave1 : any = undefined;
        const clave2 : any = null;

        // Act
        const result1 = () => tieneNumeros(clave1);
        const result2 = () => tieneNumeros(clave2);

        // Assert
        expect(result1).toThrowError("No se recibió una clave válida");
        expect(result2).toThrowError("No se recibió una clave válida");

    });

    it ("Debería devolver clave inválida si la clave no tiene números", () => {

        // Arrange
        const clave : string = "prueba";

        // Act
        const result = tieneNumeros(clave);

        // Assert
        expect(result.esValida).toBe(false);
        expect(result.error).toBe("La clave no tiene números");
    });

    it ("Debería devolver clave válida si la clave tiene números", () => {

        // Arrange
        const clave : string = "prueba123";

        // Act
        const result = tieneNumeros(clave);

        // Assert
        expect(result.esValida).toBe(true);
    });

});

// Tests para "tieneCaracteresEspeciales"
describe("tieneCaracteresEspeciales", () => {

    it ("Debería devolver error si se pasa una clave no válida", () => {

        // Arrange
        const clave1 : any = undefined;
        const clave2 : any = null;

        // Act
        const result1 = () => tieneCaracteresEspeciales(clave1);
        const result2 = () => tieneCaracteresEspeciales(clave2);

        // Assert
        expect(result1).toThrowError("No se recibió una clave válida");
        expect(result2).toThrowError("No se recibió una clave válida");

    });

    it ("Debería devolver clave inválida si la clave no tiene caracteres especiales", () => {

        // Arrange
        const clave : string = "prueba";

        // Act
        const result = tieneCaracteresEspeciales(clave);

        // Assert
        expect(result.esValida).toBe(false);
        expect(result.error).toBe("La clave no tiene caracteres especiales");
    });    

    it ("Debería devolver clave válida si la clave tiene caracteres especiales", () => {

        // Arrange
        const clave : string = "prueba?<";

        // Act
        const result = tieneCaracteresEspeciales(clave);

        // Assert
        expect(result.esValida).toBe(true);
    });        

});

// Tests para "tieneLongitudMinima"
describe("tieneLongitudMinima", () => {

    it ("Debería devolver error si se pasa una clave no válida", () => {

        // Arrange
        const clave1 : any = undefined;
        const clave2 : any = null;

        // Act
        const result1 = () => tieneLongitudMinima(clave1);
        const result2 = () => tieneLongitudMinima(clave2);

        // Assert
        expect(result1).toThrowError("No se recibió una clave válida");
        expect(result2).toThrowError("No se recibió una clave válida");

    });

    it ("Debería devolver clave inválida si la clave tiene menos de 8 caracteres", () => {

        // Arrange
        const clave : string = "1234567";

        // Act
        const result = tieneLongitudMinima(clave);

        // Assert
        expect(result.esValida).toBe(false);
        expect(result.error).toBe("La clave no tiene la longitud mínima de 8 caracteres");
    });    

    it ("Debería devolver clave válida si la clave tiene más de 8 caracteres", () => {

        // Arrange
        const clave : string = "12345678";

        // Act
        const result = tieneLongitudMinima(clave);

        // Assert
        expect(result.esValida).toBe(true);
    });        

});

// Tests para "tieneNombreUsuario"
describe("tieneNombreUsuario", () => {

    it ("Debería devolver error si se pasa una clave no válida", () => {

        // Arrange
        const usuario : string = "usuario";
        const clave1 : any = undefined;
        const clave2 : any = null;

        // Act
        const result1 = () => tieneNombreUsuario(usuario, clave1);
        const result2 = () => tieneNombreUsuario(usuario, clave2);

        // Assert
        expect(result1).toThrowError("No se recibió una clave válida");
        expect(result2).toThrowError("No se recibió una clave válida");

    });

    it ("Debería devolver error si se pasa un nombre de usuario no válida", () => {

        // Arrange
        const usuario1 : any = undefined;
        const usuario2 : any = undefined;
        const clave : string = "clave"; 
        
        // Act
        const result1 = () => tieneNombreUsuario(usuario1, clave);
        const result2 = () => tieneNombreUsuario(usuario2, clave);

        // Assert
        expect(result1).toThrowError("No se recibió un nombre de usuario válido");
        expect(result2).toThrowError("No se recibió un nombre de usuario válido");

    });    

    it ("Debería devolver clave inválida si la clave contiene el nombre del usuario", () => {

        // Arrange
        const usuario : string = "JuaN";
        const clave : string = "123jUAn4567";

        // Act
        const result = tieneNombreUsuario(usuario, clave);

        // Assert
        expect(result.esValida).toBe(false);
        expect(result.error).toBe("La clave contiene el nombre de usuario");
    });    

    it ("Debería devolver clave válida si la clave no contiene el nombre del usuario", () => {

        // Arrange
        const usuario : string = "JuaN";
        const clave : string = "123pepe4567";

        // Act
        const result = tieneNombreUsuario(usuario, clave);

        // Assert
        expect(result.esValida).toBe(true);
    });        

});

// Tests para "tienePalabrasComunes"
describe("tienePalabrasComunes", () => {

    it ("Debería devolver error si se pasa una clave no válida", () => {

        // Arrange
        const comunes : string[] = [];
        const clave1 : any = undefined;
        const clave2 : any = null;

        // Act
        const result1 = () => tienePalabrasComunes(clave1, comunes);
        const result2 = () => tienePalabrasComunes(clave2, comunes);

        // Assert
        expect(result1).toThrowError("No se recibió una clave válida");
        expect(result2).toThrowError("No se recibió una clave válida");

    });

    it ("Debería devolver error si se pasa un array de palabras comunes no válido", () => {

        // Arrange
        const clave : string = "prueba";
        const comunes1 : any = undefined;
        const comunes2 : any = null;
        
        // Act
        const result1 = () => tienePalabrasComunes(clave, comunes1);
        const result2 = () => tienePalabrasComunes(clave, comunes2);

        // Assert
        expect(result1).toThrowError("No se recibió una lista de palabras comunes válida");
        expect(result2).toThrowError("No se recibió una lista de palabras comunes válida");

    });    

    it ("Debería devolver clave inválida si la clave contiene una de las palabras comunes", () => {

        // Arrange
        const clave : string = "123mypass4567";

        // Act
        const result = tienePalabrasComunes(clave, commonPasswords);

        // Assert
        expect(result.esValida).toBe(false);
        expect(result.error).toBe("La clave contiene una palabra común");
    });    

    it ("Debería devolver clave válida si la clave no contiene el nombre del usuario", () => {

        // Arrange
        const clave : string = "123mypas4567";

        // Act
        const result = tienePalabrasComunes(clave, commonPasswords);

        // Assert
        expect(result.esValida).toBe(true);
    });        

});
