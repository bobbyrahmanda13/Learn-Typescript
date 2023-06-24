// contoh 1
// error because first and second not have type
// function adds(first: number, second: number) {
//   return second + first;
// }
// adds(1, 2); // 3
// // adds("Hello", "World"); // WorldHello //error
// function logs(value: any) {
//   console.log("LOG:", value);
// }

//! Note: any hanya feature pilihan untuk menghindari strict / compiler typescript

//contoh 2
// class Pointss {
//   // Error: Property 'x' has no initializer and is not definitely assigned in the constructor.
//   x: number;
//   y: number;
//
//   // how to fix
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
//
//   move(x: number, y: number) {
//     this.x += x;
//     this.y += y;
//   }
// }
//
// // create
// // Error : Expected 2 arguments, but got 0.
// /// const pointss = new Pointss();
// // points.x = 0;
// // points.y = 0;
//
// // fixed
// const pointss = new Pointss(0, 0);
//
// // Use
// pointss.move(1, 3);
// console.log(pointss.x, pointss.y);

// contoh 3
type UserTrue = { name: string; age: number };
const usersTruee: UserTrue[] = [
  { name: "Oby", age: 12 },
  { name: "Heera", age: 32 },
];
function getUserAgeTrue(name: string): number {
  const userTrues = usersTruee.find((user) => user.name === name);
  if (userTrues == null) {
    throw new Error(`User not found: ${name}`);
  }
  return userTrues.age;
}
