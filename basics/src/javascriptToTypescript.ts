// Javascript
// let someLegacyVariable;
//
// someLegacyVariable = loadString();
// console.log(someLegacyVariable.trim());
//
// someLegacyVariable = loadNumber();
// console.log(someLegacyVariable.toFixed(2));

// Typescript
let someLegacyVariable: unknown;

if (typeof someLegacyVariable === "string") {
  console.log(someLegacyVariable.trim());
}
if (typeof someLegacyVariable === "number") {
  console.log(someLegacyVariable.toFixed(2));
}
