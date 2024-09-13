
const balance = new Number(100);

// console.log(balance.toString().length);

// console.log(balance.toFixed(2));




const anotherNumber = 23.47233;

// console.log(anotherNumber.toPrecision(3)); // What we give as the argument is the number of digits the output would have ( Basically rounding-off )



const hundreds = 1000000;

// console.log(hundreds.toLocaleString()); // If no arguments then it follows US standards.

// console.log(hundreds.toLocaleString('en-IN')); // Indian standards.




// ++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++

// console.log(Math.abs(-3));    // Output : 3
// console.log(Math.round(4.7)); // Output : 5
// console.log(Math.ceil(4.7));  // Output : 5
// console.log(Math.floor(4.7)); // Output : 4
// console.log(Math.min(4, 5, 6, 1, 2)); // Output : 1
// console.log(Math.max(4, 5, 6, 1, 2)); // Output : 6



// console.log(Math.random()); // Values b/w : 0 - 1


// Random values in a given range.

const min = 12;
const max = 43;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);