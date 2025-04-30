import { cartasAnimales } from "./model";
import { ponerBocaArriba, ponerBocaAbajo } from "./ui";

// Función que permite voltear una carta (dada una carta concreta)
export const voltearCarta = (id: number): void => {
  ponerBocaArriba(id);

  // Comprueba si hay ya dos cartas boca arriba. Si es así, las pone boca abajo
  // Cuenta cuántas cartas están boca arriba
  const cartasBocaArriba = cartasAnimales.filter(
    (carta) => carta.estado === "bocaArriba"
  );
  // Si hay dos, las pone boca abajo...
  if (cartasBocaArriba.length === 2) {
    // Espero 500 ms
    setTimeout(() => {
      // Pongo ambas cartas "boca abajo"
      cartasBocaArriba.forEach((carta) => {
        ponerBocaAbajo(carta.id);
      });
    }, 500);
  }
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
