import {
    consoleErrorID,
    handleDameCarta,
    handleCompruebaMePlanto,
    handleIniciar,
    handleSimular
} from './motor';

import {
    iniciaPartida
} from './ui';

document.addEventListener("DOMContentLoaded", iniciaPartida);

const botonDameCarta = document.getElementById("damecarta");
if (botonDameCarta) {
    botonDameCarta.addEventListener("click", handleDameCarta);
} else {
    consoleErrorID('botonDameCarta', 'damecarta');
};

const botonPlantarse = document.getElementById("plantarse");
if (botonPlantarse) {
    botonPlantarse.addEventListener("click", handleCompruebaMePlanto);
} else {
    consoleErrorID('botonPlantarse', 'plantarse');
};

const botonIniciar = document.getElementById("iniciar");
if (botonIniciar) {
    botonIniciar.addEventListener("click", handleIniciar);
} else {
    consoleErrorID('botonIniciar', 'iniciar');
};

const botonSimular = document.getElementById("simular");
if (botonSimular) {
    botonSimular.addEventListener("click", handleSimular);
} else {
    consoleErrorID('botonSimular', 'simular');
};
