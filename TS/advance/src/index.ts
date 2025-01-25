// interface User {
//     id : number,
//     name : string,
//     age : number,
//     email : string,
//     password : string
// }

// type UpdateProps = Pick<User, 'name' | 'age' | 'password'>; // Self-explanatory

// type UpdatePropsOptional = Partial<UpdateProps>; // Let's us create types which has all the fields as optional

// const updateUser = (updateProps : UpdateProps) => {
//     // Logic to update the users details in the DB
// }

// --------------------------------------------------

// type User = {
//     readonly name: string,
//     readonly age: number
// } // If we don't make it readonly we can change the individual properties of the User objects we create using this type

// type Config = {
//     endpoint: string,
//     apiKey: string
// }

// const config: Readonly<Config> = {
//     endpoint : "https://api.endpoint.com",
//     apiKey : "asakshioq1i2bi1u2h3"
// }


// --------------------------------------------------


type User = {
    name : string,
    age : number
}

// Noob-way
// type Users = {
//     [key: string] : User
// }
    
// type Users = Record<string, User>;
    
// const users: Users = {
//     "asda1wd" : {name : "Gautam", age : 21},
//     "a1wqasd" : {name: "Singh", age : 20}
// }
    
// console.log(users['a1wqasd']);

// // Or just use

// const usersMap = new Map<string, User>();

// usersMap.set("asda1wd", {name : "Gautam", age : 21});

// console.log(usersMap.get("asda1wd"));


// --------------------------------------------------


type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>;

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event : ${event}`);
}

handleEvent('click');


