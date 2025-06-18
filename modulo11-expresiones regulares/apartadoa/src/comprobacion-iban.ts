import { DatosIBAN } from './comprobacion-iban-model';

// Función que valida un IBAN en España
export const validarFormatoIBAN = (value : string) : DatosIBAN => {

    const patron = /^[A-Za-z]{2}(?<digitosControl>\d{2})(\s|-)?(?<codigoBanco>\d{4})(\s|-)?(?<codigoSucursal>\d{4})(\s|-)?\d{2}(\s|-)?(?<codigoCuenta>\d{10})$/;
    const resultado = patron.exec(value);

    if (resultado?.groups) {
        return {
            formatoOK : true,
            codigoBanco : resultado.groups.codigoBanco,
            codigoSucursal : resultado.groups.codigoSucursal,
            digitosControl : resultado.groups.digitosControl,
            cuenta : resultado.groups.codigoCuenta,
            iban : value
        };
    } else {
        return {
            formatoOK : false,
            codigoBanco : '',
            codigoSucursal : '',
            digitosControl : '',
            cuenta : '',
            iban : ''
        };
    };

};