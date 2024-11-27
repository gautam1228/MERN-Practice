
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

const delayedCall = (fn: () => void) => {
    setTimeout(fn, 2000);
};
