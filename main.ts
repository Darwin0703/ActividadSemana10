import { Actor } from "./actor.js";
import { Director } from "./director.js";
import { Plataforma } from "./plataforma.js";
import { Serie } from "./serie.js";

/// Se crean los objetos de tipo Serie y se agregan mediante el meodo agregar serie
const serie = new Serie("imagen.png", "Halo", "accion", "El inicio", "Master chief llaga a salvar al planeta", "54 minutos");
const serie1 = new Serie("image.jpg", "Mandalorian", "accion", "El mandaloriano", "#", "1:50");
serie.agregarSerie(serie1);
const serie2 = new Serie("image.sv", "Game of Thrones", "accion", "Winter is Coming", "#", "00:56");
serie.agregarSerie(serie2)

//Se muestra el listado de las series creadas
console.log("Series: ")
serie.mostrarSerie()
//Se muestra el detalle de una serie especfica por nombre
serie.mostrarDetalleSerie("Mandalorian");
// Se listan las categorias a las que pertenecen las series agregadas
console.log("Categorias: ")
serie.listaCategorias();

//Se crean objetos de tipo Director, se asocia a una serie y se agrega mediante metodo agregar director
const director = new Director("Jon Favreau", "image.png", "#", serie1)
const director1 = new Director("Mark Mylod", "image.jpg", "#", serie2)
director.agregarDirector(director1);
const director2 = new Director("Otto Bathurst", "image.jpg", "#", serie)
director.agregarDirector(director2);

//Se muestra el listado de las directores 
console.log("Directores: ")
director.mostrarDirectores();
//Se muestra el detalle de un director por el nombre de la serie
director.mostrarDetalleDirector("Halo");

//Se crean objetos de tipo Actor, se asocia a una serie y se agrega mediante metodo agregar Actor
const actor = new Actor("Pablo Schreiber","foto.jpg","#",serie);
const actor1 = new Actor("Pedro Pascal","foto.png","#",serie1);
actor.agregarActor(actor1);
const actor2 = new Actor("Kit Harington","foto.png","#",serie2);
actor.agregarActor(actor2);

//Se muestra el listado de los Actores 
console.log("Actores: ")
actor.mostrarActores();
//Se muestra el detalle de un actor por el nombre de la serie
actor.mostrarDetalleActor("Halo");

//Se crean objetos de tipo Plataforma, se asocia a una serie y se agrega mediante metodo agregar Plataforma
const plataforma = new Plataforma("Paramount Plus", "https://www.paramountplus.com/co/", serie);
const plataforma1 = new Plataforma("Disney Plus", "https://www.disneyplus.com/", serie1);
plataforma.agregarPlataforma(plataforma1);
const plataforma2 = new Plataforma("HBO Max", "https://play.hbomax.com/", serie2);
plataforma.agregarPlataforma(plataforma2);

//Se muestra el listado de las Plataformas 
plataforma.mostrarPlataforma();
//Se muestra el detalle de una Plataforma por el nombre de la plataforma
plataforma.mostrarDetallePlataforma("Halo")

