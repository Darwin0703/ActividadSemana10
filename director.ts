import { Rol } from "./rol.js";

export class Director extends Rol{

    constructor(nombre:string, fotografia:string, descripcion:string){
        super(nombre, fotografia, descripcion);
    }
}