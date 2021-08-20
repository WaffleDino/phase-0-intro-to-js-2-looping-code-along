// Code your solutions in this file

function writeCards(names, message) {
    let cardMessage = [];

    for (let i = 0; i < names.length; i++) {
        cardMessage.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`);
    }
   return cardMessage;
}
console.log (writeCards);


function countDown(){
    let i = 10
    while (i >= 0) {
        console.log(i);
        i--;
    }


}