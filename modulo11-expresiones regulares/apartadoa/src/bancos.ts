import { bancos } from './comprobacion-iban-model';

// Función que busca el banco y devuelve su descripción
export const obtenerDescripcionBanco = (codigo : string) : string => {
    const banco = bancos.find(b => b.codigo === codigo);
    return banco ? banco.nombre : 'Banco no encontrado';
};