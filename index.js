/*
for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old, Happy Birthday to Me!`);
    debugger;
}


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

wrapGifts(gifts);

*/

function writeCards(names, event){
    const messages = [];
    for (let index = 0; index < names.length; index++) {
    messages.push( `Thank you, ${names[index]}, for the wonderful ${event} gift!`);
debugger;

}
return messages;}





  function countDown(number) {
while (number >=0) {
    console.log (number);
    number--;

  }
}