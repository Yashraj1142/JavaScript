class Employee {
    constructor(name, salary) {
        this.name = name;
        this._salary = salary;  // Use a private field (_salary)
    }

    // Getter
    get salary() {
        return this._salary;
    }

    // Setter
    set salary(value) {
        if (value < 0) {
            console.log("Invalid argument.");
        } else {
            this._salary = value;
        }
    }

    showInfo() {
        return `Name: ${this.name}\nSalary: ${this.salary}`;
    }
}

let e1 = new Employee('ABC', 20000);
console.log(e1.showInfo());

e1.salary = -30000; // Will print "Invalid argument."
console.log(e1.showInfo()); // Salary remains unchanged
