let computer = { cpu: 12 };
let lenovo = {
    screen: "HD",
    __proto__: computer,
};

console.log(`lenovo`, lenovo.__proto__);

// Another way of defining prototypes

let genericCar = {
    tyres: 4,
};

let tesla = {
    driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

console.log(`tesla `, Object.getPrototypeOf(tesla));
