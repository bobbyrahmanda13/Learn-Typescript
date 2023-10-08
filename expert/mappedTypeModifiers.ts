export type Point = {
  readonly x: number,
  y?: number
}

export type Mapped<T> = {
  // readonly [P in keyof T]: T[P]

  // optional type 
  +readonly [P in keyof T]: T[P]
}

export type Result = Mapped<Point>

