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
    return `Il valore dei due paramentri è uguale: ` + (x + y) * 3;
  } else {
    return `Il valore dei due parametri non è uguale ` + x + y;
  }
}

const result = crazySum(45, 45);

console.log(`Questo è il risultato del primo esercizio: ${result}.`);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`\nSERCIZIO 2.
Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro 
e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.\n`);

function boundary(z) {
  if ((z > 20 && z <= 100) || z === 400) {
    return true;
  } else {
    return false;
  }
}
const comparison = boundary(400);
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
  for (let i = array.length - 1; i >= 0; i--) {
    arrayReverse.push(array[i]);
  }
  return arrayReverse.join("");
}

const toReverse = reverseString(`EPICODE`);
console.log(`Questo è il risultato del terzo esercizio: ${toReverse}`);

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`\nESERCIZIO 4. 
Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.\n`);

function upperFirstWord(sentence) {
  let words = sentence.split(" "); // Dividiamo la stringa in un array di parole

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] =
      word.charAt(0).toUpperCase() +
      word.slice(
        1
      ); /* con .charAt(0) selezioniamo la prima lettera di ogni parola e con .toUpperCase() 
      la rendiamo maiuscola, .slice(1) raggruppa ed esclude dal processo tutte le altre lettere di ogni parola a partire dalla seconda */
  }

  return words.join(" "); // Rimettiamo di nuovo insieme le parole in una stringa
}

const finalSentence = upperFirstWord(`una splendida giornata di sole`);
console.log(`Questo è il risultato del quarto esercizio: ${finalSentence}`);

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(`\nESERCIZIO 5. 
Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n 
e ritorna un array contenente n numeri random contenuti tra 0 e 10.\n`);

function giveMeRandom(n) {
  let randomNumbers = [];
  for (let i = 0; i < n; i++) {
    let randomNumber = Math.floor(Math.random() * 11); // math.random genera un numero casuale tra 0 e 10 e math.floor fa si che escano solo numeri interi
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}
const randomResults = giveMeRandom(4);
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

const resultArea = area(34, 53);
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

const absoluteResult = crazyDiff(30);
console.log(absoluteResult);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(`\nESERCIZIO 3. 
Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, 
ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.\n`);

function codify(s) {
  if (s.indexOf(`code`) === 0) {
    //per questo esercizio usiamo .indexOf() che resistuisce l'indice di un elemento dentro un array o una stringa
    return s;
  } else {
    return `code ` + s;
  }
}

const string = codify(`questa è una stringa`);
console.log(`Questo è il risultato del terzo esercizio: ${string}`);

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(`\nESERCIZIO 4.
Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
SUGGERIMENTO: operatore modulo\n`);
function check3and7(n) {
  if (n % 3 === 0 || n % 7 === 0) {
    return true;
  } else {
    return false;
  }
}

const positiveNumber = check3and7(70);
console.log(`Questo è il risultato del quarto esercizio: ${positiveNumber}`);

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(
  `\nScrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.\n`
);

function cutString(string) {
  return string.slice(1, -1); //Eliminiamo il primo e l'ultimo carattere dalla stringa con .slice()
}

const newPhrase = cutString(
  `ulteriore stringa a scopo dimostrativo per esercitarsi`
);
console.log(`Questo è il risultato del quinto esercizio: ${newPhrase}`);
