//! step one
// type PersonKeyof = {
//   name: string
//   age: number
//   location: string
// }
// const john: PersonKeyof = {
//   name: "John",
//   age: 35,
//   location: "Melbourne",
// }
// function logGet(obj: any, key: string) {
//   const value = obj[key]
//   console.log("Getting", key, value)
//   return value
// }
// const age = logGet(john, "age") // 35
// console.log(logGet(john, "email")) // Error

// step two
// type PersonKeyof = {
//   name: string
//   age: number
//   location: string
// }
// const john: PersonKeyof = {
//   name: "John",
//   age: 35,
//   location: "Melbourne",
// }
// function logGet(obj: any, key: "name" | "age" | "location") {
//   const value = obj[key]
//   console.log("Getting", key, value)
//   return value
// }
// const age = logGet(john, "age") // 35
// console.log(logGet(john, "email")) // Error

// step three

// type PersonKeyof = {
//   name: string
//   age: number
//   location: string
// }
// const john: PersonKeyof = {
//   name: "John",
//   age: 35,
//   location: "Melbourne",
// }
// function logGet(obj: any, key: "name" | "age" | "location") {
//   const value = obj[key]
//   console.log("Getting", key, value)
//   return value
// }
// const age = logGet(john, "age") // 35
// console.log(logGet(john, "email")) // Error
// // solved step three
// type PersonKeys = keyof PersonKeyof

// step four
type PersonKeyof = {
  name: string
  age: number
  location: string
  isTrue: boolean
}
const john: PersonKeyof = {
  name: "John",
  age: 35,
  location: "Melbourne",
  isTrue: false,
}
// function logGet(obj: PersonKeyof, key: keyof PersonKeyof) {
//   const value = obj[key]
//   console.log("Getting", key, value)
//   return value
// }
// karena tidak ada code yang spesifik mengguankan type dari PersonKeyof maka gunakan generic type untuk membuat function general
//! Doc: Kata kunci => generic type = Obj dan Key
function logGet<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
  const value = obj[key]
  console.log("Getting", key, value)
  return value
}

const age = logGet(john, "age") // 35
const names = logGet(john, "name") // 35
const isTruee = logGet(john, "isTrue") // 35
const locations = logGet(john, "location") // 35
console.log(logGet(john, "email")) // Error
// solved step four
// type PersonKeys = keyof PersonKeyof
