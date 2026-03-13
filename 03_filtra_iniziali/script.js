/* Scrivi una funzione che accetti un'array di stringhe e
 una lettera e restituisca un array contenente solo le parole
 che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

//dichiaro la funzione e do in etrata l'array e una lettera
function trovaNome (array, lettera){

    const askedNames = [];
    
    // scorro l'array 
    for (let i = 0; i < array.length; i++){
        
        // se la prima parola inizia per la lettera data in entrata
        if (array[i][0] === lettera) {

            // push al nuovo array
            askedNames.push(array[i])
        }

    }

    return askedNames;

}




// Invoca la funzione qui e stampa il risultato in console

console.log(trovaNome(names, 'A'));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]