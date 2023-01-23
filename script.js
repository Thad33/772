//function increament(){
   // console.log("Button was clicked")
//}
//increament()
//function  myLogger() {
    //console.log(20)
//}
let countEl = document.getElementById("count-el");
console.log(count);
let count = 0;
function increment(){
    count = count + 1;
    countEl.innerText = count;
}
 function save(){
    console.log(count)
 }
 //screen concatination

 //
 //let username = "per";
 //let message = "You have tree new notification ";

 //let messageToUser = message + "" + username; 
 //console.log(message);

 //let namE = "John";
 //let greeting = "Hi my name is";

 //let myGreeting = greeting + namE; 
 //console.log(myGreeting);

let welcomeEL = documement.getElementById("welcome");
 let namE = "Thaddaeus";
 let greeting = "Welcome back ";

 welcomeEL.innerText = greeting + namE;
