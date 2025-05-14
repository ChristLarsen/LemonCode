
import { LineaTicket, informacionIva, TipoIva, ResultadoLineaTicket, TotalPorTipoIva, ResultadoTotalTicket } from "./model";

// Función que devuelve el porcentaje de IVA para un producto
export const devuelveIva = (tipoIva : TipoIva) : number => {

    if (!tipoIva) {
        throw new Error ("Tipo de IVA indicado no válido");
    };

    // Busco el iva correspondiente al tipo pasado por parametro
    const detalleIva = informacionIva.find((iva) => iva.tipo === tipoIva);
    
    if (!detalleIva) {
        throw new Error ("No existe porcentaje para el tipo de IVA indicado");
    };

    return detalleIva.porcentaje;
};

// Función que calcula el resultado para línea de ticket
export const resultadoLineaTicket = (lineaTicket : LineaTicket) : ResultadoLineaTicket => {

    if (!lineaTicket) {
        throw new Error ("No se recibió una línea de ticket válida");
    };
    if (lineaTicket.cantidad === 0) {
        throw new Error ("Cantidad de producto no válida");
    };

    const porcentajeIva = devuelveIva(lineaTicket.producto.tipoIva);
    const baseIva = Number((lineaTicket.producto.precio / (1 + (porcentajeIva / 100))).toFixed(2));
    
    let resultadoLineaTicket : ResultadoLineaTicket = {
        nombre: lineaTicket.producto.nombre,
        cantidad: lineaTicket.cantidad,
        precioSinIva: baseIva,
        tipoIva: lineaTicket.producto.tipoIva,
        precioConIva: lineaTicket.producto.precio
    };

    return resultadoLineaTicket;

};

// Función que agrega el importe al array de resultados por tipo de Iva
export const agregaImportePorTipoIva = (resultadoLineaTicket : ResultadoLineaTicket, totalPorIva : TotalPorTipoIva[]) => {
    
    if (!resultadoLineaTicket) {
        throw new Error ("No se recibió el resultado de una línea de ticket válida");
    };
    if (!totalPorIva) {
        throw new Error ("No se recibió un array de resultados por tipo de IVA válido");
    };

    // Busco si el tipo de Iva ya existe en "totalPorIva"
    const ivaEncontrado = totalPorIva.find((iva) => iva.tipoIva === resultadoLineaTicket.tipoIva);
    const importeDeIva = (resultadoLineaTicket.precioConIva - resultadoLineaTicket.precioSinIva) * resultadoLineaTicket.cantidad;

    if (ivaEncontrado) {
        ivaEncontrado.cuantia += Number(importeDeIva.toFixed(2));
    } else {
        totalPorIva.push({
            tipoIva: resultadoLineaTicket.tipoIva,
            cuantia: Number(importeDeIva.toFixed(2))
        });
    };

};

// Función que agrega el importe a la interfaz de resultado total
export const agregaImporteResultadoTotal = (resultadoLineaTicket : ResultadoLineaTicket, resultadoTotal : ResultadoTotalTicket) => {

    if (!resultadoLineaTicket) {
        throw new Error ("No se recibió el resultado de una línea de ticket válida");
    };
    if (!resultadoTotal) {
        throw new Error ("No se recibió el resultado total válido");
    };
    
    const importeSinIva = resultadoLineaTicket.precioSinIva * resultadoLineaTicket.cantidad;
    const importeConIva = resultadoLineaTicket.precioConIva * resultadoLineaTicket.cantidad;

    resultadoTotal.totalSinIva += Number(importeSinIva.toFixed(2));
    resultadoTotal.totalConIva += Number(importeConIva.toFixed(2));
    resultadoTotal.totalIva += Number((importeConIva - importeSinIva).toFixed(2));

};
