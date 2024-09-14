// When we make an object using constructor : Singleton ( One Of Its Kind )

// Object Literals

const jsUser = {
    name : "Gautam",
    age : 20,
    email : "gautam@example.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
};



// Correct Syntax to Add a Symbol to the keys of an object

const mySm1 = Symbol("key1");

const jsUserNew = {
    name : "Gautam",
    [mySm1] : "mykey1",
    age : 20,
    email : "gautam@example.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
};

console.log(typeof jsUserNew[mySm1]);
console.log(jsUserNew[mySm1]);
console.log(jsUserNew["email"]);



// Object.freeze(jsUser); // Changes made to this object won't be propogated

jsUser.greetings = function(){
    console.log(`Hello JS user, ${this.name} !`);
};

jsUser.greetings();