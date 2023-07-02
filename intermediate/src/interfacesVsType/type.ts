type Point2DType = {
  x: number;
  y: number;
};
type Point3DType = Point2DType & {
  z: number;
};
export const pointType: Point3DType = {
  x: 0,
  y: 0,
  // z: 0,
  // jika z di hilangkan akan muncul error :
  //  Type '{ x: number; y: number; }' is not assignable to type 'Point3DType'. Property 'z' is missing in type '{ x: number; y: number; }' but required in type '{ z: number; }'. [2322]

  // jika tidak dihilangkan maka akan tetap aman
  z: 0,
};

// how to fix :
// export const pointType: Point3DType = {
//   x: 0,
//   y: 0,
//   z: 0,
// };
