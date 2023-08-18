type Point2DDoubleAssertion = { x: number; y: number }
type Point3DDoubleAssertion = { x: number; y: number; z: number }
type PersonDoubleAssertion = { name: string; email: string }

let point2D: Point2DDoubleAssertion = { x: 0, y: 0 }
let point3D: Point3DDoubleAssertion = { x: 10, y: 10, z: 10 }
let person: PersonDoubleAssertion = { name: "john", email: "john@example.com" }

point2D = point3D
point3D = point2D // Error => Property 'z' is missing in type 'Point2DDoubleAssertion' but required in type 'Point3DDoubleAssertion'.ts(2741) => karena z tidak ada pada point 2D karena pada point 2D hanya ada x dan y sedangkan pada point 3D ada z

// cara fix using single assertion
point3D = point2D as Point3DDoubleAssertion // OK; I trust you

person = point3D // error => Type 'Point3DDoubleAssertion' is missing the following properties from type 'PersonDoubleAssertion': name, emailts(2739)
point3D = person // error => Type 'PersonDoubleAssertion' is missing the following properties from type 'Point3DDoubleAssertion': x, y, zts(2739)

point3D = person as Point3DDoubleAssertion // error => Conversion of type 'PersonDoubleAssertion' to type 'Point3DDoubleAssertion' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first. Type 'PersonDoubleAssertion' is missing the following properties from type 'Point3DDoubleAssertion': x, y, zts(2352)

// cara fix using double assertion
point3D = person as unknown as Point3DDoubleAssertion // OK: i doubly trust you
