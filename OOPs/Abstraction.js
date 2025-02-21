class Food{
    order(){
        //any complex process
        return `Food order`;
    }

    placeOrder(){
        //any complex process
        return `Order done`;
    }

    //abstraction - hiding the above two mecahnisms
    pressButton(){
        let callOne = this.order();
        let callTwo = this.placeOrder();
        return `${callOne}\n${callTwo}`;
    }
}

let f1 = new Food();
// console.log(f1.order());
// console.log(f1.placeOrder());
console.log(f1.pressButton());