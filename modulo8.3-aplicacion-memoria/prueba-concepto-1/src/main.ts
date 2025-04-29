// Prueba de concepto 1: Barajar las cartas.

// Defino el tipo "carta"
type Carta = {
    numero : number;
    icono : string;
};

// Defino las cartas
// (tengo perro, gato, león, vaca, mono, rana, y les asigno un número)
const cartasAnimales : Carta[] = [
    { numero: 1, icono: '🐶' }, 
    { numero: 2, icono: '🐱' }, 
    { numero: 3, icono: '🦁' }, 
    { numero: 4, icono: '🐮' }, 
    { numero: 5, icono: '🐵' }, 
    { numero: 6, icono: '🐸' }  
];
  
// Creamos las cartas (son dos de cada una).
const cartas = [...cartasAnimales, ...cartasAnimales];

// Barajamos las cartas (visto por internet, algoritmo "Fisher-Yates")
// (devuelvo el mismo array con las cartas barajadas)
function barajar (cartas: Carta[]): Carta[] {
 
    for (let i = cartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
    }
    return cartas;
};

console.log(barajar(cartas));