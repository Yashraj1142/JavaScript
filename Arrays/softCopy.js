//create a soft copy of an array

let arr1 = [3,4,5,6];
let arr2 = arr1;    //soft copy created
arr1.pop();  //any change in arr1 will be reflected in arr2 also
console.log(arr1);
console.log(arr2);

/* The reason behind this is - there is an array [3,4,5,6] named arr1 in the memory and arr2 is the references we use to denote that array.
So any change in the original array will reflect in both arr1 and arr2. */