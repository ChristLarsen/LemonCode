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

