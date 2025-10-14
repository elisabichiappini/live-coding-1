'use strict';

const users = [
  { name: "Anna", age: 28 },
  { name: "Marco", age: 17 },
  { name: "Luca", age: 35 },
  { name: "Giulia", age: 22 }
];


const overs = users.filter((u) => u.age >= 18);
console.log(overs);

const somma = overs.reduce((acc, curr) => acc + curr.age, 0 );
const media = somma / overs.length;
console.log(media);