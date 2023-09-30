// Example 1

// before using infer keyword
// type IsArray<T> =
// T extends Array<any>
// ? 'array'
// : 'other'

// after using infer keyword
type IsArray<T> =
  T extends Array<infer Member> // Member ini adalah variable jadi bebas mau kasih nama apa aja 
  ? 'array'
  : 'other'

type WithArray = IsArray<string[]> // mungkin withArray jadi type array karena true <string[]> adalah string array
type WithNotArray = IsArray<number> // karena <number> not array jadi hasilnya adalah other tapi jika <number> diganti dengan <number[]> maka type WithNotArray akan berubah jadi array karena conditional type nya adalah true

type UnboxArray<T> =
  T extends Array<infer Member>
  ? Member
  : T

type UnboxedStringArray = UnboxArray<string[]>
type UnboxedNumberArray = UnboxArray<number[]>
type AnythingElse = UnboxArray<string>

// Example 2

export function createPerson(firstName: string, lastName: string) {
  return {
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`
  }
}

// ReturnType<T> ternyata sudah ada di typescript compiler jadi tidak butuh untuk di tuliskan lagi
// type ReturnType<T> =
// T extends (...args: any) => infer R
// ? R
// : never

// type Person = ReturnType<typeof createPerson> // kita juga tidak butuh membuat type lagi karena kita bisa membuatnya jadi inline(1 baris)

// function logPerson(person: Person) {
function logPerson(person: ReturnType<typeof createPerson>) {
  console.log(
    'Person:',
    person.firstName,
    person.lastName,
    person.fullName
  );
}
// note: jika hasil return pada function createPerson diubah di hapus atau diganti maka hasil function dari logPerson akan error, karena patokan nya ada lah type yang ada pada function createPerson
