import { Rol } from "./rol.js";

export class Actor extends Rol{

    constructor(nombre:string, fotografia:string, descripcion:string){
        super(nombre, fotografia, descripcion);
    }
}