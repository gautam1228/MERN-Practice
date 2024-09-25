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

// Challenge - 3            [ For - Of Loop ]

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

// Challenge - 4            [ For - Of Loop ]

// let teas = ["chai", "green tea", "herbal tea", "black tea"];
// let preferredTeas = [];
// for (const element of teas) {
//     if (element === "herbal tea") {
//         continue;
//     } else {
//         preferredTeas.push(element);
//     }
// }

// console.log(preferredTeas);

// Challenge - 5          [ For - In Loop ]

// let citiesPopulation = {
//     London: 8900000,
//     "New York": 8400000,
//     Paris: 2200000,
//     Berlin: 3500000,
// };

// let citiesPopulationNew = {};

// for (const city in citiesPopulation) {
//     if (city === "Berlin") break;
//     citiesPopulationNew[city] = citiesPopulation[city];
// }

// console.log(citiesPopulationNew);

// Challenge - 6        [ For - In Loop ]

// let worldCities = {
//     Sydney: 5000000,
//     Tokyo: 9000000,
//     Berlin: 3500000,
//     Paris: 2200000,
// };

// let largeCities = {};

// for (const city in worldCities) {
//     if (worldCities[city] < 3000000) continue;
//     else largeCities[city] = worldCities[city];
// }

// console.log(largeCities);

// Challenge - 7        [ For - Each Loop ]

// let teas = ["earl grey", "green tea", "chai", "oolong tea"];

// let availableTeas = [];

// teas.forEach((tea) => {
//     if (tea === "chai") return;
//     else availableTeas.push(tea);
// });

// console.log(availableTeas);

// Challenge - 8

// let arr = [2, 5, 7, 9];
// let doubledNumbers = [];

// arr.forEach((num) => {
//     if (num === 7) return;
//     else doubledNumbers.push(num * 2);
// });

// console.log(doubledNumbers);

// Challenge - 9

// let teas = ["chai", "green tea", "jasmine tea", "black tea", "herbal tea"];

// let shortTeas = [];

// for (const tea of teas) {
//     if (tea.length > 10) break;
//     else shortTeas.push(tea);
// }

// console.log(shortTeas);
