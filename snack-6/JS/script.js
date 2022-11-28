// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

let numberList = [1, 2, 3, 4, 5, 6, 7];

let sum = 0;

for( let i = 0; i < numberList.length; i++){



    if (i % 2 === 1){
        sum += numberList[i];
    }
}

console.log(sum);



