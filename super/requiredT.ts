/** 
  * Make all properties in T required
  */
// export type Required<T> = {
//   [P in keyof T]-?: T[P]
// }

// note: karena type Required<T> sudah disediakan oleh typescript compiler jadi type Partial<T> jika tidak ditulis pun tidak apa apa karena sudah ada dan bisa lansung digunakan

type RequiredPoint = { x?: number, y?: number }

// same as `{x:number, y:number}`
type PointRequired = Required<PartialPoint>

// optional members for consumers
type CircleConfig = {
  color?: string,
  radius?: number
}

// create class
class Circle {
  // Required: Internally all members will always be present
  private config: Required<CircleConfig>

  constructor(config: CircleConfig) {
    this.config = {
      color: config.color ?? 'green',
      radius: config.radius ?? 0
    }
  }

  draw() {
    // no null checking needed
    console.log(
      'Drawing a circle',
      'Color:', this.config.color,
      'Radius:', this.config.radius,
    )
  }
}
