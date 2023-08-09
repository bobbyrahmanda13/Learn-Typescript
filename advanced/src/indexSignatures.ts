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
}

// contoh 1
type PersonIndexSignatures = {
  displayName: string
  email: string
}

type PersonDictionary = {
  [username: string]: PersonIndexSignatures
}

const persons: PersonDictionary = {
  jane: {
    displayName: "Jane Doe",
    email: "jane@example.com",
  },
}
