import { Plataforma } from "./plataforma.js";

export class Precio {
    valor: number;
    plataformas: Plataforma[];

    constructor(valor: number, plataforma: Plataforma) {
        this.valor = valor;
        this.plataformas = [plataforma]
    }
}