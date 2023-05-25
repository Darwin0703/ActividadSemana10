import { Actor } from "./actor.js";
import { Episodio } from "./episodio.js";
import { Serie } from "./serie.js";

const serie1 = new Serie("url/imagen", "Halo", "accion", "El inicio", "Master chief llaga a salvar al planeta", "54 minuto");
const episodio1 = new Episodio("El inicio", "Master chief llaga a salvar al planeta", "56 minutos");
const actor1 = new Actor("Pablo Schreiber", "./imagen/Pablo", "Pablo Tell Schreiber es un actor canadiense-estadounidense conocido por su actuación teatral y por los personajes de Nick Sobotka en la serie The Wire de HBO");

console.log(serie1);
console.log(episodio1);
console.log(actor1);