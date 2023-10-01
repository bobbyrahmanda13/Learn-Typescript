export type Point = {
  x: number,
  y: number,
  z: number
}

// jadi jika ingin "center.x = 100" error maka kita tambahkan buat type dgn nama variabel ReadonlyPoint
// before using Mapped Types
// type ReadonlyPoint = {
// readonly x:number,
// readonly y:number,
// readonly z:number
// }

// % after using Mapped Types
// type ReadonlyPoint = {
// [Item in Union]: Output // => Item = variabel looping, Union = gabungan type yang akan kita ulangi(looping), Output = hasil type
// Case :
// [Item in 'x' | 'y' | 'z']: number

// !note : bagusnya mapped type dapat menambahkan pengubah yang akan di terapkan ke semua item looping contoh nya seperti "readonly"
//  readonly [Item in 'x' | 'y' | 'z']: number
// }

// % after using mapped type and add keyof
// type ReadonlyPoint = {
// readonly [Item in keyof Point]: Point[Item]
// }

// % after using mapped type and add keyof + generic T
// type Readonly<T> = {
  // readonly [Item in keyof T]: T[Item]
// }

// ! note = tapi sebenar nya kita tidak perlu membuat type "Readonly<T>" karena sudah dibuatkan oleh typescript compiler jadi kita hapus pun gk papa 

// const center: Point = { // kita ubah type point menjadi ReadonlyPoint
// const center: ReadonlyPoint = {
// x: 0,
// y: 0,
// z: 0
// }

const center: Readonly<Point> = {
  x: 0,
  y: 0,
  z: 0
}

// center.x = 100 // sebaiknya ini error
