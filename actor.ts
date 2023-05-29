import { Rol } from "./rol.js";
import { Serie } from "./serie.js";

export class Actor extends Rol{
    series:Serie[];
    actores:Actor[];

    constructor(nombre:string, fotografia:string, descripcion:string, serie:Serie){
        super(nombre, fotografia, descripcion);
        this.series = [serie];
        this.actores = [this]
        this.nombre = nombre;
    }

    agregarActor(actor:Actor){
        if(this.actores.length === 0){
           this.actores = [];
       }else{
           this.actores.push(actor);
       }      
    }

    mostrarActores():void{
        console.log(this.actores);
    }


    mostrarDetalleActor(nombre:string){
        if(this.series.filter(serie => serie.nombre === nombre)){
            console.log(`El actor de la serie ${nombre} es ${this.nombre}`);
        };    
    }
}