/* Scrivi una funzione che accetti un array di nomi e restituisca
nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.


function trovaIniziali(array) {
    const iniziali = [];
    
    // scorriamo array[i]
    for (let i = 0; i < array.length; i++){

        // di ogni array[i] prendiamo il primo elemento [0] e lo pushamo nel array vuoto
        iniziali.push(array[i][0]);

    }

    return iniziali;
}



// Invoca la funzione qui e stampa il risultato in console

console.log(trovaIniziali(names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]