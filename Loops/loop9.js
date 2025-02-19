/*
create an array
let food = ["Manchurain", "Chana Masala" , "Butter Paneer", "Pav Bhaji", "Chilli Paneer", "Tadka Dal"];

itereate a for-of loop, stop when the length of the current item name is greater than 12 and store the items iterated over in a new array.
*/

let food = ["Manchurain", "Chana Masala" , "Butter Paneer", "Pav Bhaji", "Chilli Paneer", "Tadka Dal"];

let newFood = [];

for (const item of food) {
    if(item.length > 12){
        break;
    } else {
        newFood.push(item);
    }
}

console.log(newFood);