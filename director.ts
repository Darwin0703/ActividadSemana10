import { Rol } from "./rol.js";
import { Serie } from "./serie.js";

export class Director extends Rol{
    series:Serie[];
    directores:Director[];

    constructor(nombre:string, fotografia:string, descripcion:string, serie:Serie){
        super(nombre, fotografia, descripcion);
        this.series = [serie];
        this.directores = [this];
    }

    agregarDirector(director:Director){
        if(this.directores.length === 0){
           this.directores = [];
       }else{
           this.directores.push(director);
       }      
    }

    mostrarDirectores():void{
        console.log(this.directores);
    }

    mostrarDetalleDirector(nombre:string):void{
        if(this.series.filter(serie => serie.nombre === nombre)){
            console.log(`El director de la serie ${nombre} es ${this.nombre}`);
        };    
    }
}