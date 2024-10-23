// --------------------- bind() ---------------------

const car = {
    brand: "Tesla",
    getBrand: function () {
        console.log(`This car is a ${this.brand}`);
    },
};

const motorcycle = { brand: "Harley-Davidson" };

// Creating a new function with "this" bound to the motorcycle object
const getMotorcycleBrand = car.getBrand.bind(motorcycle);

// Calling the bound function later
getMotorcycleBrand(); // Output: "This car is a Harley-Davidson"

// --------------------- call() ---------------------

// function greet(greeting) {
//     console.log(`${greeting}, I am a ${this.type}`);
// }

// const animal = { type: "Lion" };

// // Calling the greet function with "this" set to the animal object
// greet.call(animal, "Hello");  // Output: "Hello, I am a Lion"

// --------------------- apply() ---------------------

// function introduce(name, age) {
//     console.log(`${name} is a ${this.type} and is ${age} years old`);
// }

// const animal = { type: "Tiger" };

// // Calling the introduce function with "this" set to the animal object and passing arguments as an array
// introduce.apply(animal, ["Shera", 5]); // Output: "Shera is a Tiger and is 5 years old"
