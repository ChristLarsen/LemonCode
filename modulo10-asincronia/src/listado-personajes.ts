import { Personaje } from "./listado-personajes-model";
import { obtenerPersonajes } from "./listado-personajes-api";

// Función que crea un elemento de imagen con la "URL" y el título
const crearElementoImagen = ( portada : string, titulo : string) : HTMLImageElement => {
    const imagen = document.createElement("img");
    imagen.src = portada;
    imagen.alt = titulo;

    return imagen;
};

// Función que crea un párrafo que contiene un texto en negrita y uno normal
const crearElementoParrafo = ( textoNegrita : string, textoNormal : string) : HTMLParagraphElement => {

    const parrafo = document.createElement("p");
    const spanNegrita = document.createElement("span");
    spanNegrita.textContent = textoNegrita;
    spanNegrita.style.fontWeight = "bold";
    parrafo.appendChild(spanNegrita);

    spanNegrita.style.marginRight = "0.5em";
    
    const spanNormal = document.createElement("span");
    spanNormal.textContent = textoNormal;
    parrafo.appendChild(spanNormal);

    return parrafo;
};

// Función que crea el contenedor para un personaje. 
// Incluye la imagen, nombre (y apodo, si tiene), especialidad y las habilidades.
const crearContenedorPersonaje = (personaje : Personaje) : HTMLDivElement => {
    const elementoPersonaje = document.createElement("div");
    elementoPersonaje.classList.add("personaje-contenedor");

    // Agrega la imagen del personaje
    const imagenUrl = `http://localhost:3000/${personaje.imagen}`;
    const imagen = crearElementoImagen(imagenUrl, personaje.nombre);
    elementoPersonaje.appendChild(imagen);

    // Agrega el nombre y apodo (si tiene) del personaje
    if (personaje.apodo !== "" && personaje.apodo !== personaje.nombre) {
        const nombreConApodo = personaje.nombre + ' (' + personaje.apodo + ')';
        const nombre = crearElementoParrafo('Nombre:', nombreConApodo);
        elementoPersonaje.appendChild(nombre);
    } else {
        const nombre = crearElementoParrafo('Nombre:', personaje.nombre);
        elementoPersonaje.appendChild(nombre);
    };

    // Agrega la especialidad del personaje
    const especialidad = crearElementoParrafo('Especialidad:', personaje.especialidad);
    elementoPersonaje.appendChild(especialidad);

    // Agrega las habilidades del personaje
    const listaHabilidades = personaje.habilidades.join(", ");
    const habilidades = crearElementoParrafo('Habilidades:', listaHabilidades);
    elementoPersonaje.appendChild(habilidades);

    // Agrega el campo de amigo del personaje, si tiene
    if (personaje.amigo !== "") {
        const amigo = crearElementoParrafo('Amigo De:', personaje.amigo);
        elementoPersonaje.appendChild(amigo);
    };
    
    return elementoPersonaje;
};

// Función que "pinta" los personajes en el contenedor "listado-personajes"
const pintarPersonajes = async (filtro : string) => {
    const personajes = await obtenerPersonajes(filtro);
    const listado = document.querySelector("#listado-personajes");

    if (listado && listado instanceof HTMLDivElement) {
        personajes.forEach(personaje => {
            const contenedorPersonaje = crearContenedorPersonaje(personaje);
            listado.appendChild(contenedorPersonaje);
        });
    } else {
        throw new Error("No se ha encontrado el contenedor listado-personajes");
    };
};

// Cuando esté el DOM completamente cargado, ejecuta la función de pintar personajes, y asigna eventos
document.addEventListener("DOMContentLoaded", () => {
    // Cuando carga la página, pinta el listado de personajes sin aplicar filtros
    pintarPersonajes('');
    
    // Añade evento al botón de filtrar
    const botonFiltrar= document.getElementById('boton-filtrar');
    if (botonFiltrar && botonFiltrar instanceof HTMLButtonElement) {
        botonFiltrar.addEventListener('click', () => {
            const inputFiltro = document.getElementById('caja-filtrar') as HTMLInputElement;
            const filtro = inputFiltro.value;

            const listado = document.querySelector("#listado-personajes");
            if (listado && listado instanceof HTMLDivElement) {
                listado.innerHTML = ""; 
                pintarPersonajes(filtro);
            } else {
                throw new Error("No se ha encontrado el contenedor listado-personajes");
            };
        });
    } else {
        throw new Error("No se ha encontrado el botón boton-filtrar");
    };

    // Añade evento al "input" para que funcione al pulsar Intro
    const inputFiltro = document.getElementById('caja-filtrar');
    if (inputFiltro && inputFiltro instanceof HTMLInputElement) {
        inputFiltro.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                const filtro = inputFiltro.value;
                
                const listado = document.querySelector("#listado-personajes");
                if (listado && listado instanceof HTMLDivElement) {
                    listado.innerHTML = "";
                    pintarPersonajes(filtro);
                } else {
                    throw new Error("No se ha encontrado el contenedor listado-personajes");
                };
            };
        });
    } else {
        throw new Error("No se ha encontrado el botón boton-filtrar");
    };
});
