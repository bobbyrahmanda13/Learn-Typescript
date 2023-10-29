// contoh 1
// export type Name = { name: string }
// export type Age = { age: number }
//
// type Union = Name | Age
//
// type Intersection = Name & Age
//
// const name = { name: 'Jane' }
// const age = { age: 29 }
// const nameAndAge = { name: 'Jane', age: 29 }
//
// let union: Union
// union = name
// union = age
// union = nameAndAge
//
// let intersection: Intersection
// intersection = nameAndAge
// intersection = name // error
// intersection = age // error


// contoh 2

export type Name = { name: string }
export type Age = { age: number }

type Union = Name | Age | (Name & Age) // cara bagus menggunakan intersection jika membutuhkan NameAndAge yang di implementasikan menggunakan type union

let union: Union
union = { name: 'Jane' }
union = { age: 29 }
union = { name: 'Jane', age: 29 }

function filterUnion(union: Union) {
  if ('name' in union) { // Name
    union.name // string
  }

  if ('age' in union) { // Age 
    union.age // number
  }
  if ('name' in union && 'age' in union) { // Name & Age
    union.name
    union.age
  }
}
