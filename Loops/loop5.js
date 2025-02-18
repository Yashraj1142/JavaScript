/*
create an array
let food = ["Butter Paneer", "Manchurain", "Chana Masala" , "Pav Bhaji", "Chilli Paneer", "Tadka Dal"];

itereate a for loop, skip "Pav Bhaji" and store the other elements before "Pav Bhaji" in a new array.
*/

let food = ["Butter Paneer", "Manchurain", "Chana Masala" , "Pav Bhaji", "Chilli Paneer", "Tadka Dal"];

let newFoodList = [];

for(let i=0;i<food.length;i++){
    if(food[i] == "Pav Bhaji"){
        continue;
    }
    else{
        newFoodList.push(food[i]);
    }
}

console.log(newFoodList);