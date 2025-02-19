/*
create an object
let food = {"Butter Paneer": 450, "Manchurain": 350, "Chana Masala": 200 , "Pav Bhaji": 100, "Chilli Paneer": 300, "Tadka Dal": 200};

itereate a for-in loop, stop at "Pav Bhaji" and store the other elements before "Pav Bhaji" in a new array.
*/

let food = {"Butter Paneer": 450, 
    "Manchurain": 350,
    "Chana Masala": 200 , 
    "Pav Bhaji": 100, 
    "Chilli Paneer": 300, 
    "Tadka Dal": 200
};

let newFood = {};

for (const items in food) {
    if (food.key == "Pav Bhaji") {
        break;
    } else {
        newFood[items] = food[key];
    }
}

console.log(newFood);