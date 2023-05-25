export class Episodio {
    constructor(nombreEpisodio, resumen, duracion) {
        this.nombre = nombreEpisodio;
        this.resumen = resumen;
        this.duracion = duracion;
        this.series = [];
    }
}
