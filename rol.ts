import { Serie } from "./serie.js";

export abstract class Rol{
    nombre:string;
    fotografia:string;
    descripcion:string;
    series: Serie[];

    constructor(nombre:string, fotografia:string, descripcion:string){
        this.nombre = nombre;
        this.fotografia = fotografia;
        this.descripcion = descripcion;
        this.series = [];
    }
}