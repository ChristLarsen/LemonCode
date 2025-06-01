import axios from "axios";
import { Personaje } from "./listado-personajes-model";

// Función que obtiene los personajes desde la API
// (Permite filtrar por nombre si se recibe algo en el filtro)
export const obtenerPersonajes = async (filtro : string) : Promise<Personaje[]> => {

    const filtroLimpio = filtro.trim();

    try {
        if (filtro.length === 0) {
            const { data } = await axios.get("http://localhost:3000/personajes");
            return data;
        } else {
            const { data } = await axios.get(`http://localhost:3000/personajes?nombre_like=${filtroLimpio}`);
            return data;
        };
    } catch (error) {
        throw new Error("Error al obtener los personajes");
    };

};
