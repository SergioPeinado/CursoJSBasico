'use strict'

/*
   1. Pida 6 numeros por pantalla y los meta en un array
   2. Mostrar el array entero en el cuerpo de la pagina y en la cosola
   3. Ordenar  y mostrarlo el array
   4. Invertir su orden y mostrarlo
   5. Mostrar cuantos elementos tiene el array
   6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
 */

var numbers = new Array(6);

for (var i = 0; i<=5; i++){
    numbers.push(parseInt(prompt('Introduce un numero', 0)));
}
document.write('<h1>Numeros</h1>');
document.write('<ul>');

numbers.forEach(number=>{
    document.write('<li>'+number+'</li>');
})

document.write('</ul>');


for (let number in numbers){
    console.log(numbers[number]);
}
numbers.sort();
console.log(numbers);