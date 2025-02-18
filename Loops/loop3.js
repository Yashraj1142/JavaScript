//create a number array. write a for loop that multiplies each element of the array with 2 and store the result in a new array names multipliedArray.

let arr = [2,3,4,5];
let multipliedArray = [];

for(let i=0;i<arr.length;i++){
    multipliedArray.push(arr[i]*2);
}

console.log(multipliedArray);