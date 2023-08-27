// generic constraints
// awal
// function addFullName<T>(obj: T): T {
//   return obj
// }

// next

// function addFullName<T>(obj: T): T {
//   return {
//     ...obj,
//   }
// }

// next

// function addFullName<T>(obj: T): T & { fullName: string } {
//   return {
//     ...obj,
//     fullName: `${obj.firstName} ${obj.lastName}`,
//   }
// }

// next

// function addFullName<T extends NameFields>(obj: T): T & { fullName: string } {
//   return {
//     ...obj,
//     fullName: `${obj.firstName} ${obj.lastName}`,
//   }
// }

// next

type NameFields = { firstName: string; lastName: string }
function addFullName<T extends NameFields>(obj: T): T & { fullName: string } {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`,
  }
}

const john = addFullName({
  email: "johndoe@example.com",
  firstName: "John",
  lastName: "Doe",
})
console.log(john.email) // john@example.com
console.log(john.fullName) // John Doe
// catatan: generic constraints yang menggunakan "extends" dari type NameFields yang sudah di declarasikan memungkinkan kita mengakses firstName dan lastname yang ada pada variabel object "john"

// contoh gagal dalam nemerapkan generic constraints
// const jane = addFullName({ firstName: "Jane" }) // error => Property 'lastName' is missing in type '{ firstName: string; }' but required in type 'NameFields'.ts(2345)
const jane = addFullName({ firstName: "Jane", lastName: "Austen" }) // harus menggunakan type yang di buat menggunakan type NameFields
