// Primitive (call by value)
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// javascript is dynamically typed language, which means that data types of variables are determined by the value they hold at runtime.

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNum = 23442223332323245523333n
// console.log(typeof bigNum);


// Reference type (Non Primitive)

// Array, Objects, Functions

const heros = ["superman", "spidey", "ironman"]
let myObj = {
    name: "saswat",
    age: 20,
}

const myFunction = function(){
    console.log("Hello");
}

// console.log(typeof myFunction); //object function
// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof id);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

/* Stack (Primitive)(copy of original value, any changes made will reflect to copy not to original)
  , Heap Memory (Non-Primitive)(reference of original value,any changes made will reflect to original)
*/

let myName = "saswat"
let anotherName = myName
anotherName = "chaiaurcode"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "sas@email.com",
    upi: "payment@ybl"
}

let userTwo = userOne
userTwo.email = "user@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
