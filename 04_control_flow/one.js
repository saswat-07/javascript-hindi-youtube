// if
const isUserloggedIn = true
if (isUserloggedIn) {
    // console.log("this will execute if the condition is true!");
}

const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");   // bad practice

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");

// }

// real world use case

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = false
const guestUser = true

if (userLoggedIn && debitCard && 2==3) { //2 == 2 to execute
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail || guestUser) {
    console.log("User logged in");
}