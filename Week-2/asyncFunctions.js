// --------------------- CALLBACK WAY --------------------------------

// function myAsyncFunction(callback){
    
    //     // Async logic here.
    //     callback("Hello there !");
    
    
    // }
    
    // async function main(){
        
        //     myAsyncFunction(function(value){
            //         console.log(value);
            //     });
            
            // }
            
            // main();


// --------------------- .then() WAY --------------------------------

// function myAsyncFunction(){
    
//     console.log("2. myAsyncFunction Called ...")
    
//     let p = new Promise(function(resolve){
        
//         setTimeout(() =>{
            
//             resolve("Hi there !");
            
//             console.log("5. After Resolving : ",p);
            
//         }, 2000);
        
//     });
    
//     console.log("3. Before Resolving : ", p);
    
//     return p;
    
// }

// function main(){
    
//     console.log("1. main Called ...")
    
//     myAsyncFunction().then(function(value){
        
//         console.log("6. Inside Resolve Function !")
//         console.log("7. ", value);
        
//     })
    
//     console.log("4. Thread Continues ...");
    
// }

// main();


// --------------------- ASYNC AWAIT WAY --------------------------------

function myAsyncFunction(){

    let p = new Promise(function(resolve){
        
        setTimeout(() => {
            
            resolve("Hello there !");

        } , 2000);
       
    });

    return p;

}


async function main(){

    console.log("1. main Called .....")

    let value = await myAsyncFunction();
    
    console.log(value);

}

main();

console.log("2. Thread Continues ...");