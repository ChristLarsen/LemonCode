import { isValidIBAN } from "ibantools";
import { validarFormatoIBAN } from "./comprobacion-iban";
import { DatosIBAN } from "./comprobacion-iban-model";
import { obtenerDescripcionBanco } from "./bancos";

// Función que crea un párrafo que contiene un texto 
const crearElementoParrafo = ( texto: string) : HTMLParagraphElement => {

    const parrafo = document.createElement("p");
    parrafo.textContent = texto ;

    return parrafo;
};

// Función que crea un salto de línea
const crearElementoSaltoLinea = () : HTMLBRElement => {

    const saltoLinea = document.createElement("br");
    
    return saltoLinea;
};

// Función que crea el contenedor para los datos del IBAN
const crearContenedorResultadoIBAN = (iban : DatosIBAN) : HTMLDivElement => {

    const elementoIBAN = document.createElement("div");

    if (!iban.formatoOK) {
        const resultadoMalFormado = crearElementoParrafo('El IBAN no está bien formado.');
        elementoIBAN.appendChild(resultadoMalFormado);
        return elementoIBAN;
    };
    
    const resultadoBienFormado = crearElementoParrafo('El IBAN está bien formado.');
    elementoIBAN.appendChild(resultadoBienFormado);
    elementoIBAN.appendChild(crearElementoSaltoLinea());

    // Compruebo si el IBAN es correcto 
    if (!isValidIBAN(iban.iban)) {
        const resultadoNoValido = crearElementoParrafo('El IBAN no es válido. ');
        elementoIBAN.appendChild(resultadoNoValido);
        
        return elementoIBAN;
    };

    const resultadoValido = crearElementoParrafo('El IBAN es válido.');
    elementoIBAN.appendChild(resultadoValido);
    elementoIBAN.appendChild(crearElementoSaltoLinea());

    const resultadoBanco = crearElementoParrafo(`Banco: ${obtenerDescripcionBanco(iban.codigoBanco)}`);
    elementoIBAN.appendChild(resultadoBanco);
    elementoIBAN.appendChild(crearElementoSaltoLinea());

    const resultadoSucursal = crearElementoParrafo(`Código Sucursal: ${iban.codigoSucursal}`);
    elementoIBAN.appendChild(resultadoSucursal);
    elementoIBAN.appendChild(crearElementoSaltoLinea());

    const resultadoDigitoControl= crearElementoParrafo(`Dígitos de control: ${iban.digitosControl}`);
    elementoIBAN.appendChild(resultadoDigitoControl);
    elementoIBAN.appendChild(crearElementoSaltoLinea());

    const resultadoCuenta= crearElementoParrafo(`Número de cuenta: ${iban.cuenta}`);
    elementoIBAN.appendChild(resultadoCuenta);

    return elementoIBAN;
};

// Función que "pinta" los datos del IBAN en el contenedor "datos-iban"
const pintarDatosIBAN = (iban : DatosIBAN) => {
    const datosiban = document.querySelector("#datos-iban");

    if (datosiban && datosiban instanceof HTMLDivElement) {
        // Limpio los datos previos que pueda haber
        datosiban.innerHTML = "";
        datosiban.appendChild(crearContenedorResultadoIBAN(iban));
    } else {
        throw new Error("No se ha encontrado el contenedor datos-iban");
    };
};

// Cuando esté el DOM completamente cargado, asigno los eventos
document.addEventListener("DOMContentLoaded", () => {

    // Añade evento al "input" para que funcione al pulsar Intro
    const inputCajaIBAN = document.getElementById('caja-iban');
    if (inputCajaIBAN && inputCajaIBAN instanceof HTMLInputElement) {
        inputCajaIBAN.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                const iban = inputCajaIBAN.value;
                const resultado : DatosIBAN = validarFormatoIBAN(iban);

                pintarDatosIBAN(resultado);

                console.log(resultado);

            };
        });
    } else {
        throw new Error("No se ha encontrado el elemento caja-iban");
    };

});