//create a hard copy of an array

let arr1 = [2,3,4,5];
let arr2 = [...arr1];   //this will not create a refrence, but a new array which will be same as arr1

//now any operation on arr1 will not be reflected in arr2, as both are independent arrays.
arr1.pop();
console.log("arr1 = " + arr1);
console.log("arr2 = " + arr2);