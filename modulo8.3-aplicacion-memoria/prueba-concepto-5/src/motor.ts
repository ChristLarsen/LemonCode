import { Carta, Tablero } from "./model";
import {
  habilitaBoton,
  deshabilitaBoton,
  ponerBocaAbajo,
  ponerBocaArriba,
  mostrarMensaje,
  asignaImagenesBocaAbajo,
} from "./ui";

// Barajamos las cartas (visto por internet, algoritmo "Fisher-Yates")
// (devuelvo el mismo array con las cartas barajadas)
export const barajarCartas = (cartas: Carta[]): Carta[] => {
  for (let i = cartas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
  }
  return cartas;
};

// Función que nos devuelve si una carta se puede dar la vuelta o no
const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number): boolean => {
  // Si la carta está ya encontrada, devuelve false
  if (tablero.cartas[indice - 1].encontrada) {
    return false;
  }
  // Si la carta ya está boca arriba, devuelve false
  if (tablero.cartas[indice - 1].bocaArriba) {
    return false;
  }
  // Si hay dos cartas levantadas, devuelve false
  if (tablero.estadoPartida === "DosCartasLevantadas") {
    return false;
  }
  // En otro caso, devuelve true
  return true;
};

// Función que devuelve si la partida está completa o no
const esPartidaCompleta = (tablero: Tablero): boolean => {
  if (tablero.cartas.every((carta) => carta.encontrada)) {
    return true;
  }
  return false;
};

// Función que devuelve si dos cartas son pareja o no
const sonPareja = (
  indiceA: number,
  indiceB: number,
  tablero: Tablero
): boolean => {
  if (
    tablero.cartas[indiceA - 1].imagen === tablero.cartas[indiceB - 1].imagen
  ) {
    return true;
  }
  return false;
};

// Función que marca las cartas como encontradas y comprueba si la partida está terminada.
const parejaEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  tablero.cartas[indiceA - 1].encontrada = true;
  tablero.cartas[indiceB - 1].encontrada = true;

  if (esPartidaCompleta(tablero)) {
    tablero.estadoPartida = "PartidaCompleta";
    // Muestra mensaje indicando que la partida ha finalizado y en cuántos intentos se ha
    // conseguido.
    mostrarMensaje(
      `Partida completa, has terminado en ${tablero.intentos} intentos.`,
      "mensaje"
    );

    // Habilita el botón de reiniciar partida
    habilitaBoton("iniciar", "Iniciar Partida");
  } else {
    tablero.estadoPartida = "CeroCartasLevantadas";
  }
};

// Función que pone las cartas indicadas boca abajo
const parejaNoEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  setTimeout(() => {
    // Pongo las cartas boca abajo, cuando pase 500 milisegundos
    ponerBocaAbajo(tablero, indiceA);
    ponerBocaAbajo(tablero, indiceB);
  }, 500);
  tablero.estadoPartida = "CeroCartasLevantadas";
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
};

const mostrarIntentos = (tablero: Tablero): void => {
  mostrarMensaje(`Intentos : ${tablero.intentos}`, "mensaje");
};

// Función que acumula el número de intentos realizados
const agregarIntento = (tablero: Tablero): void => {
  tablero.intentos++;
  mostrarIntentos(tablero);
};

// Función que voltea la carta
export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  // Si no se puede voltear la carta, no hace nada
  if (!sePuedeVoltearLaCarta(tablero, indice)) {
    if (tablero.estadoPartida === "PartidaCompleta") {
      // Muestro un mensaje de error ....
      mostrarMensaje("Pulsa en Iniciar Partida!!", "mensaje");
    } else {
      // Muestro un mensaje de error ....
      mostrarMensaje("No se puede voltear ...", "mensaje");
    }

    // Y elimino el mensaje después de 1 segundo
    setTimeout(() => {
      mostrarIntentos(tablero);
    }, 1000);

    return;
  }

  // Cambio el estado del juego y guardo las cartas que voy levantando...
  if (tablero.estadoPartida === "CeroCartasLevantadas") {
    tablero.estadoPartida = "UnaCartaLevantada";
    tablero.indiceCartaVolteadaA = indice;
  } else if (tablero.estadoPartida === "UnaCartaLevantada") {
    tablero.estadoPartida = "DosCartasLevantadas";
    tablero.indiceCartaVolteadaB = indice;
  }

  // Si se puede voltear la carta, cambio estado de la carta, y muestra la imagen
  tablero.cartas[indice - 1].bocaArriba = true;
  ponerBocaArriba(tablero, indice);

  // Si hay dos cartas levantadas, tengo que hacer comprobaciones
  if (tablero.estadoPartida === "DosCartasLevantadas") {
    // Agrego un intento a la partida
    agregarIntento(tablero);

    // Compruebo si son pareja o no
    if (tablero.indiceCartaVolteadaA && tablero.indiceCartaVolteadaB) {
      if (
        sonPareja(
          tablero.indiceCartaVolteadaA,
          tablero.indiceCartaVolteadaB,
          tablero
        )
      ) {
        parejaEncontrada(
          tablero,
          tablero.indiceCartaVolteadaA,
          tablero.indiceCartaVolteadaB
        );
      } else {
        parejaNoEncontrada(
          tablero,
          tablero.indiceCartaVolteadaA,
          tablero.indiceCartaVolteadaB
        );
      }
    }
  }
};

// Función que inicia la partida
export const iniciaPartida = (tablero: Tablero): void => {
  // Pone todas las cartas boca abajo
  for (let i = 0; i < tablero.cartas.length; i++) {
    ponerBocaAbajo(tablero, i + 1);
    tablero.cartas[i].bocaArriba = false;
    tablero.cartas[i].encontrada = false;
  }

  // Para dar tiempo a que todas las cartas se pongan boca abajo, espero medio segundo ...
  setTimeout(() => {
    // Baraja las cartas
    barajarCartas(tablero.cartas);

    // Asigna las imágenes a las cartas después de haberlas barajado
    asignaImagenesBocaAbajo(tablero);

    // Cambia el estado de la partida a "CeroCartasLevantadas"
    tablero.estadoPartida = "CeroCartasLevantadas";

    // Cambia el estado de las cartas a boca abajo y no encontradas
    tablero.cartas.forEach((carta) => {
      carta.bocaArriba = false;
      carta.encontrada = false;
    });
    tablero.intentos = 0;

    // Muestra el mensaje de intentos
    mostrarMensaje("Intentos : " + tablero.intentos, "mensaje");
    // Deshabilito el botón de iniciar partida
    deshabilitaBoton("iniciar", "Partida Comenzada ...");
  }, 500);
};
