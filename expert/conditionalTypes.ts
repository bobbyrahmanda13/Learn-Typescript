// example 1
type IsNumber<T> = T extends number ? "number" : "other"
// note : T type biasa dipanggil dgn conditional type karena bisa menggunakan conditional operator layaknya if else

// example 
type WithNumber = IsNumber<number>
type WithOther = IsNumber<string>

// javascript using typeof conditional
const isNumber = (value: unknown) =>
  typeof value === "number" ? "number" : "other"

const withNumber = isNumber(123)
const withOther = isNumber("hello")

// example 2
export type TypeName<T> =
  T extends string ? 'string' :
  T extends number ? 'number' :
  T extends boolean ? 'boolean' :
  T extends undefined ? 'undefined' :
  T extends symbol ? 'symbol' :
  T extends bigint ? 'bigint' :
  T extends Function ? 'function' :
  // Tapi untungnya dengan TypeScript, fungsi nama tipe kita bisa lebih baik daripada tipe operator bawaan (javascript)
  // tambahkan conditional type
  T extends null ? 'null' : 'object'

function typeName<T>(t: T): TypeName<T> {
  // tambahan 28-9-23 jam 16:22
  if (t === null) return 'null' as TypeName<T>
  return typeof t as TypeName<T>
}
const str = typeName('hello world')
const num = typeName(123)
const bool = typeName(true)
const undef = typeName(undefined)
const sym = typeName(Symbol('start'))
const big = typeName(24n)
const func = typeName(function() { })

const obj = typeName(null)

console.log(typeof null); // hasil nya adalah 'object'

