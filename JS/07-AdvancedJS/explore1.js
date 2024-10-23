console.log(".... Async Demo ....");

const sayHello = () => {
    console.log("Hello from the other side !!");
};

setTimeout(() => {
    sayHello();
}, 2000);

for (let index = 0; index < 7; index++) {
    console.log(index);
}
