export class Plataforma {
    constructor(nombre, sitioWeb, serie) {
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.series = [serie];
        this.plataformas = [this];
    }
    agregarPlataforma(plataforma) {
        if (this.plataformas.length === 0) {
            this.plataformas = [];
        }
        else {
            this.plataformas.push(plataforma);
        }
    }
    mostrarPlataforma() {
        console.log(this.plataformas);
    }
    mostrarDetallePlataforma(nombre) {
        if (this.series.filter(serie => serie.nombre === nombre)) {
            console.log(`La plataforma de la serie ${nombre} es ${this.nombre}`);
        }
        ;
    }
}
