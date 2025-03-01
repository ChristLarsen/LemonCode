const generarNumeroAleatorio = () : number => {
    let numero : number = Math.floor(Math.random()*10) + 1;
    // Si el numero resultante es mayor que 7, le sumo 2, así omito el 8 y 9
    if (numero > 7) {
        numero += 2; 
    }
    return numero;
};

const damePuntosEnTexto = (puntos : number) : string => {
    // Obtengo el entero de los puntos
    // let texto : string = ' ';
    const enteroPuntos : number = Math.floor(puntos);

    // Si el entero no es igual a los puntos, es que hay una parte que es media.
    if (enteroPuntos != puntos) {
        return enteroPuntos === 0 ? `Media` : `${enteroPuntos} y media`;
    };
    // Si la puntuacion no tiene decimales, la pongo tal cual
    return `${puntuacion}`;
};

const muestraTexto = (id: string, texto: string) : void => {

    const elemento = document.getElementById(id);
    
    if (elemento) {
        elemento.innerHTML = texto;
    } else {
        console.error(`muestraTexto: No se ha encontrado elemento con ID ${id}.`);
    }
};

const muestraPuntuacion = () : void => {
    muestraTexto("puntuacion", `Puntuación: ${damePuntosEnTexto(puntuacion)}.`);
};

const muestraPuntuacionSimular = (puntuacionSimular : number) : void => {
    let mensajeSimular : string = ' ';
    mensajeSimular = `Si hubieras pedido otra, habrías hecho ${damePuntosEnTexto(puntuacionSimular)}!!`;

    if (puntuacionSimular < 7.5) {
        mensajeSimular += ' No habrías llegado igualmente!';
    } else if (puntuacionSimular > 7.5) {
        mensajeSimular += ' Habrías perdido!';
    } else {
        mensajeSimular += ' Habrías ganado!! OHH!!';
    };

    muestraTexto("mensaje", mensajeSimular);
};

const muestraCarta = (numero: number) : void => {
    const elementoCarta = document.getElementById("carta") as HTMLImageElement;
    if (elementoCarta) {
        switch (numero) {
            case 0 :
                elementoCarta.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg';
                break;
            case 1 :
                elementoCarta.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg';
                break;
            case 2 :
                elementoCarta.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg';
                break;
            case 3 :
                elementoCarta.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg';
                break;
            case 4 :
                elementoCarta.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg';
                break;
            case 5 :
                elementoCarta.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg';
                break;
            case 6 :
                elementoCarta.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg';
                break;
            case 7 :
                elementoCarta.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg';
                break;
            case 10 :
                elementoCarta.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg';
                break;
            case 11 :
                elementoCarta.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg';
                break;
            case 12 :
                elementoCarta.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg';
                break;                                                                                                                                                                    
            default:
                break;
        };
    } else {
        console.error('muestraCarta: No se ha encontrado elemento con ID "carta"');
    }    
};

const deshabilitaBoton = (id : string) : void => {
    const boton = document.getElementById(id) as HTMLButtonElement;
    if (boton) {
        boton.disabled = true;
    };
};

const habilitaBoton = (id : string) : void => {
    const boton = document.getElementById(id) as HTMLButtonElement;
    if (boton) {
        boton.disabled = false;
    };
};

const gestionarGameOver = (puntos: number) : void => {
    if (puntos >= MAXIMO_PUNTOS) {
        deshabilitaBoton("damecarta");
        deshabilitaBoton("plantarse");
        habilitaBoton("iniciar");
        if (puntos == MAXIMO_PUNTOS) {
            muestraTexto("puntuacion", ' ');
            muestraTexto("mensaje", '¡¡7 y media!! ¡Lo has clavado! ¡Enhorabuena!');
        } else {
            muestraTexto("puntuacion", ' ');
            muestraTexto("mensaje", `Ohh! Te has pasado! Has llegado a ${damePuntosEnTexto(puntuacion)}.`);            
        };
    };
};

const handleDameCarta = () : void => {
    const numero : number = generarNumeroAleatorio();
    muestraCarta(numero);
    if (numero >= 10) {
        puntuacion += 0.5;
    } else {
        puntuacion += numero;
    }
    habilitaBoton("plantarse");
    muestraPuntuacion();
    gestionarGameOver(puntuacion);
};

const handleCompruebaMePlanto = () : void => {
    deshabilitaBoton("damecarta");
    deshabilitaBoton("plantarse");
    habilitaBoton("iniciar");
    habilitaBoton("simular");
    muestraTexto("puntuacion", " ");
    switch (puntuacion) {
        case 5:
            muestraTexto("mensaje", `Has conseguido ${damePuntosEnTexto(puntuacion)} ... Te ha entrago el cangelo eh??`);
            break;
        case 6:
        case 7:
            muestraTexto("mensaje", `Has conseguido ${damePuntosEnTexto(puntuacion)} ... Casi casi....!!`);
            break;
        default:
            muestraTexto("mensaje", `Has conseguido ${damePuntosEnTexto(puntuacion)} ... Has sido demasiado conservador!!`);
            break;
    };
};

const handleIniciar = () : void => {
    deshabilitaBoton("iniciar");
    deshabilitaBoton("plantarse");
    deshabilitaBoton("simular");
    habilitaBoton("damecarta");
    puntuacion = 0;
    muestraTexto("mensaje", "");
    muestraCarta(0);
    muestraPuntuacion();
};

const handleSimular = () : void => {
    const numero : number = generarNumeroAleatorio();
    muestraCarta(numero);
    const puntuacionSimulada = puntuacion + (numero >= 10 ? 0.5 : numero);
    deshabilitaBoton("simular");
    muestraPuntuacionSimular(puntuacionSimulada);
};

let puntuacion : number = 0;
const MAXIMO_PUNTOS : number = 7.5;

document.addEventListener("DOMContentLoaded", muestraPuntuacion);
deshabilitaBoton("plantarse");
deshabilitaBoton("iniciar");
deshabilitaBoton("simular");

const botonDameCarta = document.getElementById("damecarta");
if (botonDameCarta) {
    botonDameCarta.addEventListener("click", handleDameCarta);
} else {
    console.error('botonDameCarta: No se ha encontrado elemento con ID "damecarta".');
};

const botonPlantarse = document.getElementById("plantarse");
if (botonPlantarse) {
    botonPlantarse.addEventListener("click", handleCompruebaMePlanto);
} else {
    console.error('botonPlantarse: No se ha encontrado elemento con ID "plantarse"');
};

const botonIniciar = document.getElementById("iniciar");
if (botonIniciar) {
    botonIniciar.addEventListener("click", handleIniciar);
} else {
    console.error('botonIniciar: No se ha encontrado elemento con ID "iniciar"');
};

const botonSimular = document.getElementById("simular");
if (botonSimular) {
    botonSimular.addEventListener("click", handleSimular);
} else {
    console.error('botonSimular: No se ha encontrado elemento con ID "simular"');
};
