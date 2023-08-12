// index Signatures
const strs = {
  hello: "world",
}
console.log(strs["hello"]) // 'world'

const nums = { 1337: "leet" }
console.log(nums[1337]) // 'leet'

// syntax => mungkin kwkwk
type Dictionary = {
  [key: string]: boolean
  // untuk key bisa di ganti dengan nama bebas
  // untuk boolean bisa diganti dengan type bebas
}

// contoh 1
type PersonIndexSignatures = {
  displayName: string
  email: string
}

type PersonDictionary = {
  [username: string]: PersonIndexSignatures | undefined
  // jancok: PersonIndexSignatures
}

const persons: PersonDictionary = {
  jane: {
    displayName: "Jane Doe",
    email: "jane@example.com",
  },
  // jancok: {
  //   displayName: "Jane Doe",
  //   email: "jane@example.com",
  // },
}

persons["john"] = { displayName: "John Doe", email: "jhon@example.com" }
console.log(persons["john"])
delete persons["john"]

const result = persons["missing"]
console.log(result, result.email) // undefined, error

persons["john"] = { displayName: "John Doe", emale: "john@example.com" } // error
