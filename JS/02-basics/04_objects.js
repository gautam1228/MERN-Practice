
const obj = new Object(); // obj : {}

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = { obj1, obj2 }; // Creates an object with two objects as elements.
// const obj3 = Object.assign({}, obj1, obj2); // Syntax : Object.assign(target, source)
const obj3 = {...obj1, ...obj2};

console.log(obj3);

console.log(Object.keys(obj1));
console.log(Object.keys(obj1));
console.log(Object.entries(obj1));

console.log(obj1.hasOwnProperty("1")); // To check if property exists
