let valoreSelezionatoDiff;
let valoreSelezionatoNum;
function inviaImpostazioni() {
  let difficolta = document.getElementsByName("difficolta");
  for (let i = 0; i < difficolta.length; i++) {
    if (difficolta[i].checked) {
      valoreSelezionatoDiff = difficolta[i].value;
      break;
    }
  }
  let numeroD = document.getElementsByName("numeroD");
  for (let i = 0; i < numeroD.length; i++) {
    if (numeroD[i].checked) {
      valoreSelezionatoNum = numeroD[i].value;
      break;
    }
  }

  let contDif = document.getElementById("diff");
  let contNum = document.getElementById("numDom");

  contDif.innerText = "Difficoltà : " + valoreSelezionatoDiff;
  contNum.innerText = "Numero Domande : " + valoreSelezionatoNum;
}

function cambioContenuto() {
  let container = document.getElementById("tutto");
  container.classList.add("invisibilitaPrimoCont");
  let secondoContenuto = document.getElementById("secondoContenuto");
  secondoContenuto.classList.remove("visSecondoContenuto");
}

let punteggio = 0;
let domandeFatte = 0;
function controlloRisposta() {
  let rispEs = document.getElementById("esatta");
  let rispSbagliate = document.getElementsByClassName("sbagliata");
  let btns = document.getElementsByClassName("btns");
  if (rispEs.checked) {
    punteggio++;
    domandeFatte++;
    btns[0].style.backgroundColor = "#006400";
    btns[1].style.backgroundColor = "#8B0000";
    btns[2].style.backgroundColor = "#8B0000";
    btns[3].style.backgroundColor = "#8B0000";
  } else if (rispSbagliate[0].checked) {
    domandeFatte++;
    btns[0].style.backgroundColor = "#006400";
    btns[1].style.backgroundColor = "#8B0000";
    btns[2].style.backgroundColor = "#8B0000";
    btns[3].style.backgroundColor = "#8B0000";
  } else if (rispSbagliate[1].checked) {
    domandeFatte++;
    btns[0].style.backgroundColor = "#006400";
    btns[1].style.backgroundColor = "#8B0000";
    btns[2].style.backgroundColor = "#8B0000";
    btns[3].style.backgroundColor = "#8B0000";
  } else if (rispSbagliate[2].checked) {
    domandeFatte++;
    btns[0].style.backgroundColor = "#006400";
    btns[1].style.backgroundColor = "#8B0000";
    btns[2].style.backgroundColor = "#8B0000";
    btns[3].style.backgroundColor = "#8B0000";
  }
}

function prossima() {
  let counterDom = document.getElementById("counter-Domande");
  counterDom.innerText = "Domanda n°2";
  let rispEs = document.getElementById("esatta");
  let rispSbagliate = document.getElementsByClassName("sbagliata");
  let btns = document.getElementsByClassName("btns");
  rispEs.checked = false;
  for (let btn of btns) {
    btn.style.removeProperty("background-color");
  }
  for (let i = 0; i < rispSbagliate.length; i++) {
    rispSbagliate[i].checked = false;
  }
  let verifica = document.getElementById("verifica");
  verifica.classList.add("invisibilitaPrimoCont");
}

function nuovaVerifica() {
  let verificaN = document.getElementById("verificaN");
  verificaN.classList.remove("hidden-Verifica");
}
function nuovoNext() {
  let next = document.getElementById("btn-next");
  next.classList.add("invisibilitaPrimoCont")
  let nuovoNext = document.getElementById("next2");
  nuovoNext.classList.remove("hidden-Verifica");
}
function nuoveDomande() {
  let domanda = document.getElementById("domanda");
  domanda.innerText = " Di che colore è il sole?";
  let bottoni = document.getElementsByClassName("btns");
  let risposte = document.getElementsByName("risp");
  bottoni[0].innerText = "Blu";
  bottoni[1].innerText = "Rosso";
  bottoni[2].innerText = "Giallo";
  bottoni[3].innerText = "Verde";
}

function controlloRisposta2() {
  let rispEs = document.getElementById("esatta");
  let rispSbagliate = document.getElementsByClassName("sbagliata");
  let btns = document.getElementsByClassName("btns");
  if (rispEs.checked) {
    domandeFatte++;
    btns[0].style.backgroundColor = "#8B0000";
    btns[1].style.backgroundColor = "#8B0000";
    btns[2].style.backgroundColor = "#006400";
    btns[3].style.backgroundColor = "#8B0000";
  } else if (rispSbagliate[0].checked) {
    domandeFatte++;
    btns[0].style.backgroundColor = "#8B0000";
    btns[1].style.backgroundColor = "#8B0000";
    btns[2].style.backgroundColor = "#006400";
    btns[3].style.backgroundColor = "#8B0000";
  } else if (rispSbagliate[1].checked) {
    punteggio++;
    domandeFatte++;
    btns[0].style.backgroundColor = "#8B0000";
    btns[1].style.backgroundColor = "#8B0000";
    btns[2].style.backgroundColor = "#006400";
    btns[3].style.backgroundColor = "#8B0000";
  } else if (rispSbagliate[2].checked) {
    domandeFatte++;
    btns[0].style.backgroundColor = "#8B0000";
    btns[1].style.backgroundColor = "#8B0000";
    btns[2].style.backgroundColor = "#006400";
    btns[3].style.backgroundColor = "#8B0000";
  }
}

function prossima2() {
  let counterDom = document.getElementById("counter-Domande");
  counterDom.innerText = "Domanda n°3";
  let rispEs = document.getElementById("esatta");
  let rispSbagliate = document.getElementsByClassName("sbagliata");
  let btns = document.getElementsByClassName("btns");
  rispEs.checked = false;
  for (let btn of btns) {
    btn.style.removeProperty("background-color");
  }
  for (let i = 0; i < rispSbagliate.length; i++) {
    rispSbagliate[i].checked = false;
  }
  let verifica = document.getElementById("verifica");
  verifica.classList.add("invisibilitaPrimoCont");
}
function nuoveDomande2() {
  let domanda = document.getElementById("domanda");
  domanda.innerText = " Quanto fa 2*5+15  ?";
  let bottoni = document.getElementsByClassName("btns");
  let risposte = document.getElementsByName("risp");
  bottoni[0].innerText = "17";
  bottoni[1].innerText = "40";
  bottoni[2].innerText = "25";
  bottoni[3].innerText = "33";
}
function rimuoviHidden(){
    let fine = document.getElementById("next4");
    fine.classList.remove("hidden-Verifica");
}

function fine(){
  let cont = document.getElementById("secondoContenuto");
  cont.classList.add("invisibilitaPrimoCont")
}
function puntUser(){
 let username = document.getElementsByName("user")[0].value;
  alert("username : "+ username + " " + " punteggio : " + punteggio);
  
}