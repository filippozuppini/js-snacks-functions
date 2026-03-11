/* Scrivi una funzione che accetti una stringa contenente un nome e 
restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

const inputName = () => {
    
    const result = 'Ciao ' + userName;

    return result
    
}


// Invoca la funzione qui e stampa il risultato in console

console.log(inputName());


//Risultato atteso se si passa 'Mario': // ciao Mario
