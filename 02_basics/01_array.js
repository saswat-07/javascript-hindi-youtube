// array

// const myArr = [0, 1, 2, 3, 4, 5, true, "saswat"]
const myArr = [0, 9, 2, 3, 4, 5]

// shallow copy and deep copy mdn website

const myHeros = ["shaktiman", "spidy", "hulk"]
const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);

// const numbers = [1, 3, 4, 5] in browser console see the prototypes

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);

// myArr.unshift(8)
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(19));


const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C ", myArr);


