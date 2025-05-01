import { tablero, Tablero } from "./model";
import { iniciaPartida, voltearLaCarta } from "./motor";

// Función que permite mostrar un mensaje en la pantalla
export const mostrarMensaje = (mensaje: string, id: string): void => {
  const textoMensaje = document.getElementById(id);
  if (textoMensaje) {
    textoMensaje.textContent = mensaje;
  }
};

// Función que permite poner una carta boca arriba
export const ponerBocaArriba = (tablero: Tablero, indice: number): void => {
  const id = indice - 1;
  const carta = tablero.cartas[id];
  if (!carta) {
    return;
  } else {
    const idCarta = `carta${indice}`;
    const imagenCarta = document.getElementById(idCarta) as HTMLImageElement;
    if (imagenCarta) {
      // Agrego la clase "volteada" para mostrar la carta "boca arriba"
      imagenCarta.classList.add("volteada");
      carta.bocaArriba = true;
    } else {
      console.error("No se ha encontrado el elemento con ID " + idCarta);
    }
  }
};

// Función que permite poner una carta boca abajo
export const ponerBocaAbajo = (tablero: Tablero, indice: number): void => {
  const id = indice - 1;
  const carta = tablero.cartas[id];
  if (!carta) {
    return;
  } else {
    const idCarta = `carta${indice}`;
    const imagenCarta = document.getElementById(idCarta) as HTMLImageElement;
    if (imagenCarta) {
      // Elimino la clase "volteada", para mostrar la carta boca abajo
      imagenCarta.classList.remove("volteada");
      carta.bocaArriba = false;
    } else {
      console.error("No se ha encontrado el elemento con ID " + idCarta);
    }
  }
};

// Función que deshabilita botón indicado (y si se indica, se modifica el mensaje que aparece en el botón)
export const deshabilitaBoton = (id: string, mensaje: string): void => {
  const boton = document.getElementById(id) as HTMLButtonElement;
  if (boton) {
    boton.disabled = true;
    if (mensaje !== "") {
      boton.textContent = mensaje;
    }
  } else {
    console.error("No se ha encontrado el elemento con ID" + id);
  }
};

// Función que habilita botón indicado (y si se indica, se modifica el mensaje que aparece en el botón)
export const habilitaBoton = (id: string, mensaje: string): void => {
  const boton = document.getElementById(id) as HTMLButtonElement;
  if (boton) {
    boton.disabled = false;
    if (mensaje !== "") {
      boton.textContent = mensaje;
    }
  } else {
    console.error("No se ha encontrado el elemento con ID" + id);
  }
};

// Función que asigna imagen (boca abajo) a una carta
const asignaImagenBocaAbajo = (indice: number, imagen: number): void => {
  const imagenCarta = document.getElementById(
    "imagen-carta-arriba" + indice
  ) as HTMLImageElement;
  if (imagenCarta) {
    imagenCarta.src = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/${imagen}.png`;
  }
};

// Función que asigna las imágenes correspondientes a las cartas boca-abajo
export const asignaImagenesBocaAbajo = (tablero : Tablero): void => {

  for (let i = 0; i < tablero.cartas.length; i++) {
    asignaImagenBocaAbajo(i + 1, tablero.cartas[i].imagen);
  }
};

// Función que muestra el tablero en pantalla
const muestraTablero = () => {
  const tableroCartas = document.getElementById("tablero");

  if (tableroCartas) {
    for (let i = 0; i < 12; i++) {
      // Creo un div para la carta y le agrego la clase "carta" (para darle los estilos correspondientes).
      const carta = document.createElement("div");
      carta.classList.add("carta");
      carta.id = "carta" + (i + 1);

      // Creo un div que contiene las imagenes boca-arriba y boca-abajo de la carta
      const contenidoCarta = document.createElement("div");
      contenidoCarta.classList.add("contenido-carta");
      // Agrego el div al div "carta"
      carta.appendChild(contenidoCarta);

      // Creo un img para la carta boca-arriba (le asigno la imagen correspondiente)
      const cartaImgArriba = document.createElement("img");
      cartaImgArriba.id = "imagen-carta-arriba" + (i + 1);
      cartaImgArriba.classList.add("cara");
      cartaImgArriba.classList.add("cara-arriba");
      //asignaImagenBocaAbajo(i + 1, tablero.cartas[i].imagen);
      // Agrego el img al div
      contenidoCarta.appendChild(cartaImgArriba);

      // Creo un div para la carta boca-abajo
      const cartaImgAbajo = document.createElement("div");
      cartaImgAbajo.id = "imagen-carta-abajo" + (i + 1);
      cartaImgAbajo.classList.add("cara");
      cartaImgAbajo.classList.add("cara-abajo");
      // Agrego el img al div
      contenidoCarta.appendChild(cartaImgAbajo);

      // Agrego el div al grid
      tableroCartas.appendChild(carta);
    }
  } else {
    console.error("No se encontró el elemento con ID tablero.");
  }
};

// Función que asocia eventos "click" a las cartas, y al botón "empezar partida"
const asociaEventos = (tablero: Tablero) => {
  for (let i = 0; i < tablero.cartas.length; i++) {
    const cartaDocumento = "carta" + (i + 1);
    const carta = document.getElementById(cartaDocumento);
    if (carta) {
      carta.addEventListener("click", () => voltearLaCarta(tablero, i + 1));
    } else {
      console.error("No se ha encontrado el elemento con ID " + cartaDocumento);
    }
  }
  const botonEmpezarPartida = document.getElementById("iniciar");
  if (botonEmpezarPartida) {
    botonEmpezarPartida.addEventListener("click", () => iniciaPartida(tablero));
  } else {
    console.error("No se ha encontrado el elemento con ID empezar-partida.");
  }
};

// Función que inicia el juego
export const iniciaJuego = () => {
  // Muestro el tablero al inicio del juego (solo se hace una vez)
  muestraTablero();

  // Asocia los eventos a las cartas (solo se hace una vez)
  asociaEventos(tablero);

  // Inicia la partida (al iniciar el juego, se inicia la partida automáticamente)
  iniciaPartida(tablero);
};
