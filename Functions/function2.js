/*
Create a function. Inside this function create another function. Return the result of the inner function. Call the outer function and return the result
*/

function OuterFunc(name){
    function InnerFunc(){
        return `Your name is ${name}`;
    }
    return InnerFunc();
}

let result = OuterFunc("ABC");
console.log(result);