class Animal{
    //a static method can only be called by the class and not by any object
    static walk(){
        return `An animal can walk.`;
    }
}

console.log(Animal.walk());

let a1 = new Animal();
console.log(a1.walk()); //this will raise an error