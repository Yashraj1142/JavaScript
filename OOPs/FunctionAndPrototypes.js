function food(item){
    this.item = item;
}

food.prototype.order = function(){
    return `The order is for ${this.item}`;
}

let f1 = new food("Momos");
console.log(f1.order());