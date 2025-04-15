import { estadoPartida, generarNumeroAleatorio, obtieneCarta, valorCarta } from './motor';
import { Estado } from './model';
import { vi } from 'vitest';

describe('estadoPartida', () => {

    it('Puntos ha superado MAXIMO_PUNTOS', () => {
        // Arrange
        const puntos : number = 10;

        // Act
        const estado : Estado = estadoPartida(puntos);
        
        // Assert
        expect(estado).toBe("SUPERIOR_MAXIMO_PUNTOS");
    
    });

    it('Puntos es igual al MAXIMO_PUNTOS (victoria!)', () => {
        // Arrange
        const puntos : number = 7.5;

        // Act
        const estado : Estado = estadoPartida(puntos);
        
        // Assert
        expect(estado).toBe("PARTIDA_GANADA");
    
    });

    it('Puntos es inferior al MAXIMO_PUNTOS', () => {
        // Arrange
        const puntos : number = 5;

        // Act
        const estado : Estado = estadoPartida(puntos);
        
        // Assert
        expect(estado).toBe("INFERIOR_MAXIMO_PUNTOS");
    
    });
});

describe('generarNumeroAleatorio', () => {

    it('MathRandom lo forzamos a que devuelva cero, y debería dar el número 1', () => {
        // Arrange
        const numeroEsperado : number = 0;
        const resultadoEsperado : number = 1;
        vi.spyOn(global.Math, "random").mockReturnValue(numeroEsperado);

        // Act
        const resultado : number = generarNumeroAleatorio();
        
        // Assert
        expect(resultado).toBe(resultadoEsperado);
    
    });

    it('MathRandom lo forzamos a que devuelva 0.999, y debería dar el número 12', () => {
        // Arrange
        const numeroEsperado : number = 0.999;
        const resultadoEsperado : number = 12;
        vi.spyOn(global.Math, "random").mockReturnValue(numeroEsperado);

        // Act
        const resultado : number = generarNumeroAleatorio();
        
        // Assert
        expect(resultado).toBe(resultadoEsperado);
    
    });    

    it('MathRandom lo forzamos a que devuelva 0.888, y debería dar el número 11', () => {
        // Arrange
        const numeroEsperado : number = 0.888;
        const resultadoEsperado : number = 11;
        vi.spyOn(global.Math, "random").mockReturnValue(numeroEsperado);

        // Act
        const resultado : number = generarNumeroAleatorio();
        
        // Assert
        expect(resultado).toBe(resultadoEsperado);
    
    });    

    it('MathRandom lo forzamos a que devuelva 0.666, y debería dar el número 7', () => {
        // Arrange
        const numeroEsperado : number = 0.666;
        const resultadoEsperado : number = 7;
        vi.spyOn(global.Math, "random").mockReturnValue(numeroEsperado);

        // Act
        const resultado : number = generarNumeroAleatorio();
        
        // Assert
        expect(resultado).toBe(resultadoEsperado);
    
    });    
    
});

describe('obtieneCarta', () => {

    it('Si pido todas las cartas, éstas deben estar entre el 1 y el 12, y su valor debe ser el de la carta, a excepción de las 10,11,12 que valen 0.5', () => {
        
        // Arrange
        const cartasEsperadas : number[] = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
        const cartasObtenidas : number[] = [];

        // Act
        for (let a : number = 0; a < 10; a++) {
            cartasObtenidas.push(obtieneCarta());
        };

        // Assert            
        // Debe haber 10 cartas y no más.
        expect(cartasObtenidas.length).toBe(10);

        // Compruebo que las cartas obtenidas están entre las esperadas.
        for (let a : number = 0; a < 10; a++) {
            expect(cartasEsperadas).toContain(cartasObtenidas[a]);
            
            const valor : number = valorCarta(cartasObtenidas[a]);
            
            // Compruebo que las cartas 10, 11, y 12 valen 0.5, y el resto su valor.
            if (cartasObtenidas[a] >= 10) {
                expect(valor).toBe(0.5);
            } else {
                expect(valor).toBe(cartasObtenidas[a]);
            };
        }   
    });
});
