const score = 400
// console.log(score);

let balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 22.8659 //or 1122.8659/122.8659
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// Number in browser console with MIN_VALUE AND Number.MAX_VALUE

// ++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math); //write Math in Browser console to see more
// console.log(Math.abs(-4));
// console.log(Math.round(4.3)); //or 4.6
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.8));
// console.log(Math.min(4, 2, 9, 3));
// console.log(Math.max(4, 2, 9, 3));

console.log(Math.random()); //values between 0-1
console.log((Math.random() * 10) + 1); //added 1 to avoid 0.022 these values
console.log(Math.floor((Math.random() * 10) + 1));

const min = 10
const max = 30

console.log(Math.floor((Math.random() * (max - min + 1))) + min);  //min 10 value is required



