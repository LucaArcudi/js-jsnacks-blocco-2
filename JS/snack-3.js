// Calcola la somma dei primi 10 numeri di un array.

let numbers = [2, 4, 6, 12, 8, 10, 14, 16, 18, 20];

let somma = 0;

for(let i = 0; i < 10; i++){
    somma += numbers[i];
}

console.log(somma);