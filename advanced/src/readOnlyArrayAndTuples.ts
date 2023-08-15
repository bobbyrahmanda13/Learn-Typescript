// tidak menggunakan readonly
// function reverseSorted(input: number[]): number[] {
//   return input.sort().reverse()
// }

// const start = [1, 2, 3, 5, 4, 9, 7]
// const resultArrayAndTuples = reverseSorted(start)

// console.log(resultArrayAndTuples) // [9,7,5,4,3,2,1]
// console.log(start) // [9,7,5,4,3,2,1]

// menggunakan readonly
function reverseSorted(input: readonly number[]): number[] {
  // return input.sort().reverse() // error => does not exist on type 'readonly number[]'
  return input.slice().sort().reverse()
}

const start = [1, 2, 3, 5, 4, 9, 7]
const resultArrayAndTuples = reverseSorted(start)

console.log(resultArrayAndTuples) // [9,7,5,4,3,2,1]
console.log(start) // [1,2,3,4,5,7,9]

// type Neat = number[]
// type Long = Array<number> // generic array number

// jika ditambahkan dengan readonly
type Neat = readonly number[] //
type Long = ReadonlyArray<number> // generic array number

// contoh berikutnya tanpa readonly => yang ini bahas soal tuple
// type Point = [number, number]
// function move(point: Point, x: number, y: number): Point {
//   point[0] += x
//   point[1] += y
//   return point
// }
// const point: Point = [0, 0]
// const moved = move(point, 10, 10)

// console.log(moved) // [10,10]
// console.log(point) // [10,10]

// menggunakan readonly => yang ini bahas soal tuple
type Point = readonly [number, number]
function move(point: Point, x: number, y: number): Point {
  // point[0] += x // error => Cannot assign to '0' because it is a read-only property.ts(2540)
  // point[1] += y // error => Cannot assign to '0' because it is a read-only property.ts(2540)
  // return point

  // solved
  return [point[0] + x, point[1] + y]
}
const point: Point = [0, 0]
const moved = move(point, 10, 10)

console.log(moved) // [10,10]
console.log(point) // [0,0]
