import { cartasAnimales } from "./model";
import { voltearCarta } from "./motor";

// Función que permite poner una carta boca arriba (dado su "id")
export const ponerBocaArriba = (id : number) : void => {
  // Busca la carta en el array de cartasAnimales y cambia su estado a "bocaArriba".  
  // Si la carta ya está boca arriba, no hace nada
  // Si está boca abajo, cambia su estado a "bocaArriba" y cambia la imagen de la carta
  const carta = cartasAnimales.find((carta) => carta.id === id && carta.estado === "bocaAbajo");
  if (!carta) {
    return;
  } else {
    const idCarta = `imagen-carta${id}`;
    const imagenCarta = document.getElementById(idCarta) as HTMLImageElement;
    if (imagenCarta) {
      carta.estado = "bocaArriba";
      imagenCarta.src = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/${carta.imagen}.png`;
    } else {
      console.error("No se ha encontrado el elemento con ID " + idCarta);
    };
  };
};

// Función que permite poner una carta boca abajo (dado su "id")
export const ponerBocaAbajo = (id : number) : void => {
  // Busca la carta en el array de cartasAnimales y cambia su estado a "bocaAbajo".  
  const carta = cartasAnimales.find((carta) => carta.id === id && carta.estado === "bocaArriba");
  if (!carta) {
    return;
  } else {
    const idCarta = `imagen-carta${id}`;
    const imagenCarta = document.getElementById(idCarta) as HTMLImageElement;
    if (imagenCarta) {
      carta.estado = "bocaAbajo";
      imagenCarta.src = "";
    } else {
      console.error("No se ha encontrado el elemento con ID " + idCarta);
    };
  };
};

// Asocia eventos a las cartas
const asociaEventos = () => {
  for (let i = 0; i < cartasAnimales.length; i++) {
    const cartaDocumento = "carta" + cartasAnimales[i].id;
    const carta = document.getElementById(cartaDocumento) as HTMLImageElement;
    if (carta) {
      carta.addEventListener("click", () => voltearCarta(cartasAnimales[i].id));
    } else {
      console.error("No se ha encontrado el elemento con ID " + cartaDocumento);
    }
  }
};

// Agrega las cartas al documento e inicia el juego
export const iniciaJuego = () => {
  const cartas = document.getElementById("cartas");

  if (cartas) {
    // Agrego 2 cartas al div "cartas"
    for (let i = 0; i < 2; i++) {
      // Creo un div para la carta y le agrego la clase "carta" (para darle los estilos correspondientes).
      const carta = document.createElement("div");
      carta.classList.add("carta");
      carta.id = "carta" + (i + 1);
      // Creo un img para la carta y le agrego el "id" correspondiente
      const cartaImg = document.createElement("img");
      cartaImg.id = "imagen-carta" + (i + 1);
      // Agrego el img al div
      carta.appendChild(cartaImg);

      // Agrego "carta" al contenedor "cartas"
      cartas.appendChild(carta);
    }

    // Inicia el juego asociando los eventos
    asociaEventos();
  } else {
    console.error("No se encontró el elemento con ID grid.");
  }
};
