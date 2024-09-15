
// Immediately Invoked Function Expressions ( IIFE ).

;(function ConnectDB(){
    // named IIFE
    console.log(`DB Connected !`);
})()

// We have issues with the global scope pollution, many a times, that is why it becomes necessary to use IIFEs'.

;((name) => {
    console.log(`Connected to ${name}'s DB !`)
})("Gautam")
