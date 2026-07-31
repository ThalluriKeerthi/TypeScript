"use strict";
/* Undrstanding Arrow Function */
function calTotalprice(price, taxRate) {
    return price + (price * taxRate);
}
const calTotalarrow = (price, taxRate) => {
    return price + (price * taxRate);
};
//If the function has one line , we can omit curly braces
const getWelcomeMsg = (theater) => `Welcome to ${theater} cinemas!`;
const ticketPrice = 250;
let taxrate = 0.05;
taxrate = 0.20;
console.log(getWelcomeMsg("Dolby"));
const total = calTotalprice(ticketPrice, taxrate);
console.log(`Tarditional : ${total}`);
const total1 = calTotalarrow(ticketPrice, 0.50);
console.log(`Arrow : ${total1}`);
