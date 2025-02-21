let genericCar = {tyres:4};

let tesla = {
    driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

console.log("Tesla", tesla);
console.log("Generic Car", genericCar);
console.log("Tesla", tesla.tyres);
console.log("Tesla", Object.getPrototypeOf(tesla));

//hasOwnProperty
console.log("Tesla is having tyres: ", tesla.hasOwnProperty('tyres'));
console.log("Tesla is having driver: ", tesla.hasOwnProperty('driver'));