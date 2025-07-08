
import { Reserva, ReservaClienteParticular, ReservaTourOperador, ReservaClienteParticularDesafio, ReservaTourOperadorDesafio,
  ReservaClienteParticularDesayuno, ReservaTourOperadorDesayuno } from './reservas-modelo';

// Habitaciones solicitadas por cliente "Antonio Gomez"
const habitacionesAntonioGomez : Reserva[] = [
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 1,
  },
];

// Habitaciones solicitadas por tour operador "Viajes Pepe"
const habitacionesViajesPepe : Reserva[] = [
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 1,
  },
];

// Caso 1. 
// Creo instancia de "ReservaClienteParticular", con las habitaciones del cliente particular
const reservaAntonioGomez = new ReservaClienteParticular(habitacionesAntonioGomez);

// Obtengo el subtotal y total para la reserva indicada.
console.log("La reserva de Antonio Gomez es de ", reservaAntonioGomez.getSubtotal());
console.log("y con IVA, ",reservaAntonioGomez.getTotal());

// Caso 2. 
// Creo instancia de "ReservaTourOpeador", con las habitaciones del tour operador
const reservaViajesPepe = new ReservaTourOperador(habitacionesViajesPepe);

// Obtengo el subtotal y total para la reserva indicada.
console.log("La reserva de Viajes Pepe es de ", reservaViajesPepe.getSubtotal());
console.log("y con IVA, ",reservaViajesPepe.getTotal());


// Desafío. 
// Creo instancias de "ReservaClienteParticularDesafio" y "ReservaTourOperadorDesafio", 
// y debe devolver lo mismo  (estoy usando la clase "ReservaBase")

const reservaAntonioGomezDesafio = new ReservaClienteParticularDesafio(habitacionesAntonioGomez);
// Obtengo el subtotal y total para la reserva indicada.
console.log("La reserva de Antonio Gomez es de ", reservaAntonioGomezDesafio.getSubtotal());
console.log("y con IVA, ",reservaAntonioGomezDesafio.getTotal());

const reservaViajesPepeDesafio = new ReservaTourOperadorDesafio(habitacionesViajesPepe);
// Obtengo el subtotal y total para la reserva indicada.
console.log("La reserva de Viajes Pepe es de ", reservaViajesPepeDesafio.getSubtotal());
console.log("y con IVA, ",reservaViajesPepeDesafio.getTotal());

// Adicional.
// Creo instancias de "ReservaClienteParticularAdicional" y "ReservaTourOperadorAdicional", 
// y debe devolver lo mismo  (estoy usando la clase "ReservaBaseDesayuno")
const reservasDesayuno: Reserva[] = [
  { 
    tipoHabitacion: "standard", 
    desayuno: false,
    pax: 1, 
    noches: 3 
  },
  { 
    tipoHabitacion: "standard", 
    desayuno: false, 
    pax: 1, 
    noches: 4 
  },
  { 
    tipoHabitacion: "suite", 
    desayuno: true, 
    pax: 2, 
    noches: 1 }
];

const reservaAntonioGomezDesayuno = new ReservaClienteParticularDesayuno(reservasDesayuno);
// Obtengo el subtotal y total para la reserva indicada.
console.log("La reserva de Antonio Gomez (Desayuno) es de ", reservaAntonioGomezDesayuno.getSubtotal());
console.log("y con IVA, ", reservaAntonioGomezDesayuno.getTotal());

const reservaViajesPepeDesayuno = new ReservaTourOperadorDesayuno(reservasDesayuno);
// Obtengo el subtotal y total para la reserva indicada.
console.log("La reserva de Viajes Pepe (Desayuno) es de ", reservaViajesPepeDesayuno.getSubtotal());
console.log("Y con IVA, ", reservaViajesPepeDesayuno.getTotal());
