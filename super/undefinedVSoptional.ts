// contoh 1
// type optional
type ExampleOptional = {
  name?: string
}
let optional: ExampleOptional

optional = { name: undefined }
optional = {}

// type unions
type ExampleUnion = {
  name: string | undefined
}

let union: ExampleUnion

union = { name: undefined }
union = {} // Error: name is Missing

// contoh 2 "function"
function logOptional(message?: string) {
  console.log(message);

}
logOptional(undefined)
logOptional()

function logUnion(message: string | undefined) {
  console.log(message);
}
logUnion(undefined)
logUnion() // Error: expected 1 argument. `message` was not provided

// catatan: 
// question: jadi yang mana yang digunakan ?
// answer: jadi rekomended nya gunakan optional type jika ingin menggunakan type undefined untuk kasus yang lebih spesifik

// contoh penggunaan type undefined pada function biasa yang belom di refactor, jadi type undefined pada code ini masih error jika menggunakan type optional

// Error: a required parameter cannot follow an optional parameter
function logOptionalFunction(error?: Error, message: string) {
  if (error != undefined) {
    console.error(error, message);
  } else {
    console.log(message);
  }
}

function logUnionsFunction(error: Error | undefined, message: string) {
  if (error != undefined) {
    console.error(error, message);
  } else {
    console.log(message);
  }
}

// contoh penggunaan type undefined pada function yang di refactor dari code di atas dengan kasus yang beda

// core
function setConfigCore(configCore: {
  name: string,
  priority: number
}) {
  //...
}
setConfigCore({ name: 'hello' }) // error
setConfigCore({ name: 'oooooppss' }) // error
setConfigCore({ name: 'perfect' }) // error
setConfigCore({ name: 'sfasdf' }) // error

// change 1 using union type dgn memeasukkan type undefined

function setConfigUnion(configUnion: {
  name: string,
  priority: number | undefined
}) {
  //...
}
setConfigUnion({ name: 'hello', priority: undefined })
setConfigUnion({ name: 'oooooppss', priority: 10 })
setConfigUnion({ name: 'perfect' }) // error
setConfigUnion({ name: 'sfasdf' }) // error

// catt: cara ini memeang bisa tapi ini bakalan ribet karena kita harus membuat semua config priority dimana function setConfig di gunakan, jadi jika kita bakalan banyak menggunakan function tersebut maka kita harus tulis juga lengkap2 type nya dan variabel yang ada pada type tersebut

// change 2 using optinal type

function setConfigOptional(configOptional: {
  name: string,
  priority?: number
}) {
  //...
}
setConfigOptional({ name: 'hello', priority: undefined })
setConfigOptional({ name: 'oooooppss', priority: 10 })
setConfigOptional({ name: 'perfect' })
setConfigOptional({ name: 'sfasdf' })

