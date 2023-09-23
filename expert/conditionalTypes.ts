// testing
type IsNumber<T>
  = T extends number
  ? "number" : "other"
// note : T type biasa dipanggil dgn conditional type karena bisa menggunakan conditional operator layaknya if else

// javascript using typeof conditional
const isNumber = (value: unknown) =>
  typeof value === "number" ? "number" : "other"

const withNumber = isNumber(123)
const withOther = isNumber("hello")

