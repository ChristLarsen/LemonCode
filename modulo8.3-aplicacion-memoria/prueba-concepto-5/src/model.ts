// Defino las distintas cartas a utilizar
export interface Carta {
  imagen: number; // Número de la imagen (el animal que se va a mostrar. Va a haber dos iguales por animal)
  bocaArriba: boolean; // Está boca arriba o no
  encontrada : boolean; // Se ha encontrado o no
};

type EstadoPartida = 
  | "PartidaNoIniciada"
  | "CeroCartasLevantadas"
  | "UnaCartaLevantada"
  | "DosCartasLevantadas"
  | "PartidaCompleta";

const crearColeccionDeCartasInicial = () : Carta[] => {

  // Devuelve una baraja inicial con 6 + 6 animales con los datos inicializados.
  let cartasAnimales : Carta[] = [];

  for (let i = 0; i < 6; i++) {
    cartasAnimales.push({
      imagen: i+1,
      bocaArriba: false,
      encontrada: false
    });
    cartasAnimales.push({
      imagen: i+1,
      bocaArriba: false,
      encontrada: false
    });
  };
    return cartasAnimales;
};

export let cartasAnimales : Carta[] = crearColeccionDeCartasInicial();

export interface Tablero {
  cartas : Carta[]; 
  estadoPartida : EstadoPartida;
  intentos : number;
  indiceCartaVolteadaA? : number;
  indiceCartaVolteadaB? : number;
};

const crearTableroInicial = () : Tablero => (
  {
    cartas : cartasAnimales,
    estadoPartida : "PartidaNoIniciada",
    intentos : 0
  }
);

export let tablero : Tablero = crearTableroInicial();

