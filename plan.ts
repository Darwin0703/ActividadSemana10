import { Plataforma } from "./plataforma.js";

export class Plan {
    tipo: string;
    plataformas: Plataforma[];

    constructor(tipo: string, plataforma: Plataforma) {
        this.tipo = tipo;
        this.plataformas = [plataforma];
    }
}