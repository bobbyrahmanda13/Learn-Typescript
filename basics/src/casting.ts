let leet;

//later
leet = "1331";

// use a number type assertions
// const number = leet as number;
// console.log(number === 1337); // false

// use a number type casting
const number = +leet;

console.log(number); // '1331'
console.log(number === 1337); // true
