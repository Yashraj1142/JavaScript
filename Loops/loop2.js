//use a do while loop. prompt for the user to enter their favourite food and add them in the array food, until the user enters 'stop'.

let food = [];
let ins;

do {
    ins = prompt("Enter the food: ");
    food.push(ins);
} while (ins != "stop");

console.log(food);

//prompt is supported in java script but not by node js. Tets this code on browser.