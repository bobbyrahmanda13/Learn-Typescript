// contoh awal
// javascript
// const king = "elvis"
// king = "john" // error => Cannot assign to 'king' because it is a constant.ts(2588)

// const upperCased = king.toUpperCase() // king === 'elvis'

// const dave = {
//   name: "dave",
//   role: "drummer",
//   skills: ["drumming", "headbanging"],
// }
// dave = {
//   // error => Cannot assign to 'dave' because it is a constant.ts(2588)
//   name: "grohl",
//   role: "singer",
//   skills: ["singing", "drumming", "headbanging"],
// }
// dave.name = "grohl"
// dave.role = "singer"
// dave.skills.unshift("singing")

// typescript

const king = "elvis"
king = "john" // error => Cannot assign to 'king' because it is a constant.ts(2588)

const upperCased = king.toUpperCase() // king === 'elvis'

// menggunakan const assertion
const dave = {
  name: "dave",
  role: "drummer",
  skills: ["drumming", "headbanging"],
} as const

//! note : hasil menggunakan const assertion jika di hover pada variabel dave
// const dave: {
//     readonly name: "dave";
//     readonly role: "drummer";
//     readonly skills: readonly ["drumming", "headbanging"];
// }

dave = {
  // error => Cannot assign to 'dave' because it is a constant.ts(2588)
  name: "grohl",
  role: "singer",
  skills: ["singing", "drumming", "headbanging"],
}
dave.name = "grohl" // error => Cannot assign to 'name' because it is a read-only property.ts(2540)
dave.role = "singer" // error => Cannot assign to 'role' because it is a read-only property.ts(2540)
dave.skills.unshift("singing") // error => Property 'unshift' does not exist on type 'readonly ["drumming", "headbanging"]'.ts(2339)

// contoh lainnya
// contoh awal
// function layout(settings: {
//   align: "left" | "center" | "right"
//   padding: number
// }) {
//   console.log("Performing layout:", settings)
// }

// const example = {
//   align: "left",
//   padding: 0,
// }
// layout(example) // error => Argument of type '{ align: string; padding: number; }' is not assignable to parameter of type '{ align: "left" | "center" | "right"; padding: number; }'. Types of property 'align' are incompatible. Type 'string' is not assignable to type '"left" | "center" | "right"'.ts(2345)

//contoh menggunakan const assertion

function layout(settings: {
  align: "left" | "center" | "right"
  padding: number
}) {
  console.log("Performing layout:", settings)
}

// menggunakan const assertion
// cara 1
// const example = {
//   align: "left",
//   padding: 0,
// } as const

// cara 2
const example = {
  align: "left" as const,
  padding: 0,
}

layout(example)
//! note : hasil menggunakan const assertion jika di hover pada variabel example
// cara 1
// const example: {
//     readonly align: "left";
//     readonly padding: 0;
// }

//! note : hasil dari menggunakan const assertion jika di hover pada variabel example
// cara 2
// const example: {
//     align: "left";
//     padding: number;
// }

// tips const assertion
// Jadi ketika Anda menggunakan pernyataan const untuk memperbaiki kesalahan, Anda selalu disarankan untuk menerapkannya pada titik yang spesifik mungkin. const assertion hanyalah petunjuk yang meningkatkan keamanan type dengan membatasi mutabilitas sehingga Anda dapat menggunakannya tanpa mengkhawatirkan pengecekan type menjadi tidak aman

//  tidak seperti assertion lain yang membungkan untuk sebuah code yang tidak adman
