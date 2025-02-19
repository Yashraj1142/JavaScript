/*
create an array
let food = ["Butter Paneer", "Manchurain", "Chana Masala" , "Pav Bhaji", "Chilli Paneer", "Tadka Dal"];

itereate a for-each loop, stop at "Pav Bhaji" and store the other elements in a new array.
*/

let food = ["Butter Paneer", "Manchurain", "Chana Masala" , "Pav Bhaji", "Chilli Paneer", "Tadka Dal"];

let newFood = [];

food.forEach(item => {
    if(item === "Pav Bhaji"){
        return;
    } else{
        newFood.push(item);
    }
});

console.log(newFood);