// contoh 1
const fail = (message: string) => {
  throw new Error(message);
}; // => const fail: (message: string) => never => funcsi yang tidak memiliki ketidakterbatasan yang sangat jelas

const sig = function () {
  while (true) {
    console.log("Never gonna give you up");
    console.log("Never gonna let you down");
    console.log("Never gonna run around and desert you");
    console.log("Never gonna make you cry");
    console.log("Never gonna say goodbye");
    console.log("Never gonna tell a lie and hurt you");
  }
}; // => const sig = () => never => sebuah fungsi yang tidak ada return jadi akan berulang terus hingga tak terbatas

// type never
// let example: never = 123; // error => Type 'number' is not assignable to type 'never'. [2322]
type SquareNeverType = { kind: "square"; size: number };
type RectangleNeverType = { kind: "rectangle"; width: number; height: number };

// jika ditambahakan type baru maka :
type CircleNeverType = { kind: "circle"; radius: number };

// type Shapes = SquareNeverType | RectangleNeverType;

// add type circle
type Shapess = SquareNeverType | RectangleNeverType | CircleNeverType;

function area(ss: Shapess) {
  // const _ensureAllCaseAreHandled: never = s;
  // error
  // Type 'Shapes' is not assignable to type 'never'.
  // Type 'SquareNeverType' is not assignable to type 'never'. [2322]
  // 'ensureAllCaseAreHandled' is declared but its value is never read. [6133]

  // cara solved nya
  // if (s.kind === "square") {
  //   return s.size * s.size;
  // }
  // const _ensureAllCaseAreHandled: never = s;
  // error lagi
  // 1. Type 'RectangleNeverType' is not assignable to type 'never'. [2322]
  // 2. '_ensureAllCaseAreHandled' is declared but its value is never read. [6133]

  // lansjut cara solved nya sebelum di tambahkan type circle tidak error
  // if (s.kind === "square") {
  //   return s.size * s.size;
  // } else if (s.kind === "rectangle") {
  //   return s.width * s.height;
  // }
  // const _ensureAllCaseAreHandled: never = s;

  // setelah ditambahkan type circle
  // if (s.kind === "square") {
  //   return s.size * s.size;
  // } else if (s.kind === "rectangle") {
  //   return s.width * s.height;
  // }
  // const _ensureAllCaseAreHandled: never = s;
  // error lagi karena menambahkan type baru
  // 1. Type 'CircleNeverType' is not assignable to type 'never'. [2322]
  // 2. '_ensureAllCaseAreHandled' is declared but its value is never read. [6133]

  //! Note : dengan cara begini never type dapat membantu orang yang melakukan modifikasi dan mereka dapat memastikan bahwa type baru ini ditangani secara keseluruhan fungsi type / utilitas

  // cara solved nya
  if (ss.kind === "square") {
    return ss.size * ss.size;
  } else if (ss.kind === "rectangle") {
    return ss.width * ss.height;
  } else if (ss.kind === "circle") {
    return Math.PI * ss.radius ** 2;
  }
  const _ensureAllCaseAreHandled: never = ss;
  return _ensureAllCaseAreHandled;
}

//! note lagi : bahwa semua bagian dari suatu fungsi harus mengambalikan nilai ( return ) jika tidak typescript menyimpulkan bahwa return type from function tidak terdefinisi (undefined)
