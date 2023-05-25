import { Episodio } from "./episodio.js";
export class Serie {
    constructor(imagen, nombre, categorias, nombreEpisodio, resumen, duracion) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.categorias = categorias;
        this.episodio = [new Episodio(nombreEpisodio, resumen, duracion)];
        this.plataformas = [];
    }
}
