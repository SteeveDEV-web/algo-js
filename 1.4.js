const readlineSync = require("readline-sync");

let firstName = readlineSync.question('Can you give me your first name please?');
let name = readlineSync.question('Can you give me your name please?');
let city = readlineSync.question('Can you give me your city please?');

console.log("Hello my name is " + firstName, name + " and I live in " + city); // insérer une virgule entre deux variables pour créer un espace"