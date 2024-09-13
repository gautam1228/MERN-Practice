// Stack : Stores static data ( numbers, strings, booleans, null, undefined, symbols and BigInts )     [ By-Value ]

// Heap : Stores dynamic data, primarily objects ( Arrays and Functions )          [ By-Reference ]




const myArr = [0, 1, 2, 3, 4, 5]; // This is resizable

// const myArrayMixed = [0, 1, 2, 3, 4, 5, true];
// const myArrayMixed = new Array(1, 2, 3, 4, 5);


// Copying an array creates a Shallow Copy.

// Shallow Copy : Reference Based ( Stored Using Stack )
// Deep Copy : Value Based        ( Stored Using Heap )   
// Ironical Right !




// ++++++++++++++++++++++++++++++++ Array Methods ++++++++++++++++++++++++++++++++



// myArr.push(6);
// console.log(myArr);

// myArr.unshift(8); // Adds an element to the beginning of the array ( Computationally heavy for big arrays )
// console.log(myArr);


// myArr.shift(); // Removes the first element of the array
// console.log(myArr)

// const newString = myArr.join(); // Default joined by comma
// console.log(newString);


// console.log("Initial ", myArr);


// const newArr = myArr.slice(1, 3); // Only copies the elements in the given range, original Array is unchanged
// console.log(newArr); // Doesnt include the element at idx = 3
// console.log("After Slicing ", myArr);


// const myn1 = myArr.splice(1, 3); // Extracts the elements from the original Array
// console.log(myn1); // Also includes the element at idx = 3
// console.log("After Splicing ", myArr);