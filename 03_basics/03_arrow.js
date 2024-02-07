const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); //this talks about the current context, like in this case user
        // console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "mike"
// user.welcomeMessage()

console.log(this); //{} in node environment, but different in browser console which is global Window object


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
//     // console.log(this);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "hitesh"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "spidey"})

console.log(addTwo(4, 6));


