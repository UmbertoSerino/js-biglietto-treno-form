

// costo biglietto per km
const prezzoBiglietto = 0.1976;
// sconto biglietto minorenne 17.65%
const distanzaUtenteMinorenne = 1.0 - 0.1765;
// sconto over 65 53.27%
const distanzaUtenteOver = 1.0 - 0.5327;
// così abbiamo creato le 3 costanti che andremo a richiamarci nella funzione

// creiamo dove andarci a prendere i valori segnati dal cliente nel DOM
const elementDistanzaUtente = document.querySelector (".user-distance");
const elementEtaUtente = document.querySelector (".user-age");
const elementButton = document.querySelector (".output-button");
// prendiamo l'elemento span inserito nell html dove poi andremo a inserire il calcolo finale
const elementRisultato = document.querySelector(".result")

// creiamo una funzione di callback dove il cliente inseriti i dati e cliccato sul bottone fa generare il risultato finale

// Diamo un nome al alla lista di eventi , utilizzamo la funzione "click" per indicare che al click succederanno queste cose e ci creiamo la funzione 
elementButton.addEventListener("click", function (){
    // creiamo una variabile dove andremo a prenderci il valore inserito dal cliente
    // il punto value alla fine è per prendere il valore, mentre il parseFloat ci occorre per includere eventuali numeri decimali
    const distance = parseFloat(elementDistanzaUtente.value);
    // stessa cosa facciamo per il valore di eta inserito dal cliente
    const age = parseInt(elementEtaUtente.value);
    // in questo caso usiamo parseInt in cui vogliamo prendere solo i numeri interi

  // presa la distanza inserita dal cliente calcoliamoci il costo che andrà a pagare senza lo sconto
  let prezzoTotale = prezzoBiglietto * distance;

  // creiamoci la condizione
  if (age < 18) {
    prezzoTotale = prezzoTotale * distanzaUtenteMinorenne;
    // se il numero di età inserito è stato minore di 18 allora si applicherà lo sconto del 17%
  } else if (age >= 65) {
    prezzoTotale = prezzoTotale * distanzaUtenteOver;
    // se il numero di età inserito è superiore o uguale a 65 allora si applicherà lo sconto del 53.27%
  }
  // richiamato elementRisultato per andare ad inserire il valore finale
    elementRisultato.innerHTML = prezzoTotale.toFixed(2) + '€';
 });


