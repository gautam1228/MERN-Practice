
function calculateCartPrice(...num1){         // Rest Operator
    return num1
}
function calculateCartPrice1(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 300, 400, 100, 500));
// console.log(calculateCartPrice1(200, 300, 400, 100, 500));


console.log(addOne(5));

function addOne(num){
    return num + 1
}


// addTwo(5); // Gives an error.

const addTwo = function(num){
    return num + 2
}
