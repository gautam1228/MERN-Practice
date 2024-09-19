// Challenge - 1

// let teas = ["green tea", "black tea", "chai", "oolong tea"];
// let selectedTeas = [];

// for (let idx = 0; idx < teas.length; idx++) {
//     if (teas[idx] === "chai") {
//         break;
//     } else {
//         selectedTeas.push(teas[idx]);
//     }
// }

// console.log(selectedTeas);

// Challenge - 2

// let cities = ["London", "New York", "Paris", "Berlin"];
// let visitedCities = [];

// for (let i = 0; i < cities.length; i++) {
//     if (cities[i] === "Paris" || cities[i] === "paris") {
//         continue;
//     } else {
//         visitedCities.push(cities[i]);
//     }
// }

// console.log(visitedCities);

// Challenge - 3

// let arr = [1, 2, 3, 4, 5];
// let smallNumbers = [];
// for (const element of arr) {
//     if (element === 4) {
//         break;
//     } else {
//         smallNumbers.push(element);
//     }
// }

// console.log(smallNumbers);

// Challenge - 4

let teas = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for (const element of teas) {
    if (element === "herbal tea") {
        continue;
    } else {
        preferredTeas.push(element);
    }
}

console.log(preferredTeas);
