// bad code
// let center: { x: number; y: number } = {
//   x: 0,
//   y: 0,
// };
//
// let unit: { x: number; y: number } = {
//   x: 1,
//   y: 1,
// };

// nice code
type Point = { x: number; y: number };

let center: Point = {
  x: 0,
  y: 0,
};

let unit: Point = {
  x: 1,
  y: 1,
};
