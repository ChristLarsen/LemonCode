// Prueba de concepto 3: Mostrar el grid de 12 cartas.

// Creo una función que agregar el grid de 12 cartas.
const agregaGrid = () => {
  const grid = document.getElementById("grid");

  if (grid) {
    for (let i = 0; i < 12; i++) {
      // Creo un div para la carta y le agrego la clase "carta" (para darle los estilos correspondientes).
      const carta = document.createElement("div");
      carta.classList.add("carta");

      // Agrego el div al grid
      grid.appendChild(carta);
    }
  } else {
    console.error("No se encontró el elemento con ID grid.");
  }
};

document.addEventListener("DOMContentLoaded", agregaGrid);
