// cara 1
// type StateMapped = {
//   name: string
//   age: number
// }
//
// /**
//  * {
//  * name: (value:string) => void
//  * age: (value:number) => void
//  * }
//  */
//
// type Setters = {
//   [K in keyof StateMapped]: (value: StateMapped[K]) => void
// }
//
// type SetProperty<K extends string> = `set${Capitalize<K>}`
//
// type ExampleName = SetProperty<'name'> // setName
// type ExampleAge = SetProperty<'age'> // setAge


// cara 2
// type StateMapped = {
//   name: string
//   age: number
// }
//
// /**
//  * {
//  * setName: (value:string) => void
//  * setAge: (value:number) => void
//  * }
//  */
//
// type Setters = {
//   [K in keyof StateMapped as `set${Capitalize<K>}`]: (value: StateMapped[K]) => void
// }

// cara 3

// type StateMapped = {
//   name: string
//   age: number
// }

/**
 * {
 * name: (value:string) => void
 * age: (value:number) => void
 * }
 */

// contoh yang error
// type Setters<StateMapped> = {
//   [K in keyof StateMapped as `set${Capitalize<K>}`]: (value: StateMapped[K]) => void // K error 
// }

// solved
export type Setters<StateMapped> = {
  [K in keyof StateMapped & string as `set${Capitalize<K>}`]: (value: StateMapped[K]) => void
}

export type Getters<StateMapped> = {
  [K in keyof StateMapped & string as `get${Capitalize<K>}`]: () => StateMapped[K]
}
export type Store<StateMapped> = Setters<StateMapped> & Getters<StateMapped>

// example
type PersonState = {
  name: string
  age: number
}

type PersonStore = Store<PersonState>

declare const personStore: PersonStore
personStore.setName("John")
personStore.setAge(27)

const name: string = personStore.getName() // John
const age: number = personStore.getAge() // 27
