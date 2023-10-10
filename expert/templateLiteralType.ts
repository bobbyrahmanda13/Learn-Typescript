// javascript template literal
let jsStringLiteral;
jsStringLiteral = 'hello'
jsStringLiteral = "whatever"

let jsTemplateLiteral;
jsTemplateLiteral = `Example : ${jsStringLiteral}` // Example: whatever
jsTemplateLiteral = `Example : ${3.14}` // Example: 3.14

// typescript template literal
let str: string
str = 'whatever you want'

let strLiteral: 'hello'
strLiteral = 'hello'
strLiteral = 'anything else is an error' // error : not 'hello'

let templateLiteralString: `Example : ${string}`
// !note: jadi pada templateLiteralString: `Example :${string}` ini harus kata2 nya sama dan pada ${string} itu di isi dengan string bukan type lain, jika di isi type yang lain maka akan error
templateLiteralString = `Example : hello`
templateLiteralString = `Example : word`
templateLiteralString = `without a Example prefix`// Error: not `Example: ${string}`


let templateLiteralNumber: `Example : ${number}`
templateLiteralNumber = `Example : 2`
templateLiteralNumber = `Example : 12312423`
templateLiteralNumber = `Example : jancok` // di isi dengan string maka error
templateLiteralNumber = `Example : false` // di isi dengan boolean maka error
templateLiteralNumber = `Juancok maneh` // error: not `Example : ${number}`

// use case real particular feature
