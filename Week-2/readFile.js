const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
const contents2 = fs.readFileSync("b.txt").toString("utf-8");

console.log(contents);  // Synchronous

console.log(contents2); // Synchronous

fs.readFile("c.txt", "utf-8", function read(err, data){        //  Asynchronous
    console.log(data); 
}); // read function will be called after the work is done.

console.log("hey there");