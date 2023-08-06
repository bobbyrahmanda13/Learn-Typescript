// Contoh 1
// START

// before
// start
// type Add = (a: number, b: number) => number

// after
// type
// type Add = {
//   (a: number, b: number): number
// }
// interface
// interface Add {
//   (a: number, b: number): number
// }
// end

// lanjutlan contoh 1
type Add = {
  (a: number, b: number): number
  (a: number, b: number, c: number): number
  debugName?: string
}

const add: Add = (a: number, b: number, c?: number) => {
  return a + b + (c != null ? c : 0)
}

add.debugName = "Additional Function"
// END

// contoh 2
// START
// before
// start
// type PointCreator = new (x: number, y: number) => { x: number; y: number }

// after
// type PointCreator = {
//   new (x: number, y: number): { x: number; y: number }
// }

// end

// type PointCreator = {
//   new (x: number, y: number): { x: number; y: number }
// }

// const Point: PointCreator = class {
//   constructor(public x: number, public y: number) {}
// }
// END

// Menggabungkan yang telah di pelajari hingga saat ini dan digabung kan menjadi 1 anotasi

type PointCreator = {
  new (x: number, y: number): { x: number; y: number }
  // function overload
  new (x: number, y: number, z: number): { x: number; y: number; z: number }
  // multiple constructor overload
  (x: number, y: number): { x: number; y: number }
  (x: number, y: number, z: number): { x: number; y: number; z: number }
  debugName: string
}
