// mode biasa
// type SquareTypeGuards = {
//   size: number
// }
// type RectangleTypeGuards = {
//   width: number
//   height: number
// }
// type Shape = SquareTypeGuards | RectangleTypeGuards

// function area(shape: Shape) {
//   if ("size" in shape) {
//     return shape.size * shape.size
//   }
//   if ("width" in shape) {
//     return shape.width * shape.height
//   }
//   const _ensure: never = shape
//   return _ensure
// }

// mdoe User Defined type Guards
type SquareTypeGuards = {
  size: number
}
type RectangleTypeGuards = {
  width: number
  height: number
}
type Shape = SquareTypeGuards | RectangleTypeGuards

function isSquare(shape: Shape): shape is SquareTypeGuards {
  return "size" in shape
}
function isRectangle(shape: Shape): shape is RectangleTypeGuards {
  return "width" in shape
}

function area(shape: Shape) {
  if (isSquare(shape)) {
    return shape.size * shape.size
  }
  if (isRectangle(shape)) {
    return shape.width * shape.height
  }
  const _ensure: never = shape
  return _ensure
}
