class Bird{
    fly(){
        return `Birds can fly`;
    }
}

class Penguin extends Bird{
    fly(){
        return `Penguins can't fly`;
    }
}

let b1 = new Bird;
let p1 = new Penguin;
console.log(b1.fly());
console.log(p1.fly());