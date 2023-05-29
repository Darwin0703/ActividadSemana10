import { Rol } from "./rol.js";
export class Actor extends Rol {
    constructor(nombre, fotografia, descripcion, serie) {
        super(nombre, fotografia, descripcion);
        this.series = [serie];
        this.actores = [this];
        this.nombre = nombre;
    }
    agregarActor(actor) {
        if (this.actores.length === 0) {
            this.actores = [];
        }
        else {
            this.actores.push(actor);
        }
    }
    mostrarActores() {
        console.log(this.actores);
    }
    mostrarDetalleActor(nombre) {
        if (this.series.filter(serie => serie.nombre === nombre)) {
            console.log(`El actor de la serie ${nombre} es ${this.nombre}`);
        }
        ;
    }
}
