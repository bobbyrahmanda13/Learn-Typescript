type PersonAssertionFunctions = {
  name: string
  dateOfBirth?: Date
}
// function ini adalah assertion function
// start
function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message)
}
// end
function loadPerson(): PersonAssertionFunctions | null {
  throw new Error("Function not implemented.")
}
const maybePerson = loadPerson()

assert(maybePerson != null, "Could not load person")
console.log("Name:", maybePerson.name)

function assertDate(value: unknown): asserts value is Date {
  // date itu Type => asserts value is Date adalah menegaskan parameter value itu dengan type Date
  if (value instanceof Date) return
  else throw new TypeError("Value is not a Date")
}

assertDate(maybePerson.dateOfBirth)
console.log("Date of Birth:", maybePerson.dateOfBirth.toISOString())

//! note :
// Application Code => User Defined Type Guards
// Application Test => Assertion Function
