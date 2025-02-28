console.log("Execution starts");

for(let i=0;i<10;i++){
    console.log(i);
}

function sayHello(){
    console.log("Hello from the function");
}

setTimeout(() => {
    sayHello();
}, 3000);       // this function will be called after 3 seconds and rest of the program will run as it is, without waiting for this function to be called.

console.log("Execution ends");