import { Actor } from "./actor.js";
import { Director } from "./director.js";
import { Episodio } from "./episodio.js";
import { Plataforma } from "./plataforma.js";

export class Serie {
    imagen: string;
    nombre: string;
    categorias: "accion" | "drama" | "romance";
    episodio: Episodio[];
    plataformas: Plataforma[];
    series:Serie[];
    /* directores:Director[];
    actores:Actor[]; */

    constructor(imagen: string, nombre: string, categorias: "accion" | "drama" | "romance", nombreEpisodio: string, resumen: string, duracion: string) {
        this.imagen = imagen;
        this.nombre = nombre
        this.categorias = categorias;
        this.episodio = [new Episodio(nombreEpisodio, resumen, duracion)];
        this.plataformas = [];
        this.series = [this]; 

    } 
    agregarSerie(serie:Serie):void{
         if(this.series.length === 0){
            this.series = [];
        }else{
            this.series.push(serie)
        }      
    }
    
    mostrarSerie():void{
        console.log(this.series);
    }

    mostrarDetalleSerie(nombre:string):void{
        let detalleSerie = this.series.filter(serie => serie.nombre === nombre);
        console.log(detalleSerie);
    }

    listaCategorias():void{
        let categorias:string[] = [];
        this.series.forEach(function(categoria){
            categorias.push(categoria.categorias)
        })
        console.log(categorias)
    }
}