//! TYPE READONLY
// type Point = {
//   readonly x: number;
//   readonly y: number;
// };
// const point: Point = {
//   x: 0,
//   y: 0,
// };
//
// // Variabel assigment
// point = { x: 1, y: 1 };
//
// // Property assigment
// point.x = 1;
// point.y = 1;
//
// // Property read
// console.log(`${point.x}, ${point.y}`);

// CLASS READONLY
class Animal {
  // public readonly name: string;
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const sheep = new Animal("sheep");
console.log(sheep.name); // allow
sheep.name = "wolf"; // disallow
