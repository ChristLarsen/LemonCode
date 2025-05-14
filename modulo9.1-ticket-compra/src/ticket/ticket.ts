
import { LineaTicket, ResultadoLineaTicket, ResultadoTotalTicket, TotalPorTipoIva, TicketFinal } from "./model";
import { resultadoLineaTicket, agregaImportePorTipoIva, agregaImporteResultadoTotal } from "./ticket.helper";

export const calculaTicket = (lineasTicket: LineaTicket[]) : TicketFinal => {
  
  let resultadosPorLinea : ResultadoLineaTicket[] = [];  
  let resultadoTotal : ResultadoTotalTicket = {
    totalSinIva: 0,
    totalConIva: 0,
    totalIva: 0 
  };
  let totalPorIva : TotalPorTipoIva[] = [];

  for (let i = 0; i < lineasTicket.length; i++) {

    // Calcula los resultados por línea de ticket    
    resultadosPorLinea[i] = resultadoLineaTicket(lineasTicket[i]);
    
    // Acumula datos en "totalPorTipoIva"
    agregaImportePorTipoIva(resultadosPorLinea[i], totalPorIva);
    
    // Acumula datos en "resultadoTotal"
    agregaImporteResultadoTotal(resultadosPorLinea[i], resultadoTotal);

  };

  return {
    resultadoLineaTicket: resultadosPorLinea,
    resultadoTotalTicket: resultadoTotal,
    totalPorIva: totalPorIva  
  };

};
