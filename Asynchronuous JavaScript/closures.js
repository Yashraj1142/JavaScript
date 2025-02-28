function outer(){
    let counter = 4;
    return function () {
        counter++;
        return counter;
    };
}

let increment = outer();    //the increment here holds the function that is being returned from the outer()

console.log(increment());
console.log(increment());
console.log(increment());