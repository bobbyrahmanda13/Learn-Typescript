// contoh 1
// let dice: number;
// function rolllDice() {
//   dice = Math.floor(Math.random() * 6) + 1;
// }
// rolllDice();
// console.log("Current Dice Value", dice!); // use assertion ! (previous lesson)
// rolllDice();
// console.log("After another roll", dice);

// how to fix

let dice!: number // Definite Assignment Assertion (!) di variabel
function rolllDice() {
  dice = Math.floor(Math.random() * 6) + 1
}
// rolllDice();
// console.log("Current Dice Value", dice!); // use assertion ! (previous lesson)
// how to fix
rolllDice()
console.log("Current Dice Value", dice)
rolllDice()
console.log("After another roll", dice)

// contoh lainnya

// class lolok {
//   x: number // Error => Property 'x' has no initializer and is not definitely assigned in the constructor.ts(2564)
//   y: number // Error => Property 'y' has no initializer and is not definitely assigned in the constructor.ts(2564)
//   constructor() {
//     // this.x = Math.random()
//     // this.y = Math.random()
//     this.moveRandom()
//   }
//   moveRandom() {
//     this.x = Math.random()
//     this.y = Math.random()
//   }
// }

// how to fix

class lolok {
  x!: number
  y!: number
  constructor() {
    // this.x = Math.random()
    // this.y = Math.random()
    this.moveRandom()
  }
  moveRandom() {
    this.x = Math.random()
    this.y = Math.random()
  }
}
