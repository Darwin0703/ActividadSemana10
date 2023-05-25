import { Episodio } from "./episodio.js";
import { Plataforma } from "./plataforma.js";

export class Serie {
    imagen: string;
    nombre: string;
    categorias: "accion" | "drama" | "romance";
    episodio: Episodio[];
    plataformas: Plataforma[];

    constructor(imagen: string, nombre: string, categorias: "accion" | "drama" | "romance", nombreEpisodio: string, resumen: string, duracion: string) {
        this.imagen = imagen;
        this.nombre = nombre
        this.categorias = categorias;
        this.episodio = [new Episodio(nombreEpisodio, resumen, duracion)];
        this.plataformas = [];
    }
}