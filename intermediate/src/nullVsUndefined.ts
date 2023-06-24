// contoh 1
// // let notDefined: undefined = undefined;
// let notPresent: null = null;
//
// class PointNull {
//   x: number;
//   y: number;
//
//   // --strictPropertyInitialization
//   //
//   // The strictPropertyInitialization setting controls whether class fields need to be initialized in the constructor.
//   // Property 'xx' has no initializer and is not definitely assigned in the constructor.
//   // constructor() {
//   //   (this.x = 0), (this.y = 0);
//   // }
// }
// const center = new PointNull();
// center.x = 0;
// // center.y=0;
//
// console.log(center.x, center.y); // 0, undefined
//
// function logVowels(value: string) {
//   console.log(value.match(/[aiueo]/gi));
// }
//
// logVowels("hello"); // ['e','o']
// logVowels("sky"); // null

// contoh 2
console.log(null == null); // true (of course)
console.log(undefined == undefined); // true (of course)

console.log(undefined == null); // true

console.log(false == null); // false
console.log(0 == null); // false
console.log("" == null); // false

function someBooleanOrNullOrUndefined(): boolean | null | undefined {
  return true;
}
const result = someBooleanOrNullOrUndefined();
if (result == null) {
  console.log("Null or Undefined", result); // null | undefined
}
if (result != null) {
  console.log("Boolean", result); // true | false
}

// contoh 3
function decorate(value: string | null | undefined) {
  if (value == null) {
    return value;
  }
  return `-- ${value.trim()} --`;
}
console.log(decorate("hello")); // -- Hello --
console.log(decorate("Hello World  ")); // -- Hello World --
console.log(decorate(null)); // null
console.log(decorate(undefined)); // undefined
