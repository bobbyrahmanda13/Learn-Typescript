// contoh 1
// type PointNonNull = {
//   x: number;
//   y: number;
// };
// let pointNonNull: PointNonNull;
// function initialize() {
//   pointNonNull = { x: 0, y: 0 };
// }
// initialize();
// error : Variable 'pointNonNull' is used before being assigned.
// console.log("After initialize", pointNonNull.x, pointNonNull.y);

// how to fix using (!)
// console.log("After initialize", pointNonNull!.x, pointNonNull!.y);

// documentation link : https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-

// menulis ulang code agar tidak mendapatkan non-null assertion operator

// type PointNonNull = {
//   x: number;
//   y: number;
// };
//
// function initialize(): PointNonNull {
//   return { x: 0, y: 0 };
// }
//
// const pointNonNull = initialize();
// console.log("After initialize", point.x, point.y);

// contoh 2
// type PersonNonNull = {
//   name: string;
//   email?: string | null | undefined;
// };
// function sendEmail(email: string) {
//   console.log("Sent email to", email);
// }
// function ensureContactable(person: PersonNonNull) {
//   if (person.email == null)
//     throw new Error(`Person ${person.name} is not contactable`);
// }
// function contactNonNull(person: PersonNonNull) {
//   ensureContactable(person);
//   // Error Argument of type 'string | null | undefined' is not assignable to parameter of type 'string'. Type 'undefined' is not assignable to type 'string'. [2345]
//   // sendEmail(person.email);
//
//   // how to fix using (!) Non-Null Assertionj
//   sendEmail(person.email!);
// }

// jika di code ulang untuk menghindari non-null assertion operator

type PersonNonNull = {
  name: string;
  email?: string | null | undefined;
};
function sendEmail(email: string) {
  console.log("Sent email to", email);
}
function contactNonNull(person: PersonNonNull) {
  if (person.email == null)
    throw new Error(`Person ${person.name} is not contactable`);
  sendEmail(person.email);
}
