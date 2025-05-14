import { LineaTicket, ResultadoLineaTicket, ResultadoTotalTicket, TipoIva, TotalPorTipoIva } from "./model";
import { agregaImportePorTipoIva, agregaImporteResultadoTotal, devuelveIva, resultadoLineaTicket} from "./ticket.helper";

// Tests para "devuelveIva"
describe("devuelveIva", () => {

    it ("Debería devolver error si no se pasa un tipo de IVA válido (undefined)", () => {

        // Arrange
        const tipoIva : any = undefined;

        // Act
        const result = () => devuelveIva(tipoIva);

        // Assert
        expect(result).toThrowError("Tipo de IVA indicado no válido");

    });

    it ("Debería devolver error si no se pasa un tipo de IVA válido (nulo)", () => {

        // Arrange
        const tipoIva : any = null;

        // Act
        const result = () => devuelveIva(tipoIva);

        // Assert
        expect(result).toThrowError("Tipo de IVA indicado no válido");

    });


    it ("Debería devolver error si no se pasa un tipo de IVA existente", () => {

        // Arrange
        const tipoIva : any = "noExistente";

        // Act
        const result = () => devuelveIva(tipoIva);

        // Assert
        expect(result).toThrowError("No existe porcentaje para el tipo de IVA indicado");

    });

    it ("Debería devolver 21 si se pasa tipo de IVA general", () => {

        // Arrange
        const tipoIva : TipoIva = "general";

        // Act
        const result = devuelveIva(tipoIva);

        // Assert
        expect(result).toBe(21);

    });


});

// Tests para "resultadoLineaTicket"
describe("resultadoLineaTicket", () => {

    it ("Debería devolver error si no se pasa una línea de ticket válida", () => {

        // Arrange
        const lineaTicket : any = undefined;

        // Act
        const result = () => resultadoLineaTicket(lineaTicket);

        // Assert
        expect(result).toThrowError("No se recibió una línea de ticket válida");

    });

    it ("Debería devolver [Legumbres, 2, 1.65, general, 2] si se pasa {{ producto: Legumbres, precio: 2, tipoIva : general }, cantidad: 2}", () => {

        // Arrange
        const lineaTicket : LineaTicket =
        {
            producto: {
            nombre: "Legumbres",
            precio : 2,
            tipoIva: "general",
            },
            cantidad: 2,
        };

        // Act
        const result = resultadoLineaTicket(lineaTicket);

        // Assert
        const resultadoEsperado = {
            nombre: "Legumbres",
            cantidad: 2,
            precioSinIva: 1.65,
            tipoIva: "general",
            precioConIva: 2
        };

        expect(result).toEqual(resultadoEsperado);

    });

    it ("Debería devolver error si se pasa cantidad a cero", () => {

        // Arrange
        const lineaTicket : LineaTicket =
        {
            producto: {
            nombre: "Legumbres",
            precio : 2,
            tipoIva: "general",
            },
            cantidad: 0,
        };

        // Act
        const result = () => resultadoLineaTicket(lineaTicket);

        // Assert
        expect(result).toThrowError("Cantidad de producto no válida");

    });


});

// Tests para "agregaImportePorTipoIva"
describe("agregaImportePorTipoIva", () => {

    it ("Debería devolver error si no se pasa el resultado de una línea de ticket válido", () => {

        // Arrange
        const resultadoLineaTicket : any = undefined;
        const tiposDeIva : TotalPorTipoIva[] = [];

        // Act
        
        // Assert
        expect(() => agregaImportePorTipoIva(resultadoLineaTicket, tiposDeIva)).toThrowError("No se recibió el resultado de una línea de ticket válida");
        
    });    

    it ("Debería devolver error si no se pasa un array de resultados por tipo de Iva válido", () => {

        // Arrange
        const resultadoLineaTicket : ResultadoLineaTicket = {
            nombre: "Legumbres",
            cantidad: 2,
            precioSinIva: 1.65,
            tipoIva: "general",
            precioConIva: 2
        };
        const tiposDeIva : any = undefined;

        // Act
        
        // Assert
        expect(() => agregaImportePorTipoIva(resultadoLineaTicket, tiposDeIva)).toThrowError("No se recibió un array de resultados por tipo de IVA válido");
        
    });    

    it ("Debería devolver { tipoIva : general, cuantia : 0.35}  si paso { nombre : x, cantidad: 1, precioSinIva: 1.65, precioConIva : 2, tipoIva : general }", () => {

        // Arrange
        const resultadoLineaTicket : ResultadoLineaTicket = {
            nombre: "x",
            cantidad: 1,
            precioSinIva: 1.65,
            tipoIva: "general",
            precioConIva: 2
        };
        let tiposDeIva : TotalPorTipoIva[] = [];

        // Act
        agregaImportePorTipoIva(resultadoLineaTicket, tiposDeIva);

        // Assert
        expect(tiposDeIva).toEqual([
            {
                tipoIva: "general", 
                cuantia: 0.35
            }
        ]);

    });    


});

// Tests para "agregaImporteResultadoTotal"
describe("agregaImporteResultadoTotal", () => {

    it ("Debería devolver error si no se pasa el resultado de una línea de ticket válido", () => {

        // Arrange
        const resultadoLineaTicket : any = undefined;
        let resultadoTotal : ResultadoTotalTicket;

        // Act
        
        // Assert
        expect(() => agregaImporteResultadoTotal(resultadoLineaTicket, resultadoTotal)).toThrowError("No se recibió el resultado de una línea de ticket válida");
        
    });    

    it ("Debería devolver error si no se pasa el resultado total de ticket válido", () => {

        // Arrange
        const resultadoLineaTicket : ResultadoLineaTicket = {
            nombre: "Legumbres",
            cantidad: 2,
            precioSinIva: 1.65,
            tipoIva: "general",
            precioConIva: 2
        };
        const resultadoTotal : any = undefined;

        // Act
        
        // Assert
        expect(() => agregaImporteResultadoTotal(resultadoLineaTicket, resultadoTotal)).toThrowError("No se recibió el resultado total válido");
        
    });    

    it ("Debería devolver { totalSinIva : 1.65, totalConIva : 2, totalIva : 0.35 }  si paso { nombre : x, cantidad: 1, precioSinIva: 1.65, precioConIva : 2, tipoIva : general }", () => {

        // Arrange
        const resultadoLineaTicket : ResultadoLineaTicket = {
            nombre: "x",
            cantidad: 1,
            precioSinIva: 1.65,
            tipoIva: "general",
            precioConIva: 2
        };
        let resultadoTotal : ResultadoTotalTicket = {
            totalSinIva: 0,
            totalConIva: 0,
            totalIva: 0 
        };

        // Act
        agregaImporteResultadoTotal(resultadoLineaTicket, resultadoTotal);

        // Assert
        expect(resultadoTotal).toEqual(
            {
                totalSinIva : 1.65,
                totalConIva : 2,    
                totalIva : 0.35 
            }
        );

    });    

});