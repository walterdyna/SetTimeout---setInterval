/*
SetTimeout & setInterval

setTimeout  ---> Executa uma unica vez
setInterval ---> Executa infinitas vezes '
clearInterval -> Vai pausar o SetInterval
*/

// setTimeout(() => { // errom function  ---> os parentes e a seta informa que e uma funçao...
//     alert("sem nada")

// }, 3000);


// setTimeout(function() {
//     alert("function")
// }, 4000); // 1000 mileSegundos => 1 segundo

// function myFuncion(){
//     alert("Aqui e my Funcion")
// }
// setTimeout(myFuncion, 5000)

// let number = 0
// setInterval(() => {
//     console.log(number++)
// },1000);

let number = 0
let cron
let h1 = document.querySelector('h1')

function start(){

    cron = setInterval(function(){
    number++
    h1.innerHTML = number
})
}

function stop(){

}