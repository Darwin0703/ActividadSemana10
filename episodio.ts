import { Serie } from "./serie.js";

export class Episodio {
    nombre: string;
    resumen: string;
    duracion: string;
    series: Serie[];

    constructor(nombreEpisodio: string, resumen: string, duracion: string) {
        this.nombre = nombreEpisodio;
        this.resumen = resumen;
        this.duracion = duracion;
        this.series = [];
    }
}