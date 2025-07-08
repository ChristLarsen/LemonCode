
export interface Reserva {
  tipoHabitacion: "standard" | "suite";
  pax: number;
  noches: number;
  // He agregado aqui "desayuno", como campo "opcional", para que sea compatible con la primera 
  // parte del ejercicio, ya que esto es para la parte adicional
  desayuno? : boolean;
};

// Clase "ReservaClienteParticular"
export class ReservaClienteParticular {

    reservas : Reserva[];
    IVA : number = 0.21;
    precios = {
        standard : 100,
        suite : 150
    };
    precioExtraPersona : number = 40;

    constructor(reservas : Reserva[]) {
        this.reservas = reservas;
    };

    // Función que devuelve el precio de una reserva
    calcularPrecioReserva(reserva: Reserva): number {
        // Compruebo tipo de habitación para saber el precio base a aplicar
        const precioBase = this.precios[reserva.tipoHabitacion];
        // Calculo personas extras (serían a partir de la segunda persona en la habitación)
        let personasExtras = 0;
        if (reserva.pax > 1) {
            personasExtras = reserva.pax - 1;
        };
        const extra = personasExtras * this.precioExtraPersona;

        // Calculo, precio base + extra, por las noches de la reserva
        return (precioBase + extra) * reserva.noches;
    };

    // Función que devuelve el precio sin iva (subtotal) de las reservas para el cliente
    getSubtotal(): number {
        let subtotal = 0;

        this.reservas.forEach((reserva) => {
            const precio = this.calcularPrecioReserva(reserva);
            subtotal += precio;
        });

        return subtotal;
    };

    // Función que devuelve el precio con iva (total) de las reservas para el cliente
    getTotal(): number {
        const subtotal = this.getSubtotal();
        return subtotal * (1 + this.IVA);
    };

};

// Clase "ReservaTourOperador" (hereda de "ReservaClienteParticular")
export class ReservaTourOperador extends ReservaClienteParticular {

    precios = {
        standard : 100,
        suite : 100
    };
    descuentoServicios : number = 0.15;
    
    // Función que devuelve el precio sin iva (subtotal) de las reservas para el cliente
    getSubtotal(): number {
        let subtotal = 0;

        this.reservas.forEach((reserva) => {
          const precio = this.calcularPrecioReserva(reserva);
          subtotal += precio;
        });

        return subtotal - (subtotal * this.descuentoServicios);
    };

};

// Desafío!!! ==========================================================

type PrecioHabitacion = {
    tipo: Reserva["tipoHabitacion"];
    precio: number;
};

// Clase "ReservaBase"
export class ReservaBase {
    reservas : Reserva[];
    IVA : number = 0.21;
    precioExtraPersona : number = 40;
    precios : PrecioHabitacion[];

    constructor(reservas : Reserva[], precios : PrecioHabitacion[]) {
        this.reservas = reservas;
        this.precios = precios;
    };

    // Función que devuelve el precio
    getPrecio(tipo : Reserva["tipoHabitacion"]) : number {
        
        let precio : number = 0;

        for (let i = 0; i < this.precios.length; i ++) {
            if (this.precios[i].tipo === tipo) {
                precio = this.precios[i].precio;
                return precio;
            }
        };

        return precio;
    };

    // Función que devuelve el precio de una reserva
    calcularPrecioReserva(reserva: Reserva): number {

        // Compruebo tipo de habitación para saber el precio base a aplicar
        const precioBase = this.getPrecio(reserva.tipoHabitacion);
        // Calculo personas extras (serían a partir de la segunda persona en la habitación)
        let personasExtras = 0;
        if (reserva.pax > 1) {
            personasExtras = reserva.pax - 1;
        };
        const extra = personasExtras * this.precioExtraPersona;

        // Calculo, precio base + extra, por las noches de la reserva
        return (precioBase + extra) * reserva.noches;
    };

    // Función que devuelve el precio sin iva (subtotal) de las reservas para el cliente
    getSubtotal(): number {
        let subtotal = 0;

        this.reservas.forEach((reserva) => {
            const precio = this.calcularPrecioReserva(reserva);
            subtotal += precio;
        });

        return subtotal;
    };

    // Función que devuelve el precio con iva (total) de las reservas para el cliente
    getTotal(): number {
        const subtotal = this.getSubtotal();
        return subtotal * (1 + this.IVA);
    };

};

export class ReservaClienteParticularDesafio extends ReservaBase {

    constructor(reservas : Reserva[]) {
        // Inicializo con el constructor de "ReservaBase", enviando las
        // reservas y los tipos de habitación y precios para cliente particular
        super(reservas, [
            { tipo : "standard", precio : 100 },
            { tipo : "suite" , precio : 150}
        ]);
    };
};

export class ReservaTourOperadorDesafio extends ReservaBase {

    descuentoServicios: number = 0.15;

    constructor(reservas: Reserva[]) {
        // Inicializo con el constructor de "ReservaBase", enviando las
        // reservas y los tipos de habitación y precios para tour operador
        super(reservas, [
            { tipo: "standard", precio: 100 },
            { tipo: "suite", precio: 100 }
        ]);
    };

    getSubtotal() : number {
        const subtotal = super.getSubtotal();

        return subtotal - (subtotal * this.descuentoServicios);
    };
};

// Adicional!!! ==========================================================
// He agregado a "Reserva", el campo "desayuno", de tipo boolean.

export class ReservaBaseDesayuno extends ReservaBase {
  precioDesayuno: number = 15;

  constructor(reservas: Reserva[], precios: PrecioHabitacion[]) {
    super(reservas, precios);
  };

  override calcularPrecioReserva(reserva: Reserva): number {
    const precioBase = super.calcularPrecioReserva(reserva);

    // Agrego al precio el del desayuno si está incluido
    const desayuno = reserva.desayuno ? reserva.pax * this.precioDesayuno * reserva.noches : 0;

    return precioBase + desayuno;
  };
};

export class ReservaClienteParticularDesayuno extends ReservaBaseDesayuno {
  constructor(reservas: Reserva[]) {
    // Inicializo con el constructor de "ReservaBaseDesayuno", enviando las
    // reservas y los tipos de habitación y precios para cliente particular
    super(reservas, [
      { tipo: "standard", precio: 100 },
      { tipo: "suite", precio: 150 }
    ]);
  };
};

export class ReservaTourOperadorDesayuno extends ReservaBaseDesayuno {

    descuentoServicios: number = 0.15;

    constructor(reservas: Reserva[]) {
        // Inicializo con el constructor de "ReservaBaseDesayuno", enviando las
        // reservas y los tipos de habitación y precios para tour operador
        super(reservas, [
            { tipo: "standard", precio: 100 },
            { tipo: "suite", precio: 100 }
        ]);
    };

    getSubtotal(): number {
        const subtotal = super.getSubtotal();

        return subtotal - (subtotal * this.descuentoServicios);
    };
};





