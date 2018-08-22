'use strict'

var name = 'Sergio Peinado';
var names = ['Sergio','Pepe', 'Lucas'];

var lenguajes = new Array('Php','Js','Android', 'Java','C#','Python');

// console.log(names.length);
// console.log(lenguajes[2]);

// var element = parseInt(prompt('Que elemento del array quieres?', 0));
// if (element >= names.length){
//     alert('Introduce un numero correcto');
// } else {
//     alert(names[element]);
// }

document.write('<h1>Lenguajes de programación de 2018</h1>');
document.write('<ul>');
// for (var i = 1; i <lenguajes.length ; i++){
//     document.write('<li>'+lenguajes[i]+'</li>');
// }
lenguajes.forEach(elemento=>{
    document.write('<li>'+elemento+'</li>');
})

for (let lenguaje in lenguajes){
    console.log(lenguajes[lenguaje]);
}
document.write('</ul>');

// Busquedas
var precios = [10,20 ,50 ,30]
var busqueda = precios.some(precio => precio >= 20);


console.log(busqueda);