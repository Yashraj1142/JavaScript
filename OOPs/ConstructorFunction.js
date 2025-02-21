function Food(item){
    this.item = item;
    this.describe = function(){
        return `The order is ${this.item}.`
    }
}

let f1 = new Food("Momos");
console.log(f1.describe());