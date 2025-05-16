import { commonPasswords, validarClave } from "./clavefuerte/index";

// Comprueba la clave
console.log(validarClave("christian", "Abc!L700aaa", commonPasswords));

console.log(validarClave("christian", "Ab1!LchristiaNaaa", commonPasswords));
