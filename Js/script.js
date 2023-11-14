

// costo biglietto per km
const prezzoBiglietto = 0.1976;
// sconto biglietto minorenne 17.65%
const distanzaUtenteMinorenne = 1.0 - 0.1765;
// sconto over 65 53.27%
const distanceUtenteOver = 1.0 - 0.5327;
// così abbiamo creato le 3 costanti che andremo a richiamarci nella funzione

// creiamo dove andarci a prendere i valori segnati dal cliente nel DOM
const elementDistanzaUtente = document.querySelector ("user-distance");
const elementEtaUtente = document.querySelector ("user-age");
const elementButton = document.querySelector ("output-button");
// prendiamo l'elemento span inserito nell html dove poi andremo a inserire il calcolo finale
const elementRisultato = document.querySelector("result")

// creiamo una funzione di callback dove il cliente inseriti i dati e cliccato sul bottone fa generare il risultato finale

// Diamo un nome al alla lista di eventi , utilizzamo la funzione "click" per indicare che al click succederanno queste cose e ci creiamo la funzione 
ticketGenerato.addEventListener("click", function (){
    // creiamo una variabile dove andremo a prenderci il valore inserito dal cliente
    const distance = parseFloat(elementDistanzaUtente.value); 
    // il punto value alla fine è per prendere il valore, mentre il parseFloat ci occorre per includere eventuali numeri decimali

    // stessa cosa facciamo per il valore di eta inserito dal cliente
    const age = parseInt(elementEtaUtente.value);
    // in questo caso usiamo parseInt in cui vogliamo prendere solo i numeri interi

  // presa la distanza inserita dal cliente calcoliamoci il costo che andrà a pagare senza lo sconto
  let prezzoTotale = prezzoBiglietto * distance;

  // creiamoci la condizione

    if (elementEtaUtente < 18){
      prezzoTotale = prezzoTotale * distanzaUtenteMinorenne;
      // se il numero di elementEtaUtente inserito è stato minore di 18 allora si applicherè lo sconto del 17%
    } else {
     (elementEtaUtente >= 65)
      prezzoTotale = prezzoTotale * distanceUtenteOver;
      // se il numero di elementEtaUtente inserito è stato supreiore o uguale a 65 allora si apprichera lo sconto del 53.27%

    }
    console.warn(distance, age, 'prezzo: ',prezzoTotale);
    outputElement.innerHTML = prezzoTotale.toFixed(2) + '&euro;';
 });


