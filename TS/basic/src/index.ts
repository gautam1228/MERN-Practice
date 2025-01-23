
const greet = (name: string) => {
    console.log(`Hello, ${name} !`);
}

const sum = (a: number, b: number): number => {
    return a + b;
}

function isLegal(age: number): boolean {
    if(age>18){
        return true;
    }else{
        return false;
    }
}

const delayedCall = async (fn: () => void) : Promise<void> => {
    await new Promise<void>((resolve: () => void, reject) => {
        setTimeout(() => {
            fn();
            resolve();
        }, 2000)   
    });
    console.log("just logging something");
};
