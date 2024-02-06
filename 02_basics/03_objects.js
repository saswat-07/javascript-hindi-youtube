// singleton => it will be singleton if made with constructor.
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "saswat",
    "full name": "saswat mishra",
    [mySym]: "mykey1",
    age: 22,
    location: "BBSR",
    email: "user@email.com",
    isLoggedIn: false,
    lastLoginDays: ["Tuesday", "Friday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "abc@microsoft.com"
// Object.freeze(jsUser)
jsUser.email = "abc@atom.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

// console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
