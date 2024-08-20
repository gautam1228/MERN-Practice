const fs = require('fs');

// --------------------- Promisified version of setTimeout() ---------------------

function wasCalledAfter3S(){
    console.log("I am the result of a promise !");
    console.log("......................................");
}

function setTimeoutPromisified(ms){

    console.log("...... Promisified fs.readFile() ......");

    return new Promise(resolve => setTimeout(resolve, ms));
    
}

// setTimeoutPromisified(3000).then(wasCalledAfter3S);  // promisified syntax

// setTimeout(wascalledAfter3S, 3000);                  // callback syntax


// The resolve function is esentially the function written inside the .then(), it is called after 3 seconds have passed, and it is what resolves the promise.
// When making a promise : new Promise(function(resolve))     : 'resolve' is the first argument of the function passed inside the new Promise();


// --------------------- Promisified version of fs.readfile() ---------------------


function fileRead(content){
    console.log(content);
    console.log("......................................");
}

function fsReadFilePromisified(filename, encoding){
    
    console.log("...... Promisified fs.readFile() ......");
    
    return new Promise(resolve => fs.readFile(filename, encoding, (err, data) => {
        if(err){
            console.log(`Error while reading : ${err}`);
        }
        else{
            resolve(data);
        }
    }));
}

// fsReadFilePromisified("a.txt", "utf-8").then(fileRead); // promisified syntax

// fs.readFile("a.txt", "utf-8", callback_function)    //  Callback syntax




// --------------------- Promisified version of fetch() ---------------------

