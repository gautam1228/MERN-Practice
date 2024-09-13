
let myDate = new Date();

// console.log(myDate.toString()); // Current Date    Time ( 24-HR Format )    TIMEZONE

// console.log(myDate.toDateString()); // Current Date

// console.log(myDate.toISOString()); //  Weird Output

// console.log(myDate.toJSON()); //  Weird Output

// console.log(myDate.toLocaleDateString()); // dd/mm/yyyy

// console.log(myDate.toLocaleTimeString()); // HH:MM:SS AM/PM

// console.log(myDate.toLocaleString());    // dd/mm/yyyy, HH:MM:SS AM/PM


const myCreatedDate = new Date(2024, 8, 14);
const myCreatedDateWithTime = new Date(2024, 8, 14, 18, 3);
const myCreatedStringDate = new Date("09-14-2024"); // Here : dd/mm/yyyy format is invalid

// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDateWithTime.toLocaleString());
// console.log(myCreatedStringDate.toDateString());


let myTimeStamp = Date.now();

console.log(myTimeStamp); // ms since the EPOCH ( Since 1970 UTC midnight )

console.log(myDate.getTime()); // ms since EPOCH

console.log(myDate.getDay()); // 1-7 :: Monday - Saturday

console.log(myDate.getMonth()); // 0 - 11 :: January - December



let newDate = new Date();

newDate.toLocaleDateString('default', {
    weekday : "narrow"
});