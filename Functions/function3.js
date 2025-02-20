/*
Create an arrow function named CalcCost, which takes price and quantity as inputs and calculates total cost by multiplying them.
*/

const CalcCost = (price, quantity)=>{
    return price*quantity;
}

let cost = CalcCost(200,5);
console.log(cost);