class Vehicle{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }

    dispInfo(){
        return `${this.model} is a car by ${this.model}`;
    }
}

class Car extends Vehicle{
    carInfo(){
        return `The name of the car is: ${this.make}`;
    }
}

let c1 = new Car("Tata", "Harrier");
console.log(c1.dispInfo());
console.log(c1.carInfo());