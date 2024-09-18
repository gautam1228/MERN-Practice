const user = {
    username: "Gautam",
    price: 999,
    welcomeMessage: function () {
        console.log(`Hi ${this.username}, welcome to the website !`);
    },
};

// user.welcomeMessage();

// console.log(this); // This would give an empty object :  {}

// Although in the browser, the global object is 'Window' [Handles everything relalted to the current window open].

// Earlier JS could only be executed inside the browser, now, this engine which is used to run JS is standalone, by the name of ( Node, Bun, Dino )

function randm() {
    const username = "random123";
    console.log(this); // Outputs some complex object
    console.log(this.username); // Gives output : undefined
}

const newRandm = () => {
    console.log(this);
};

// newRandm(); // Outputs : {}

const addTwo = (num1, num2) => {
    return num1 + num2;
};

console.log(addTwo(3, 5));

// Implicit return function

const addTwoNew = (num1, num2) => num1 + num2;
//                OR
const addTwoNew1 = (num1, num2) => num1 + num2;

// To return an object

// const returnObj = () => {username:'Gautam'} // Will give output : undefined

const returnObj = () => ({ username: "Gautam" }); // Correct way to return an object
