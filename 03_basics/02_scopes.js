// var c = 300
let d = 40 // global scope => accessed from any where inside the program
let a = 100
// block scope => inside if block of code, can't access outside the scope directly
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log(d = 50);
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c); //problem with var, can be accessed any where, treated as global scope even when declared inside the block scope then also.
// global scopes are different in node.js vs browser console


function one(){
    const username = "vijay"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// hoisting
// console.log(addOne(3));
function addOne(num){
    return num + 1
}

// addTwo(5)
const addTwo = function(num){
    return num + 1
}
