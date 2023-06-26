// contoh 1
// type Point2D = {
//   x: number;
//   y: number;
// };
// type Point3D = {
//   x: number;
//   y: number;
//   z: number;
// };

// convert to intersection type
// type Point2D = {
//   x: number;
//   y: number;
// };
// type Point3D = Point2D & {
//   z: number;
// };

// contoh 2
type PersonIntersectionTypes = {
  name: string;
};
type EmailIntersectionTypes = {
  email: string;
};
type PhoneIntersectionTypes = {
  phone: string;
};
type ContactDetails = PersonIntersectionTypes &
  EmailIntersectionTypes &
  PhoneIntersectionTypes;

function contactIntersectionTypes(details: ContactDetails) {
  console.log(`Dear ${details.name}. I hope you received our email at ${details.email}. 
  we will call you at ${details.phone} shortly`);
}
// contactIntersectionTypes({
//   name: "John",
//   email: "testing@gmail.com",
//   phone: "23423",
// });
