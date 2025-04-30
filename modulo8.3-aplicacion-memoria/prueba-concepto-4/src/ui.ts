import { cartasAnimales } from "./model";

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
