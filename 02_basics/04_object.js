// const tinderUser = new Object() //singleton
const tinderUser = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "will"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@email.com",
    fullname: {
        userfullname: {
            firstname: "will",
            lastname: "smith"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2}

// console.log(obj4);

const users = [
    {
        id: 1,
        email: "harry@email.com"
    },
    {
        id: 2,
        email: "sas@email.com"
    },
    {
        id: 3,
        email: "bob@email.com"
    },
]

// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// Object Destructuring
const { courseInstructor } = course
console.log(courseInstructor);
const { courseInstructor: instructor } = course
console.log(instructor);


// Json
// {
//     "name": "sam",
//     "coursename": "js in hindi",
//     "price": "free"
// }
