import { Serie } from "./serie.js";

export class Plataforma {
    nombre: string;
    sitioWeb: string;
    series: Serie[];

    constructor(nombre: string, sitioWeb: string) {
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.series = [];
    }
}