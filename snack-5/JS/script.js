/**
 *
 * Generatore di persone fittizie casuali:
 * Il Grande Gatsby ha una lista di nomi e una lista di cognomi, da queste vuole generare una falsa lista di invitati con nome e cognome.
 *
 */

const names = ['Michela', 'Giuseppina', 'Taylor','Donna', 'Marsha', 'Fabio', 'Roberto'];
const lastnames = ['Cappelletti', 'Jager', 'Porcinelli' , 'Buffetti' , 'Forghieri', 'Papagni', 'Marazzini'];


let guests = [];

while (guests.length < 10){

        
    
    let randomName = Math.floor(Math.random() * (names.lenght));
    let randomLastnames = Math.floor(Math.random() * (lastnames.lenght));

    let guest = names[randomName] + "" + lastnames[randomLastnames];

    if (guests.indexOf(guest) === -1);
    guests.push(guest);
    

} 

console.log(guests);







