// Contoh 1
// type Circle = {
//   kind: "circles";
//   radius: number;
// };
// type Squares = { kind: "squares"; size: number };
// type Rectangles = { kind: "rectangles"; width: number; height: number };
// type Shapes = Circle | Squares | Rectangles;
//
// function areas(shape: Shapes) {
//   if (shape.kind === "circles") {
//     return Math.PI * (shape.radius * 2);
//   }
//   if (shape.kind === "squares") {
//     return shape.size * shape.size;
//   }
//   if (shape.kind === "rectangles") {
//     return shape.width * shape.height;
//   }
// }

// Contoh 2
type ValidationSucces = { isValid: true; validateValue: string };
type ValidationFailure = { isValid: false; errorReason: string };
type ValidationResult = ValidationSucces | ValidationFailure;

function logResults(result: ValidationResult) {
  if (result.isValid) {
    console.log("Succes, validate value: ", result.validateValue);
  }
  if (result.isValid === false) {
    console.error("Failure, error message ", result.errorReason);
  }
}
