// contoh pertama
export type Point = {
  readonly x: number,
  y?: number
}

export type Mapped<T> = {
  // readonly [P in keyof T]: T[P]

  //  jika ditambahkan tanda (?) sesudah [] maka  pada type input Point yg tadi nya tidak optional sekarang berubah menjadi type optional pada type output yaitu disini adalah type Result
  // +readonly [P in keyof T]?: T[P]

  // jika ingin melihat nya lebih baik type modifier kamu bisa menambahkan tanda (+) sebelum tanda ? contoh nya seperti ini :
  // +readonly [P in keyof T]+?: T[P]

  // tapi ini kurang bagus menurut sy pribadi
  // alih2 menggunakan tanda + lebih baik gunakan tanda minus (-) sebelum tanda ? karena tanda (-) bisa menghapus type optional yang ada pada type Point (input) jadi output nya akan hilang bisa dibilang menghapus tanda optional (?) nya
  // inti nya "jika kita menggunakan tanda tanya minus, kita dapat melihat bahwa sifat optional yang terdapat pada Y dihilangkan, jadi hasil nya Y yang awal nya bersifat optional sekarang berubah menjadi tidak menggunakan optional"

  // +readonly [P in keyof T]-?: T[P]

  // optional type 
  // +readonly [P in keyof T]: T[P]
  // !note = typescript juga memungkinkan menambahkan tanda (+) sebelum pengubah hanya bisa baca saja (readonly) secara opsional(optional)

  // jika kita menggunakan tanda minus (-) di awal readonly alih2 tanda plus tadi kita bisa menghapus type readonly nya dari dari input ada readonly tapi pada output nya readonly tersebut sudah hilang
  -readonly [P in keyof T]-?: T[P]
}

// output nya akan sama seperti input disini itu input nya adalah TypePoint dan output nya adalah type Result

export type Result = Mapped<Point>

// contoh lainnya
