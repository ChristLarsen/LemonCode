interface Partida {
    puntuacion : number,
    MAXIMO_PUNTOS : number,
    listaCartas : number[]
};

export const partida : Partida = {
    puntuacion : 0,
    MAXIMO_PUNTOS : 7.5,
    listaCartas : []
};

export type Estado =
  | "INFERIOR_MAXIMO_PUNTOS"
  | "SUPERIOR_MAXIMO_PUNTOS"
  | "PARTIDA_GANADA"
