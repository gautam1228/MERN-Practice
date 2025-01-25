"use strict";
;
let newUser = {
    name: "Gautam Singh",
    age: 21,
    address: {
        city: "New Delhi",
        country: "India"
    }
};
function isLegal(user) {
    if (user.age >= 18)
        return true;
    else
        return false;
}
const legal = isLegal(newUser);
if (legal)
    console.log("Legal user.");
else
    console.log("Illegal user.");
class Manager {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name,
            this.age = age;
    }
    isLegal() {
        return this.age >= 18;
    }
}
let user = new Manager("John", 33);
console.log(user.isLegal());
// ---------------------------------------------------
class NewUser {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
class Employee {
    constructor(name) {
        this.name = name;
        this.greet = () => {
            return `Hi there, employee ${this.name}.`;
        };
        this.name = name;
    }
}
const newEmployee = new Employee("Gautam");
console.log(newEmployee.greet());
