// string manipulation utilities
export type UppercaseSimple<T> =
  T extends 'a' ? 'A'
  : T extends 'b' ? 'B'
  // ... lots more
  : T

type a = UppercaseSimple<'a'>
type b = UppercaseSimple<'b'>

export type UppercaseRecursive<T> =
  T extends `a${infer Rest}` ? `A${UppercaseRecursive<Rest>}`
  : T extends `b${infer Rest}` ? `B${UppercaseRecursive<Rest>}`
  // ... lots more
  : T

// cat: "infer" adalah sebuah kata kunci yg digunakan dalam konteks ini untuk "mengambil" atau "mendapatkan" bagian dari tipe string yang ada dan mengikat nya ke variabel "Rest" jadi "Rest" itu adalah variabel jadi bisa diganti dengan nama bebas

type abba = UppercaseRecursive<'abba'> // ABBA

// tapi Typescript compiler team sudah membuatkan sebuah type untuk mengubah huruf a kecil menjadi besar dengan type "Uppercase<T>"

type Jancok = Uppercase<'jancok'> // JANCOK

// tidak hanya "Uppercase" tapi "Lowercase" juga ada

type Totot = 'TESTING BRO'
type TototResult = Lowercase<Totot> // testing bro

// wah sungguh mantap tidak hanya yang 2 itu aja tetapi juga ada "Capitalize" juga serta ada "Uncapitalize" (lawan dari capitalize)

// capitalize
type Hello = "anjing makan daging"
type Better = Capitalize<Hello> // Anjing makan daging 

// uncapitalize
type UnBetter = Uncapitalize<Totot> // tESTING BRO

// note : apapun termasuk charackter utf-8 atau karakter sumbol yang ada huruf besar atau kecil bisa mengguanakn type yang diatas

// contoh cara lain menggunakan nya
type Getter<T extends string> = `get${Capitalize<T>}`
type Setter<T extends string> = `set${Capitalize<T>}`

type Name = 'name'

type GetName = Getter<Name> // getName
type SetName = Setter<Name> // setName
