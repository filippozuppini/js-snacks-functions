/* Scrivi una funzione che accetti una stringa contenente un 
nome e restituisca un saluto seguito dal nome fornito. 

Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)

*/

const name = 'Mario';


// Dichiara la funzione qui.

function sayHello (nome){
    
    const d = new Date();
    let hour = d.getHours();

    let saluto = '';

    if (hour <= 13) {
        // console.log(`Buongiorno ${nome}`);

        saluto = `Buongiorno ${nome}`;
        
    } else if (hour <= 17) {
        // console.log(`Buon pomeriggio ${nome}`);
        saluto = `Buon pomeriggio ${nome}`;

    } else {
        // console.log(`Buonasera ${nome}`);
        saluto = `Buonasera ${nome}`;

    }

    return saluto;


}

console.log(sayHello(name));







// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.