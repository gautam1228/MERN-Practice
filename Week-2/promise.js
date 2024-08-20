class myPromise {

    constructor(fn){
        fn(() => {
            this.resolve();
        })
    }

    then(callback){
        this.resolve = callback;
    }

}

function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function callMe(){
    console.log("Callback from setTimeOut.");
}

setTimeoutPromisified(3000).then(callMe);