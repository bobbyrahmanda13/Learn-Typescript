/**
 * Make all properties is T optional
 */
// export type Partial<T> = {
//  [P in keyof T]?: T[P]
// }
// note: karena type Partial<T> sudah disediakan oleh typescript compiler jadi type Partial<T> jika tidak ditulis pun tidak apa apa karena sudah ada dan bisa lansung digunakan

type Point = { x: number, y: number }

// same as `{x?:number, y?:number}`
type PartialPoint = Partial<Point>


// example
class State<T>{
  constructor(public current: T) { }
  // Only need to pass in the properties you want changed
  update(next: Partial<T>) {
    this.current = { ...this.current, ...next }
  }
}

// Usage
const state = new State({x:0,y:0})
state.update({y:123}) // Partial. no need to provide `x`.
console.log(state.current); // Update successfull => { x:0, y:123}

