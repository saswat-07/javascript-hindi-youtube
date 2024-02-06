const marvel_heros = ["thor", "hulk", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //push on an exisiting array
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //bad syntax

// const allHeros = marvel_heros.concat(dc_heros) //concat returns a new array
// console.log(allHeros);

// spread operator
const allNewHeros = [...marvel_heros, ...dc_heros]
console.log(allNewHeros); //or allNewHeros[4]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //or replace infinity with 3 in this case
console.log(real_another_array);


console.log(Array.isArray("saswat"));
console.log(Array.from("saswat")); //convert to array
console.log(Array.from({name: "saswat"})); //interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));