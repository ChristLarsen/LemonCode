
import { ValidacionClave  } from "./model";
import { tieneMayusculasYMinusculas, tieneNumeros, tieneCaracteresEspeciales, tieneLongitudMinima, tieneNombreUsuario, tienePalabrasComunes } from "./clavefuerte.helper";

// Realiza la validación de una clave, dado un nombre de usuario y una lista de contraseñas comunes a excluir
export const validarClave = (nombreUsuario: string, clave: string, commonPasswords: string[] ): ValidacionClave => {
  let validacion : ValidacionClave = {
    esValida : true
  };
  // Comprueba que la clave tiene mayúsculas y minúsculas
  validacion = tieneMayusculasYMinusculas(clave);
  if (!validacion.esValida) {
    return validacion;
  };
  // Comprueba que la clave tiene números
  validacion = tieneNumeros(clave);
  if (!validacion.esValida) {
    return validacion;
  };
  // Comprueba que la clave tiene caracteres especiales
  validacion = tieneCaracteresEspeciales(clave);
  if (!validacion.esValida) {
    return validacion;
  };
  // Comprueba que la clave tiene longitud mínima
  validacion = tieneLongitudMinima(clave);
  if (!validacion.esValida) {
    return validacion;
  };
  // Comprueba que la clave no contenga el nombre del usuario
  validacion = tieneNombreUsuario(nombreUsuario, clave);
  if (!validacion.esValida) { 
    return validacion;
  };
  // Comprueba que la clave no contenga las palabras comunes pasadas
  validacion = tienePalabrasComunes(clave, commonPasswords);
  if (!validacion.esValida) {
    return validacion;
  };

  return validacion;

};
