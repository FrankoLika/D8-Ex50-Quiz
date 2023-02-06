//21
let x = "John";
let y = "Doe"
console.log(x + " <> " + y);


//22
const persona = {
    nome : "franko",
    surname : "lika",
    email : "likafranko97#gmail.com"
}
//23
delete persona.email;
console.log(persona);


//24
const array = ["prima", "seconda", "terza", "quarta", "quinta", "sesta", "settima", "ottava", "nona", "decima"]
//25
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}


//26
const array2 = [];
for(let i = 0; i <= 100; i++){
    let numeroRandomico = Math.floor(Math.random()*100);
    array2.push(numeroRandomico);
}


//27
function trovaMm(arr){
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    console.log(min);
    console.log(max);
   
}
trovaMm(array2);


//28
const array3 = [
    [],
    []
]
for(let i = 0; i < 10; i++){
    let numRandom = Math.floor(Math.random()*100);
    array3[0].push(numRandom);
}
for(let i = 0; i < 10; i++){
    let numRandom = Math.floor(Math.random()*100);
    array3[1].push(numRandom);
}
console.log(array3);


//29
const array4 = [1, 2, 3, 4, 5]
const array5 = [1, 2, 3, 4, 5, 6]
function piuElementi(arr,arr2){
    if(arr.length > arr2.length){
        console.log("il primo array ha più elementi : " + arr);
    }else{
        console.log("il secondo array ha più elementi : " + arr2);
    }
}
piuElementi(array4, array5);


//30
const array6 = [1, 2, 3, 4, 5,];
const array7 = [10, 20, 30, "ciao"];
function sommM(arr, arr2){
    let sommaArr = 0;
    let sommaArr2 = 0;
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number"){
            sommaArr += arr[i];
        }
    }
    for(let i = 0; i < arr2.length; i++){
        if(typeof arr2[i] === "number"){
            sommaArr2 += arr2[i];
        }
    }
    if(sommaArr > sommaArr2){
        console.log("il primo array ha la somma più alta : " + sommaArr);
    }else{
        console.log("il secondo array ha  la somma più alta : " + sommaArr2);
    }
}
sommM(array6, array7);


//31
let c = document.getElementById("container");


//32
let elements = document.getElementsByTagName("td");
//33
for(let i = 0; i < elements.length; i++){
    console.log(elements[i]);
}


//34
function cambiaTitolo(){
    let titolo = document.getElementsByTagName("h1")[0];
    titolo.innerText("nuovo titolo")
}


//35
function nuovaRiga(){
    let tabella = document.getElementsByTagName("table")[0];
    const tr = docum.createElement();
    tabella.appendChild(tr);
}


//36
function aggiungiClasse(){
    let tr = document.getElementsByTagName("tr");
    for(let element of tr){
    element.classList.add("test");
    }
}


//37
function aggiungiSfondo(){
    let links = document.getElementsByTagName("a");
    for(let link of links){
        link.style.backgroundColor = "red";
    }
}


//38
window.onload = function(){
    console.log("Page loaded")
}


//39
function aggNuoviElementi(){
    let lista = document.getElementsByTagName(ol)[0];
    const ol = documemt.createElement();
    lista.appendChild(ol);
}


//40
function svuotaElementi(){
    let liste = document.getElementsByTagName(li);
    for(let l of liste){
        l.remove();
    }
}


//41
    document.getElementsByTagName("a").addEventListener("hover", alertLinks );
    function alertLinks(){
        alert('https://www.youtube.com/');
    }


//42
function togliImg(){
    let imgs = document.getElementsByTagName("img");
    for(let img of imgs){
        img.style.visibility = "hidden";
    }
}


//43
function togliTabella(){
    let tabella = document.getElementsByTagName("table")[0];
    tabella.style.visibility = "hidden";
}
function rimettiTabella(){
    let tabella = document.getElementsByTagName("table")[0];
    tabella.style.visibility = "visible";
}


//44
let celle = document.getElementsByTagName(td);
function sommaNum(arr){
let somma = 0;
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number"){
        somma += arr[i];
    }
}
return somma
}


//45
document.getElementsByTagName("h1")[0].addEventListener(click , togliLettera)
function togliLettera(){
   //non so come continuare
}


//46
//47
//48
//49
//50
