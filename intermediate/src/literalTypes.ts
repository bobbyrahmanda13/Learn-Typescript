// Contoh 0
// typescript yang biasa
// let direction: string;
// direction = "North";
// direction = "n0r7h";

// literal type
// contoh 1

// let direction: "North";
// direction = "North";
// direction = "n0r7h";

// contoh 2

// let direction: "North" | "East" | "South" | "West";
// direction = "North";
// direction = "n0r7h";
// direction = "South";

// contoh 3
// type CardinalDirection = "North" | "East" | "South" | "West";
// let direction: CardinalDirection;
// direction = "North";
// direction = "n0r7h";
// direction = "South";
//
// function move(distanceMeters: number, direction: CardinalDirection) {
//   console.log(`Moving ${distanceMeters} meters towards ${direction}`);
// }

// contoh 4
// support boolean

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;
function rollDice() {
  return (Math.floor(Math.random() * 6) + 1) as DiceValue;
}
if (rollDice() === 7) {
  throw new Error("Not Possible");
}
