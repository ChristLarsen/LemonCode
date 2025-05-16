
import { commonPasswords } from "./model";
import { validarClave } from "./clavefuerte";

// Tests para "validarClave"
describe("validarClave", () => {

    it ("Debería devolver error si se pasa una clave no válida", () => {

        // Arrange
        const usuario : string = "juan";
        const clave1 : any = undefined;
        const clave2 : any = null;
                
        // Act
        const result1 = () => validarClave(usuario, clave1, commonPasswords);
        const result2 = () => validarClave(usuario, clave2, commonPasswords);

        // Assert
        expect(result1).toThrowError("No se recibió una clave válida");
        expect(result2).toThrowError("No se recibió una clave válida");

    });

    it ("Debería devolver error si se pasa un usuario no válido", () => {

        // Arrange
        const usuario1 : any = undefined;
        const usuario2 : any = null;
        const clave : string = "Aa1!44444";
               
        // Act
        const result1 = () => validarClave(usuario1, clave, commonPasswords);
        const result2 = () => validarClave(usuario2, clave, commonPasswords);

        // Assert
        expect(result1).toThrowError("No se recibió un nombre de usuario válido");
        expect(result2).toThrowError("No se recibió un nombre de usuario válido");

    });    

    it ("Debería devolver clave inválida si no tiene mayúsculas y minúsculas", () => {

        // Arrange
        const usuario : string = "juan";
        const clave1 : string = "prueba";
        const clave2 : string = "PRUEBA";

        // Act
        const result1 = validarClave(usuario, clave1, commonPasswords);
        const result2 = validarClave(usuario, clave2, commonPasswords);

        // Assert
        expect(result1.esValida).toBe(false);
        expect(result1.error).toBe("La clave no tiene mayúsculas");
        expect(result2.esValida).toBe(false);
        expect(result2.error).toBe("La clave no tiene minúsculas");        
    });

    it ("Debería devolver clave inválida si no tiene números", () => {

        // Arrange
        const usuario : string = "juan";
        const clave : string = "Prueba";  

        // Act
        const result = validarClave(usuario, clave, commonPasswords);
        
        // Assert
        expect(result.esValida).toBe(false);
        expect(result.error).toBe("La clave no tiene números");
        
    });    

    it ("Debería devolver clave inválida si no tiene caractertes especiales", () => {

        // Arrange
        const usuario : string = "juan";
        const clave : string = "Prueba11";  

        // Act
        const result = validarClave(usuario, clave, commonPasswords);
        
        // Assert
        expect(result.esValida).toBe(false);
        expect(result.error).toBe("La clave no tiene caracteres especiales");
        
    });        

    it ("Debería devolver clave inválida si no tiene la longitud mínima", () => {

        // Arrange
        const usuario : string = "juan";
        const clave : string = "Prueb1!";  

        // Act
        const result = validarClave(usuario, clave, commonPasswords);
        
        // Assert
        expect(result.esValida).toBe(false);
        expect(result.error).toBe("La clave no tiene la longitud mínima de 8 caracteres");
        
    });            

    it ("Debería devolver clave inválida si contiene el nombre del usuario", () => {

        // Arrange
        const usuario : string = "juan";
        const clave : string = "Prueb1!juan";  

        // Act
        const result = validarClave(usuario, clave, commonPasswords);
        
        // Assert
        expect(result.esValida).toBe(false);
        expect(result.error).toBe("La clave contiene el nombre de usuario");
        
    });                

    it ("Debería devolver clave inválida si contiene palabras comunes", () => {

        // Arrange
        const usuario : string = "juan";
        const clave : string = "Prueb1!qwerty";  

        // Act
        const result = validarClave(usuario, clave, commonPasswords);
        
        // Assert
        expect(result.esValida).toBe(false);
        expect(result.error).toBe("La clave contiene una palabra común");
        
    });                    

    it ("Debería devolver clave válida en este caso", () => {

        // Arrange
        const usuario : string = "juan";
        const clave : string = "Prueb1!qwAAerty";  

        // Act
        const result = validarClave(usuario, clave, commonPasswords);
        
        // Assert
        expect(result.esValida).toBe(true);
        
    });                        

});
