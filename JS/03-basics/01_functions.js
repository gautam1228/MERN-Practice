function calculateCartPrice(...num1) {
    // Rest Operator
    return num1;
}
function calculateCartPrice1(val1, val2, ...num1) {
    return num1;
}

// console.log(calculateCartPrice(200, 300, 400, 100, 500));
// console.log(calculateCartPrice1(200, 300, 400, 100, 500));

// console.log(addOne(5));

function addOne(num) {
    return num + 1;
}

// addTwo(5); // Gives an error.

const addTwo = function (num) {
    return num + 2;
};

// Higher Order Function

// function makeTea(typeOfTea) {
//     return `Maketea : ${typeOfTea}`;
// }

// // This is a higher order function
// function processTeaOrder(teaFunction) {
//     return teaFunction("earl grey");
// }

// let order = processTeaOrder(makeTea);
// console.log(order);

// Another Higher Order Function

function createTeaMaker(name) {
    return function (teaType) {
        return `Making ${teaType} for ${name} !`;
    };
}

let teaMaker = createTeaMaker("Gautam");
console.log(teaMaker("green tea"));

// This shows us that inside functions, if we define functions, we have access to all the variables of the parent function, which is contradicting to how JS works.
// This behaviour is called ' closure ' in JS
