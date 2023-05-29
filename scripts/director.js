import { Rol } from "./rol.js";
export class Director extends Rol {
    constructor(nombre, fotografia, descripcion, serie) {
        super(nombre, fotografia, descripcion);
        this.series = [serie];
        this.directores = [this];
    }
    agregarDirector(director) {
        if (this.directores.length === 0) {
            this.directores = [];
        }
        else {
            this.directores.push(director);
        }
    }
    mostrarDirectores() {
        console.log(this.directores);
    }
    mostrarDetalleDirector(nombre) {
        if (this.series.filter(serie => serie.nombre === nombre)) {
            console.log(`El director de la serie ${nombre} es ${this.nombre}`);
        }
        ;
    }
}
