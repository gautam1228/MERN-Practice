class Vehicle {
    constructor(type, make, model) {
        this.type = type;
        this.make = make;
        this.model = model;
    }

    start() {
        return `${this.model} is a vehicle from ${this.make}`;
    }
}

// Inheritance

class Car extends Vehicle {
    drive() {
        return `${this.make} : This is an inheritance example !`;
    }
}

let myCar = new Car("Car", "Audi", "R8");
// console.log(myCar.start());
// console.log(myCar.drive());

//  --------------------------------- Encapsulation -----------------------------

class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }

    getBalance() {
        return `$ ${this.#balance}`;
    }
}

let account1 = new BankAccount();

account1.deposit(100);

// console.log(account1.getBalance());

//  --------------------------------- Abstraction -----------------------------

class CoffeeMachine {
    start() {
        // call DB
        // filter Value
        return "Starting the machine ....";
    }

    brewCoffee() {
        // complex calculation
        return `Brewing Coffee ...`;
    }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());

//  --------------------------------- Polymorphism -----------------------------

class Bird {
    fly() {
        return `Bird is flying....`;
    }
}

class Penguin extends Bird {
    fly() {
        return `Penguins can't fly ... `;
    }
}

let birdie = new Bird();
let peng = new Penguin();

console.log(birdie.fly());
console.log(peng.fly());
