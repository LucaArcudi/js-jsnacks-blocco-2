// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

let numbers = [];


for (let i = 0; i < 6; i++){

    let inputNumber = parseInt(prompt("Inserisci un numero"));

    if (inputNumber % 2 == 1){
        numbers.push(inputNumber);
    }

}

console.log(numbers);