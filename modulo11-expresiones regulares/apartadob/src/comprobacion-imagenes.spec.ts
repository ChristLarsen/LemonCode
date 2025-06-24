import {
  extraeImagenes,
} from "./comprobacion-imagenes";

describe("extraeImagenes", () => {
  test.each([
    ["<img src='https://www.blabla.com/image1.jpg' />", ["https://www.blabla.com/image1.jpg"]],
    ["<div>blabla</div>", []],
    ["<img src='http://localhost:3000/./bestiajez.webp' />", ["http://localhost:3000/./bestiajez.webp"]],
    ["<img src='http://localhost:3000/./bestiajez.webp' />\n<img src='http://localhost:3000/./patrona.jpg' />",
      ["http://localhost:3000/./bestiajez.webp", "http://localhost:3000/./patrona.jpg"]],
  ])(
    "Debería extraer las imágenes del HTML %p y ser %p",
    (html: string, esperado: string[]) => {
      expect(extraeImagenes(html)).toEqual(esperado);
    }
  );
});

