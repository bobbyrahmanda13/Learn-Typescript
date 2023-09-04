// contoh 1

// const center = {
//   x: 0,
//   y: 0,
//   z: 0,
// }
// before using typeof
// type PointTypeof = {
//   x: number
//   y: number
//   z: number
// }

// after using typeof
// type PointTypeof = typeof center

// later
//  const unit: PointTypeof = { // error => Property 'z' is missing in type '{ x: number; y: number; }' but required in type '{ x: number; y: number; z: number; }'.ts(2741)
// // typeofTypeOperator.ts(4, 3): 'z' is declared here.
//   x: center.x + 1,
//   y: center.y + 1,
// }

// solved
// const unit: PointTypeof = {
//   x: center.x + 1,
//   y: center.y + 1,
//   z: center.z + 1,
// }

// if using type of inline
const center = {
  x: 0,
  y: 0,
  z: 0,
}

const unit: typeof center = {
  x: center.x + 1,
  y: center.y + 1,
  z: center.z + 1,
}

// contoh 2
const personResponse = {
  name: "feri",
  email: "ferijelek@gmail.com",
  firstName: "feri",
  lastName: "jelek",
}

type PersonResponse = typeof personResponse
function processResponse(person: PersonResponse) {
  console.log("Full Name:", `${person.firstName} ${person.lastName}`)
}
