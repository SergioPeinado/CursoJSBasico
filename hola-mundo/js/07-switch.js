'use strict'

// Switch

let age = 18;
let imprime = '';

switch (age) {
    case 18:
        imprime = 'Acabas de cumplir la mayoria de edad';
        break;
    case 25:
        imprime = 'Ya eres un adulto';
        break;
    case 40:
        imprime = 'Crisis de los cuarenta';
        break;
    case 75:
        imprime = 'Eres un anciano';
        break;
    default:
        imprime = 'Eres menor de edad';
        break;
}
console.log(imprime);