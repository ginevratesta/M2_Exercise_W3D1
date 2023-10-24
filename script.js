/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`\nESERCIZIO 1. 
Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3:\n`);

function crazySum(x, y) {
  if (x === y) {
    return (x + y) * 3;
  } else {
    return x + y;
  }
}

let result = crazySum(45, 45);

console.log(`Questo è il risultato del primo esercizio: ${result}.`);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`\nSERCIZIO 2.
Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro 
e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.\n`);

function boundary(z) {
  if (z > 20 && z <= 100 || z ===  400) {
    return true;
  } else {
    return false;
  }
}
let comparison = boundary(400);
console.log(`Questo è il risultato del secondo esercizio: ${comparison}`);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/
/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`\nESERCIZIO 3 
Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).\n`);

function reverseString(reverse) {
    let array = reverse.split("");
    let arrayReverse = [];
  for(let i = array.length -1; i >= 0; i --){
    arrayReverse.push(array[i])
  }
  return arrayReverse.join("");
}

let toReverse = reverseString(`EPICODE`);
console.log(`Questo è il risultato del terzo esercizio: ${toReverse}`);

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`\nESERCIZIO 4. 
Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.\n`);

//USANDO UN CICLO
function upperFirst(sentence) {
  let words = sentence.split(" "); //dividiamo la stringa sentence in un array di parole con .split
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1); //.charAt() viene utilizzato per selezionare un carattere specifico all'interno di una stringa
  } //.slice() estrae una parte da una stringa o da un array

  return words.join(" "); //rimettiamo insieme le stringhe dentro l'array e facciamole tornare una stringa unica
}

let finalSentence = upperFirst(`oggi potrebbe piovere`);
console.log(`Esercizio eseguito usando un ciclo: ${finalSentence}`);

//USANDO .MAP
function upperFirst2(string) {
  let words = string.split(" "); // Dividiamo la stringa in un array di parole usando .split

  // Usiamo map per elaborare ogni parola ed apportare a ciascuna le modifiche assegnate da .toUpperCase
  let result = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1); //.charAt viene utilizzato per selezionare un carattere specifico all'interno di una stringa
  }); //.slice() estrae una parte da una stringa o da un array

  return result.join(" "); //rimettiamo insieme le stringhe dentro l'array e facciamole tornare una stringa unica
}

let finalResult = upperFirst2("una splendida giornata di sole");
console.log(`Esercizio eseguito usando .map: ${finalResult}`);

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(`\nESERCIZIO 5. 
Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n 
e ritorna un array contenente n numeri random contenuti tra 0 e 10.\n`);

function giveMeRandom(n){
    let randomNumbers = [];
    for (let i = 0; i < n; i++) {
      let randomNumber = Math.floor(Math.random() * 11); // math.random genera un numero casuale tra 0 e 10 e math.floor fa si che escano solo numeri interi
      randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}
let randomResults = giveMeRandom(4);
console.log(randomResults);

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(`\nESERCIZI EXTRA:
ESERCIZIO 1.
Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.\n`);

function area(l1, l2) {
  return l1 * l2;
}

let resultArea = area(34, 53);
console.log(`L'area del rettangolo è di: ${resultArea}`);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(`\nESERCIZIO 2.
Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.\n`);

function crazyDiff(number) {
  const absoluteNumber = Math.abs(number - 19); //funzione che restituisce il valore assoluto di un numero
  return absoluteNumber > 19 ? absoluteNumber * 3 : absoluteNumber; //operatore ternario per eseguire la condizione
}

let absoluteResult = crazyDiff(30);
console.log(absoluteResult);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/
/* SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/
/* SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
