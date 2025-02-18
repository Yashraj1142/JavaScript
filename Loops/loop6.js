/*
create an array
let food = ["Butter Paneer", "Manchurain", "Chana Masala" , "Pav Bhaji", "Chilli Paneer", "Tadka Dal"];

itereate a for-of loop, stop at "Pav Bhaji" and store the other elements before "Pav Bhaji" in a new array.
*/

let food = ["Butter Paneer", "Manchurain", "Chana Masala" , "Pav Bhaji", "Chilli Paneer", "Tadka Dal"];

let newFoodList = [];

for(const element of food){
    if(element == "Pav Bhaji"){
        break;
    }
    
    newFoodList.push(element);
}

console.log(newFoodList);