import {
    partida,
    Estado
} from './model';

import {
    muestraCarta,
    muestraTexto,
    habilitaBoton,
    deshabilitaBoton,
    iniciaPartida
} from './ui';

export const generarNumeroAleatorio = () : number => {
    let numero : number = Math.floor(Math.random()*10) + 1;
    // Si el numero resultante es mayor que 7, le sumo 2, así omito el 8 y 9
    if (numero > 7) {
        numero += 2; 
    }

    return numero;
};

export const obtieneCarta = () : number => {
    
    let numero : number;

    do {
        numero = generarNumeroAleatorio();
    } while (partida.listaCartas.includes(numero));

    partida.listaCartas.push(numero);

    return numero;
};

export const consoleErrorID = (funcion : string, id : string) : void => {
    console.error(`${funcion}: No se ha encontrado el elemento con ID ${id}.`);
};

export const damePuntosEnTexto = (puntos : number) : string => {

    const enteroPuntos : number = Math.floor(puntos);

    // Si el entero no es igual a los puntos, es que hay una parte que es media.
    if (enteroPuntos != puntos) {
        return enteroPuntos == 0 ? `Media` : `${enteroPuntos} y media`;
    };
    // Si la puntuacion no tiene decimales, la pongo tal cual
    return `${puntos}`;
};

export const estadoPartida = (puntos : number) : Estado => {

    if (puntos === partida.MAXIMO_PUNTOS) {
        return "PARTIDA_GANADA";
    };
    return (puntos < partida.MAXIMO_PUNTOS) ? "INFERIOR_MAXIMO_PUNTOS" : "SUPERIOR_MAXIMO_PUNTOS";
};

export const gestionarGameOver = (puntos: number) : void => {
    const estado : Estado = estadoPartida(puntos);

    if (estado === "PARTIDA_GANADA" || estado === "SUPERIOR_MAXIMO_PUNTOS") {
        deshabilitaBoton("damecarta");
        deshabilitaBoton("plantarse");
        habilitaBoton("iniciar");
        if (estado === "PARTIDA_GANADA") {
            muestraTexto("puntuacion", ' ');
            muestraTexto("mensaje", '¡¡7 y media!! ¡Lo has clavado! ¡Enhorabuena!');
        } else {
            muestraTexto("puntuacion", ' ');
            muestraTexto("mensaje", `Ohh! Te has pasado! Has llegado a ${damePuntosEnTexto(puntos)}.`);            
        };
    };
};

export const valorCarta = (numero : number) : number => {

    return (numero >= 10) ? 0.5 : numero;
};

export const handleDameCarta = () : void => {
    const numero : number = obtieneCarta();
    muestraCarta(numero);
    partida.puntuacion += valorCarta(numero);
    habilitaBoton("plantarse");
    muestraPuntuacion();
    gestionarGameOver(partida.puntuacion);
};

export const handleCompruebaMePlanto = () : void => {
    deshabilitaBoton("damecarta");
    deshabilitaBoton("plantarse");
    habilitaBoton("iniciar");
    habilitaBoton("simular");
    muestraTexto("puntuacion", " ");
    let textoMensaje = `Has conseguido ${damePuntosEnTexto(partida.puntuacion)}`;

    if (partida.puntuacion >= 5 && partida.puntuacion < 6) {
        textoMensaje += '... Te ha entrago el cangelo eh??';
    } else if (partida.puntuacion >= 6 && partida.puntuacion <=7) {
        textoMensaje += '... Casi casi....!!';
    } else {
        textoMensaje += ' ... Has sido demasiado conservador!!';
    };

    muestraTexto("mensaje", textoMensaje);
};

export const handleIniciar = () : void => {
    iniciaPartida();
};

export const handleSimular = () : void => {
    const numero : number = obtieneCarta();
    muestraCarta(numero);
    const puntuacionSimulada = partida.puntuacion + (numero >= 10 ? 0.5 : numero);
    deshabilitaBoton("simular");
    muestraPuntuacionSimular(puntuacionSimulada);
};

export const muestraPuntuacion = () : void => {
    muestraTexto("puntuacion", `Puntuación: ${damePuntosEnTexto(partida.puntuacion)}.`);
};

export const muestraPuntuacionSimular = (puntuacionSimular : number) : void => {
    let mensajeSimular : string = ' ';
    mensajeSimular = `Si hubieras pedido otra, habrías hecho ${damePuntosEnTexto(puntuacionSimular)}!!`;

    if (puntuacionSimular < partida.MAXIMO_PUNTOS) {
        mensajeSimular += ' No habrías llegado igualmente!';
    } else if (puntuacionSimular > partida.MAXIMO_PUNTOS) {
        mensajeSimular += ' Habrías perdido!';
    } else {
        mensajeSimular += ' Habrías ganado!! OHH!!';
    };

    muestraTexto("mensaje", mensajeSimular);
};

export const iniciaPartidaMotor = () : void => {    

    partida.puntuacion = 0;
    partida.listaCartas = [];
};