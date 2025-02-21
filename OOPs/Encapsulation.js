class Bank{
    #balance;

    constructor(initialAmount){
        this.#balance = Number(initialAmount);
    }

    deposit(amount){
        this.#balance += amount;
        return `The total balance is: Rs. ${this.#balance}`;
    }

    showBalance(){
        return `The balance is: Rs. ${this.#balance}`;
    }
}

let b1 = new Bank("20000");
console.log(b1.showBalance());
console.log(b1.deposit(40000));
console.log(b1.showBalance());
