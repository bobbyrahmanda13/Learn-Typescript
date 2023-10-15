/**
 * Make all properties in T readonly
 */

// export type Readonly<T> = {
//   readonly [P in keyof T]: T[P]
// }

// note: karena type Readonly<T> sudah disediakan oleh typescript compiler jadi type Partial<T> jika tidak ditulis pun tidak apa apa karena sudah ada dan bisa lansung digunakan

type PointReadonly = { x: number, y: number } // input type

// same as `{ readonly x:number, readonly y:number }
type ReadonlyPoint = Readonly<PointReadonly>

// example
function makeReadonly<T>(object: T): Readonly<T> {
  return Object.freeze({ ...object })
}

const editablePoint = { x: 0, y: 0 }
editablePoint.x=2 // succes:allowed

const readonlyPoint = makeReadonly(editablePoint)
readonlyPoint.x=3 // Error: readonly
