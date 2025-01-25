
interface User {
    name : String,
    age : number,
    address : {
        city : String,
        country : String,
        pincode? : String
    }
};

let newUser: User = {
    name : "Gautam Singh",
    age : 21,
    address : {
        city : "New Delhi",
        country : "India"
    }   
}

function isLegal(user: User) : boolean {
    if(user.age >= 18) return true;
    else return false;
}

const legal : boolean = isLegal(newUser);

if(legal) console.log("Legal user.");
else console.log("Illegal user.");


// ---------------------------------------------------


interface People {
    name : string,
    age : number,
    // greet : () => string
}

class Manager implements People {
    
    constructor(public name : string, public age : number){
        this.name = name,
        this.age = age
    }
    
    isLegal() {
        return this.age >= 18;
    }
    
}

let user = new Manager("John", 33);
console.log(user.isLegal())

// ---------------------------------------------------

abstract class NewUser {
    constructor(public name : string){
        this.name = name;
    }
    
    abstract greet: () => string;
}

class Employee implements NewUser {
    constructor(public name : string){
        this.name = name;
    }
    
    greet = () => {
        return `Hi there, employee ${this.name}.`
    }
}

const newEmployee = new Employee("Gautam");
console.log(newEmployee.greet());


// ---------------------------------------------------

type Usertype = {
    name : string,
    age : number
}

const isLegalUser = (user : Usertype) : boolean => {
    return user.age >= 18;
}

type Admin = {
    name : string,
    adminNo :number
}

type userOrAdmin = Admin & Usertype;

const newPerson : userOrAdmin = {
    name : "Gautam",
    age : 18,
    adminNo : 1234
};
