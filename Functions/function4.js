/*
Nested Function
create a function that takes another function as parameter.
*/

function makeTea(TeaType){
    return `Making tea - ${TeaType}`
}

function processTeaOrder(TeaFunc){
    return TeaFunc("Masala Chai");
}

let order = processTeaOrder(makeTea);
console.log(order);