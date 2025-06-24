
// Función que busca imágenes en un HTML
export const extraeImagenes = (html : string) : string[] => {

    let imagenes : string[] = [];
    const patron = /<img\ssrc=(["'])(?<url>[A-Za-z:\/0-9.]*)(["']).*>/gm;
    
    let resultado;
    while ((resultado = patron.exec(html)) !== null) {
        if (resultado.groups?.url) {
            imagenes.push(resultado.groups.url);
        }
    };

    return imagenes;

};