function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello my name is ${this.name}.`);
};

let person1 = new Person("Gautam");

person1.greet();
