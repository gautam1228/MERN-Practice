const arr = [1, 2, 3, 4, 5, 6];

const doubleArr = arr.map(i => i*2);

const filteredArr = arr.filter((i) => {
    if(i % 2 == 0){
        return true;
    }else {
        return false;
    }
});

console.log(doubleArr); // Values are double of the original arr.
console.log(filteredArr); // Only even values of the original arr are stored in this array.
