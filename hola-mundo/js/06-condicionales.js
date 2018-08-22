'use strict'

// Condicional if
// Si A es igual a B entoces haz algo

let age1 = 30;
let age2 = 12;

if(age1 > age2 ){
    console.log("Edad 1 es mayor a edad 2");
}else{
    console.log("La edad uno es inferior");
}
/******************************************************************/
let age = 15;
let name = 'Sergio Peinado';

if (age >= 18){
    console.log('El usuario se llama '+name+' y es mayor de edad');
    if (age <= 33){
        console.log('Todavia eres milenial');
    }else if (age >= 70) {
        console.log('Eres anciano');
    }else{
        console.log('Ya no eres milenial');
    }
}else{
    console.log('El usuario se llama '+name+' y es menor de edad');
}

