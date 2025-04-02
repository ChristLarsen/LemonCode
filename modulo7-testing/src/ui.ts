import {
    consoleErrorID,
    iniciaPartidaMotor,
    muestraPuntuacion
} from './motor';

export const muestraTexto = (id: string, texto: string) : void => {

    const elemento = document.getElementById(id);
    
    if (elemento) {
        elemento.innerHTML = texto;
    } else {
        consoleErrorID('muestraTexto', id);
    };
};

export const muestraCarta = (numero: number) : void => {
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
        consoleErrorID('muestraCarta', 'carta');
    };
};

export const deshabilitaBoton = (id : string) : void => {
    const boton = document.getElementById(id) as HTMLButtonElement;
    if (boton) {
        boton.disabled = true;
    };
};

export const habilitaBoton = (id : string) : void => {
    const boton = document.getElementById(id) as HTMLButtonElement;
    if (boton) {
        boton.disabled = false;
    };
};

export const iniciaPartida = () : void => {

    iniciaPartidaMotor();

    deshabilitaBoton("iniciar");
    deshabilitaBoton("plantarse");
    deshabilitaBoton("simular");
    habilitaBoton("damecarta");
    muestraTexto("mensaje", "");
    muestraCarta(0);
    muestraPuntuacion();

};