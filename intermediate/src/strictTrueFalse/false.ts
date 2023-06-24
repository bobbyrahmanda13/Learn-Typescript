// contoh 1
// not error because strick from tsconfig.json setting to false
// function add(first, second) {
//   return second + first;
// }
// add(1, 2); // 3
// add("Hello", "World"); // WorldHello

// contoh 2
// class Points {
//   x: number;
//   y: number;
//   move(x: number, y: number) {
//     this.x += x;
//     this.y += y;
//   }
// }

// create
// const points = new Points();
// points.x = 0;
// points.y = 0;

// Use
// points.move(1, 3);
// console.log(points.x, points.y);

//contoh 3
type UserFalse = { name: string; age: number };
const userFalse: UserFalse[] = [
  { name: "Oby", age: 12 },
  { name: "Heera", age: 32 },
];
function getUserAgeFalse(name: string): number {
  const users = userFalse.find((user) => user.name === name);
  return users.age;
}
