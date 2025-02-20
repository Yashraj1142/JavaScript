function stringToNumber(input) {
    let i = Number(input);
    if(!isNaN(i)){
        return i;
    } else {
        return "Not a Number";
    }
}

console.log(stringToNumber("Yash"));
console.log(stringToNumber("42"));