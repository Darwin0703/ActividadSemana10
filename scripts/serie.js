import { Episodio } from "./episodio.js";
export class Serie {
    /* directores:Director[];
    actores:Actor[]; */
    constructor(imagen, nombre, categorias, nombreEpisodio, resumen, duracion) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.categorias = categorias;
        this.episodio = [new Episodio(nombreEpisodio, resumen, duracion)];
        this.plataformas = [];
        this.series = [this];
    }
    agregarSerie(serie) {
        if (this.series.length === 0) {
            this.series = [];
        }
        else {
            this.series.push(serie);
        }
    }
    mostrarSerie() {
        console.log(this.series);
    }
    mostrarDetalleSerie(nombre) {
        let detalleSerie = this.series.filter(serie => serie.nombre === nombre);
        console.log(detalleSerie);
    }
    listaCategorias() {
        let categorias = [];
        this.series.forEach(function (categoria) {
            categorias.push(categoria.categorias);
        });
        console.log(categorias);
    }
}
