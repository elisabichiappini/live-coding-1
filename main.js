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