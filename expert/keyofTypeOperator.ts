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
// console.log(logGet(john, "email")) // Error
// solved step four
// type PersonKeys = keyof PersonKeyof
// note : pada functon logGet kan ada 2 parameter yang akan di masukkan yaitu obj dan key
// nah Obj itu adalah parameter/argumen yang berisi type data object yang nanti dipanggil dalam conth di atas itu variabel nya "john", sedangkan Key itu isi data yg ada dalam objek tersebut dalam hal ini itu adalah name,age,locatin dan isTrue
// obj dan key itu bisa di ganti dengan yang lain kok jadi gk harus kata Obj / Key saya dah coba sih cuman gk tau dah, dari pemahaman saya seperti itu
// ini hasil hover nya dari function logGet => function logGet<PersonKeyof, "age">(obj: PersonKeyof, key: "age"): number

function logSet<Obj, Key extends keyof Obj>(
  obj: Obj,
  key: Key,
  value: Obj[Key]
) {
  console.log("Setting:", key, value)
  obj[key] = value
}
const jancok = logSet(john, "age", 23)

// begitu juga dengan logSet => function logSet<PersonKeyof, "age">(obj: PersonKeyof, key: "age", value: number): void
