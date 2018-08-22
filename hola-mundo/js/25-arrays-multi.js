'use strict'

var categorias = 'Accion, Terror , Comedia';
var peliculas = ['Los vengadores', 'La monja', 'Los increibles'];

var cine = [categorias, peliculas];

// console.log(cine[0][1]);
// console.log(cine[1][1])

var elemento;

// do{
//     elemento = prompt('Introduce tu pelicula:');
//     peliculas.push(elemento);
//
// }
// while (elemento != 'Acabar');
// peliculas.pop();

var pelis = peliculas.join();
var categories = categorias.split(', ');

console.log(pelis);
console.log(categories);