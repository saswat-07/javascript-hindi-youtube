
function saymyName(){
    console.log("J");
    console.log("O");
    console.log("H");
    console.log("N");
}

// saymyName => reference, saymyName() => execution
// saymyName()


// function addTwoNumbers(num1, num2) { //passing parameter here
//     console.log(num1 + num2);
// }
// const result = addTwoNumbers(2, 5) //passing arguments here
// console.log("Result: ", result);


function addTwoNumbers(num1, num2) { 
    // let result = num1 + num2
    // return result
    return num1 + num2
}
const value = addTwoNumbers(4, 5) 
// console.log("Result: ", value);


function loginUserMessage(username = "sam"){ //default value
    // if (username === undefined) {
    //     console.log("Please enter a username");
    //     return;
    // }
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("steve"));
// console.log(loginUserMessage());
// console.log(loginUserMessage("mark")); //override the default parameter value


function calculateCartPrice(val1, val2, ...number){ //...number is rest operator(spread) in this case
    console.log("value1: ",val1);
    console.log("value2: ",val2);
    return number
}
// console.log(calculateCartPrice(200, 500, 600, 1000));

const user = {
    username: "Ben",
    price: 299
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
    username: "rocky",
    price: 199
})

const myNewArray = [300, 400, 200, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 300, 500, 1000]));
