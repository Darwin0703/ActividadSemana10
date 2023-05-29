import { Serie } from "./serie.js";

export class Plataforma {
    nombre: string;
    sitioWeb: string;
    series: Serie[];
    plataformas: Plataforma[];

    constructor(nombre: string, sitioWeb: string, serie:Serie) {
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.series = [serie];
        this.plataformas = [this];
    }
    agregarPlataforma(plataforma:Plataforma):void{
        if(this.plataformas.length === 0){
            this.plataformas = [];
        }else{
            this.plataformas.push(plataforma);
        } 
    }
    
    mostrarPlataforma():void{
        console.log(this.plataformas);
    }

    mostrarDetallePlataforma(nombre:string):void{
        if(this.series.filter(serie => serie.nombre === nombre)){
            console.log(`La plataforma de la serie ${nombre} es ${this.nombre}`);
        };    
    }
}