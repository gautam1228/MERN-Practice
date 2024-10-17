function Person(name, age) {
    this.name = name;
    this.age = age;
}

const gautam = new Person("Gautam", 20);
const john = new Person("John", 37);

// console.log(gautam.age); //  Output : 20

// Prototype chaining

function Animal(type) {
    this.type = type;
}

Animal.prototype.speak = function () {
    return `${this.type} makes a sound ....`;
};

const zebra = new Animal("Zebra");
const lion = new Animal("Lion");

console.log(zebra.speak());
console.log(lion.speak());
