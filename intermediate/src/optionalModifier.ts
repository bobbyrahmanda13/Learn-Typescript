// contoh 1
// type PersonOptionalModifier = {
//   name: string;
//   email: string;
//   phone?: string;
// };
// const bruce: PersonOptionalModifier = {
//   name: "Bruce",
//   email: "belt@example.com",
//   phone: "911",
// };
// const alfred: PersonOptionalModifier = {
//   name: "Alfred",
//   email: "alfred@example.com",
//   // phone: "111", // boleh ini
//   // phone: undefined, // boleh ini
//   // phone: 111, // error
// };
// // console.log(alfred.phone); // undefined

// contoh 2
// class Point {
//   x: number;
//   y: number;
// }
// how to fix
// fix 1 using optional modifier
class PointFix1 {
  x?: number | null; // union type
  // x?: number;
  y?: number;
}

// result
const point = new PointFix1();
console.log(point.x); // undefined
point.x = 0;
point.x = undefined;
// point.x = null; //error
point.x = null;

// fix 2
// class PointFix2 {
//   x: number = 0;
//   y: number = 0;
// }
