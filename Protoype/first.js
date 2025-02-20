let val1 = {name:"Yashraj"};
let val2 = {
    lastName: "Gupta",
    __proto__: val1,    //this will add all the values of val1 to val2
};

console.log(`val1 = `, val1.__proto__);
console.log(`val2 = `, val2.__proto__);
