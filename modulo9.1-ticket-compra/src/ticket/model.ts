export type TipoIva =
  | "general"
  | "reducido"
  | "superreducidoA"
  | "superreducidoB"
  | "superreducidoC"
  | "sinIva";

interface detalleIva {
  porcentaje : number;
  tipo : TipoIva;
};

export const informacionIva : detalleIva[] = [
  { 
    porcentaje : 21, 
    tipo : "general"  
  },
  {
    porcentaje : 10,
    tipo : "reducido"
  },
  {
    porcentaje : 5,
    tipo : "superreducidoA"
  },
  {
    porcentaje : 4,
    tipo : "superreducidoB"
  },
  {
    porcentaje : 0,
    tipo : "superreducidoC"
  },
  {
    porcentaje : 0,
    tipo : "sinIva"
  }
];

interface Producto {
  nombre: string;
  precio: number;
  tipoIva: TipoIva;
};

export interface LineaTicket {
  producto: Producto;
  cantidad: number;
};

export interface ResultadoLineaTicket {
  nombre : string;
  cantidad : number;
  precioSinIva : number;
  tipoIva : TipoIva;
  precioConIva : number;
};

export interface ResultadoTotalTicket {
  totalSinIva : number;
  totalConIva : number;
  totalIva : number;
};

export interface TotalPorTipoIva {
  tipoIva : TipoIva;
  cuantia : number;
};

export interface TicketFinal {
  resultadoLineaTicket : ResultadoLineaTicket[];
  resultadoTotalTicket : ResultadoTotalTicket;
  totalPorIva : TotalPorTipoIva[];
};


