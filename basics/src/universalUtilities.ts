// any => cara yang tidak aman
// function log(value: any) {
//   console.log(value.toFixed(2));
// }
// log(123.456);
// console.log("hello world");

// unknown => cara yg lebih baik dari any
function log(value: unknown) {
  if (typeof value === "number") {
    console.log(value.toFixed(2));
  } else {
    console.log(value);
  }
}
log(123.456);
console.log("hello world");
