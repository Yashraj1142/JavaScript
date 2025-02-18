//while loop. counts down from 5 to 1 and stores the numbers in an array named 'countdown'

let start = 5;
let arr = [];

while(start != 0){
    arr.push(start);
    start = start-1;
}

console.log(arr);