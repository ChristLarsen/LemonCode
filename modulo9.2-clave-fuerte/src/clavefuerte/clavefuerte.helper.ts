
import { ValidacionClave, caracteresEspeciales } from "./model";

// Función que valida si la clave tiene mayúsculas
const tieneMayusculas= (clave: string): boolean => {
    let tieneMayusculas : boolean = false;
    
    for (let i = 0; i < clave.length; i++) {
        if (clave[i] >= "A" && clave[i] <= "Z")  {
            tieneMayusculas = true;
            break;
        };
    };
    return tieneMayusculas;
};

// Función que valida si la clave tiene minúsculas
const tieneMinusculas = (clave: string): boolean => {
    let tieneMinusculas : boolean = false;
    
    for (let i = 0; i < clave.length; i++) {
        if (clave[i] >= "a" && clave[i] <= "z") {
            tieneMinusculas = true;
            break;
        };
    };
    return tieneMinusculas;
};

// Función que comprueba que la clave tiene que tener mayúsculas y minúsculas
export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
    let validacion : ValidacionClave = {
        esValida: true,
    };
    // Compruebo que la clave es válida
    if (!clave) {
        throw new Error("No se recibió una clave válida");
    };
    // Compruebo que la clave no tiene mayúsculas
    if (!tieneMayusculas(clave)) {
       validacion.esValida = false;
       validacion.error = "La clave no tiene mayúsculas";
       return validacion; 
    };
    // Compruebo que la clave no tiene minúsculas
    if (!tieneMinusculas(clave)) {
       validacion.esValida = false;
       validacion.error = "La clave no tiene minúsculas";
       return validacion; 
    };    
    
    return validacion;
};

// Función que comprueba que la clave tiene que tener números
export const tieneNumeros = (clave: string): ValidacionClave => {
    let tieneNumeros : boolean = false;    
    let validacion : ValidacionClave = {
        esValida: true
    };
    // Compruebo que la clave es válida
    if (!clave) {
        throw new Error("No se recibió una clave válida");
    };
    // Compruebo que la clave tenga números
    for (let i = 0; i < clave.length; i++) {
        if (clave[i] >= "0" && clave[i] <= "9") {
            tieneNumeros = true;
            break;
        };
    };    
    if (!tieneNumeros) {
        validacion.esValida = false;
        validacion.error = "La clave no tiene números";
        return validacion; 
    };
    return validacion;
};

// Función que comprueba que la clave tenga caracteres especiales
export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
    let tieneCaracteresEspeciales : boolean = false;    
    let validacion : ValidacionClave = {
        esValida: true
    };
    // Compruebo que la clave es válida
    if (!clave) {
        throw new Error("No se recibió una clave válida");
    };
    // Tengo un string con los caracteres especiales válidos definidos en el modelo.
    // Compruebo que la clave tenga alguno de esos caracteres
    for (let i = 0; i < clave.length; i++) {
        if (caracteresEspeciales.indexOf(clave[i]) !== -1) {
            // Si el caracter está en la lista de caracteres especiales, lo marco como encontrado   
            tieneCaracteresEspeciales = true;
            break;
        };
    };
    if (!tieneCaracteresEspeciales) {
        validacion.esValida = false;
        validacion.error = "La clave no tiene caracteres especiales";
        return validacion; 
    };
    return validacion;    
};

// Función que comprueba que la longitud de la clave sea válida
export const tieneLongitudMinima = (clave: string): ValidacionClave => {
    let conLongitudMinima : boolean = true;    
    let validacion : ValidacionClave = {
        esValida: true
    };
    // Compruebo que la clave es válida
    if (!clave) {
        throw new Error("No se recibió una clave válida");
    };
    if (clave.length < 8) {
        conLongitudMinima = false;
    };
    if (!conLongitudMinima) {
        validacion.esValida = false;
        validacion.error = "La clave no tiene la longitud mínima de 8 caracteres";
        return validacion; 
    }
    return validacion;
};

// Función que comprueba que una clave contiene la palabra pasada por parámetro
const contienePalabra = (clave: string, palabra : string) : boolean => {
    // Compruebo si la clave contiene una palabra concreta
    // Paso la clave y la palabra a minúsculas para hacer la comparación
    const claveMinusculas : string = clave.toLowerCase();
    const palabraMinusculas : string = palabra.toLowerCase();
    if (claveMinusculas.indexOf(palabraMinusculas) !== -1) {
        return true;
    };
    return false;
};

// Función que comprueba que la clave contiene el nombre del usuario
export const tieneNombreUsuario = ( nombreUsuario: string, clave: string ) : ValidacionClave => {
    let contieneNombre : boolean = false;    
    let validacion : ValidacionClave = {
        esValida: true
    };
    // Compruebo que la clave es válida y el nombre de usuario es válido
    if (!clave) {
        throw new Error("No se recibió una clave válida");
    }; 
    if (!nombreUsuario) {
        throw new Error("No se recibió un nombre de usuario válido");
    };
    // Compruebo si la clave contiene el nombre de usuario 
    contieneNombre = contienePalabra(clave, nombreUsuario);
    if (contieneNombre) {
        validacion.esValida = false;
        validacion.error = "La clave contiene el nombre de usuario";
        return validacion; 
    };
    return validacion;
};

// Función que comprueba que la clave no contiene palabras comunes
export const tienePalabrasComunes = ( clave: string, commonPasswords: string[] ) : ValidacionClave => {
    let contienePalabrasComunes : boolean = false;
    let validacion : ValidacionClave = {
        esValida: true
    };
    // Compruebo que la clave es válida y el nombre de usuario es válido
    if (!clave) {
        throw new Error("No se recibió una clave válida");
    }; 
    if (!commonPasswords) {
        throw new Error("No se recibió una lista de palabras comunes válida");
    };  
    // Recorro la lista de palabras pasada por parametro y compruebo si la clave contiene alguna de ellas
    for (let i = 0; i < commonPasswords.length; i++) {
        contienePalabrasComunes = contienePalabra(clave, commonPasswords[i]);
        if (contienePalabrasComunes) {
            validacion.esValida = false;
            validacion.error = "La clave contiene una palabra común";
            return validacion; 
        };
    };
    return validacion;
};