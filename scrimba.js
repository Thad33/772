let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;

let hasBlackJack = fasle;
let isAlive = true;

if (sum <= 20){
    console.log("Not eligible");
}else if (sum === 21){
    console.log("Wohoo! You've got BlackJack");
    hasBlackJack = true;
}else{
    console.log("You're out of the game!");
    isAlive = false;
}
