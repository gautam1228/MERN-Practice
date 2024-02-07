// const x: number  = 1;
// console.log(x);

const greetingFunction = (firstName: string): void  => {
    console.log("Hello there " + firstName + " .");
}

greetingFunction("Gautam");

// function isLegal(age: number): boolean {

//     let isAdult: boolean = false;

//     if(age >= 18){
//         isAdult = true;
//     }

//     return isAdult;

// }

// isLegal(19) ? console.log('adult') : console.log('child');






// ******************************* INTERFACES ******************************* 



interface User {
    username : string,
    password : string,
    email? : string
}




// ******************************* TYPES *******************************




// Can take union and intersection in 'type' but we can't do that with 'interfaces'.

type Input = string | number;

type UserNew = {
    username : string,
    password : string,
    email? : string    
}

type CustomInput = {
    username : string,
    password : string,
    phoneNumber : string
}

type NewCustom = UserNew & CustomInput; // Here phone number becomes mandatory as well.





// ******************************* ENUMS ******************************* 





enum Direction {
    up,
    down,
    left,
    right
}

const x: Direction = Direction.up;
console.log(x); // Prints :  0

enum Direction1 {
    up = 2,
    down, // 3
    left, // 4
    right // 5
}

const x1: Direction1 = Direction1.left;
console.log(x1); // Prints 4

enum Direction2 {
    up = "up",
    down = "down", 
    left = "left", 
    right = "right" 
}

const x2: Direction2 = Direction2.right;
console.log(x2); // Prints : right