'use strict';

//1 destructuring
const user = { name: "Elisa", age: 27, city: "Monza" };
const {name, city} = user;
//“Uso il destructuring per estrarre valori specifici da oggetti o array in modo più leggibile.”

//2 default parameters
function saluta (testo = 'ospite') {
    console.log(`ciao ${testo}`);
}
saluta('miao');
//“Uso i parametri di default per evitare errori quando un valore non viene fornito.”

//3 arrow function e map()
const numeri = [2, 5, 7, 10];
const doppi = numeri.map(n => n * 2);
console.log(doppi);
//“Uso .map() perché restituisce un nuovo array, e la arrow function rende il codice più compatto.”

//4 spread
const x = [0, 2 ,3];
const y = [9, 11];
const merge = [...x, ...y];
console.log(merge);

//5 rest Crea una funzione somma() che accetti un numero qualsiasi di argomenti e ritorni la loro somma.
const somma = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log(somma(3,4,5)); //12

