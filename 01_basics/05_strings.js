const name = "saswat"
const repoCount = 50
// console.log(name + repoCount + " value");

// string interpolation
console.log(`Hello my name is ${name} and repo count is ${repoCount}`);

const gameName = new String('saswat-og-com') // see this in browser console

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(-4, -1)
// console.log(anotherString);

const newStringOne = "        saswat         "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://john.com/john%20miller"

console.log(url.replace('%20','-'));
console.log(url.includes('john'));
console.log(gameName.split('-'));
