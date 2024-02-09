const MAX_LEN = 5;

export function generateId(){

    let generatedId = "";
    const superSet: String = '1234567890abcdefghijklmnopqrstuvwxyz';
    for(let i = 0; i <= MAX_LEN; i++){
        generatedId += superSet[Math.floor(Math.random() * superSet.length)];
    }

    return generatedId;
}