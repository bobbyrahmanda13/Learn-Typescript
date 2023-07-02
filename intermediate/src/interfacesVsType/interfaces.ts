interface Point2DInterface {
  x: number;
  y: number;
}

interface Point3DInterface extends Point2DInterface {
  z: number;
}

export const pointInterface: Point3DInterface = {
  x: 0,
  y: 0,
  // z: 0,
  // Jika z di hilangkan kaan muncul error
  // Property 'z' is missing in type '{ x: number; y: number; }' but required in type 'Point3DInterface'. [2741]

  // jika tidak dihilangkan maka akan tetap aman
  z: 0,
};

//! note: asalan interface ada di dalam typescript
//! 1. keakraban bagi developer yang lain yang berasal dari bahasa pemrograman lain
//! 2. membuat type hieararki dan lebih familiar syntax nya dan sering digunakan oleh pemrograman lainnya
