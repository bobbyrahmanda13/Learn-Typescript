// core
// start
// type MathThisType = {
//   double(): void,
//   half(): void
// }
//
// export const math: MathThisType = {
//   double(this: { value: number }) {
//     this.value *= 2
//   },
//   half(this: { value: number }) {
//     this.value /= 2
//   }
// }

// const obj = {
//   value:1,
//   ...math,
// }

// obj.double()
// console.log(obj.value); // 2

// obj.half()
// console.log(obj.value); // 1

// end

// change 1 Using ThisType<T>

type MathThisType = {
  double(): void,
  half(): void
}

// catt using void type adalah type yang secara default digunakan pada function 

export const math: MathThisType & ThisType<{ value: number }> = {
  double() {
    this.value *= 2
  },
  half() {
    this.value /= 2
  }
}

const obj = {
  value: 1,
  ...math,
}
obj.double()
console.log(obj.value); // 2

obj.half()
console.log(obj.value); // 1

// catt : 
// jadi type "ThisType<T>" ini adalah type spesial yang digunakan pada "this" saja jadi jika ada this pada coding ts maka bisa gunakan type ini untuk mempersingkat nya


// contoh lainnya 

type StateDescription<D, M> = {
  data: D
  methods: M & ThisType<D & M>
}

function createState<D, M>(desc: StateDescription<D, M>): D & M {
  return { ...desc.data, ...desc.methods }
}

let state = createState({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx // akan error jika tidak menggunakan ThisType<T>
      this.y += dy // akan error jika tidak menggunakan ThisType<T>
    }
  }
})
state.x = 10
state.y = 20
state.moveBy(5, 5)
