function* numberGenerator(){
    yield 1;
    yield 2;
    yield 3;
}

let gen = numberGenerator();
let genTwo = numberGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);  //next() is an iterator, which keeps the track of the value.

console.log(genTwo.next().value);
console.log(genTwo.next().value);