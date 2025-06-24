
import { extraeImagenes } from "./comprobacion-imagenes";

// Función que crea un elemento de imagen con la "URL" (y agrega como título, la propia URL)
const crearElementoImagen = ( URLimagen : string) : HTMLImageElement => {
    const elementoImagen = document.createElement("img");
    elementoImagen.src = URLimagen;
    elementoImagen.alt = `Imagen extraída: ${URLimagen}`;

    return elementoImagen;
};

// Función que crea un párrafo que contiene un texto
const crearElementoParrafo = (texto: string): HTMLParagraphElement => {
    const parrafoTexto = document.createElement("p");
    parrafoTexto.textContent = texto;

  return parrafoTexto;
};

// Función que crea el contenedor para una imagen. 
// Incluye la imagen, y la URL
const crearContenedorImagen = (URLimagen : string) : HTMLDivElement => {
    const contenedorImagen = document.createElement("div");
    contenedorImagen.classList.add("imagen-contenedor");

    // Agrega la imagen
    const elementoImagen = crearElementoImagen(URLimagen);
    contenedorImagen.appendChild(elementoImagen);

    // Agrega la URL
    const textoURL = crearElementoParrafo(URLimagen);
    contenedorImagen.appendChild(textoURL);
    
    return contenedorImagen;
};

// Función que crea el contenedor para las imágenes
const crearContenedorResultadoBusquedaImagenes = (listaImagenes: string[]): HTMLDivElement => {
    const contenedorImagenes = document.createElement("div");

    if (listaImagenes.length === 0) {
        const parrafoTexto = crearElementoParrafo("No se han encontrado imágenes");
        contenedorImagenes.appendChild(parrafoTexto);
    } else {
        listaImagenes.forEach(imagen => {
            const contenedorImagen = crearContenedorImagen(imagen);
            contenedorImagenes.appendChild(contenedorImagen);
        });
    };

  return contenedorImagenes;
};

// Función que "pinta" los datos de la imagen en el contenedor "lista-imagenes"
const pintarImagenes = (listaImagenes: string[]) => {

    const contenedorListaImagenes = document.querySelector("#lista-imagenes");
  
    if (contenedorListaImagenes && contenedorListaImagenes instanceof HTMLDivElement) {
        // Limpio los datos previos que pueda haber
        contenedorListaImagenes.innerHTML = "";
        contenedorListaImagenes.appendChild(crearContenedorResultadoBusquedaImagenes(listaImagenes));
    } else {
        throw new Error("No se ha encontrado el contenedor lista-imagenes");
    };
};

// Cuando esté el DOM completamente cargado, asigno los eventos
document.addEventListener("DOMContentLoaded", () => {

    // Añade evento al "botón" para que funcione al hacer clic
    const botonExtraerImagenes = document.getElementById("boton-extraer");
    if (botonExtraerImagenes && botonExtraerImagenes instanceof HTMLButtonElement) {

        botonExtraerImagenes.addEventListener("click", () => {
            // Obtiene texto del text area
            const textArea = document.getElementById("caja-html");

            if (textArea instanceof HTMLTextAreaElement) {
                const html = textArea.value;
        
                if (html) {
                // Obtiene información HTML
                    const listaImagenes: string[] = extraeImagenes(html);
                    pintarImagenes(listaImagenes);
                } else {
                    pintarImagenes([]);
                };
            } else {
                throw new Error("No se ha encontrado el textarea caja-html");
            };
        });
  } else {
    throw new Error("No se ha encontrado el botón boton-extraer");
  };

});
