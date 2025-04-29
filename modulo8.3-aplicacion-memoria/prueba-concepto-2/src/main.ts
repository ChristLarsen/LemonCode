// Prueba de concepto 2: Mostrar imagen y volver la carta.

const voltearCarta = () : void => {

    // Obtiene el elemento de la carta por su "id"
    let imagencarta = document.getElementById("imagen-carta") as HTMLImageElement;
    if (carta) {
        // Si la carta no tiene imagen, le asigno la imagen de la carta
        if (!imagencarta.src.includes("1.png")) {
            imagencarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png";
            imagencarta.alt = "León";
        // Si la carta tiene imagen, le quito la imagen de la carta
        } else {
            imagencarta.src = "";
            imagencarta.alt = "";
        };
    };
};

const carta = document.getElementById("carta");
if (carta) {
    carta.addEventListener("click", voltearCarta);
} else {
    console.error('No se ha encontrado el elemento con ID carta.');
};

