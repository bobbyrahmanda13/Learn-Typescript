// Javascript
// class Animal {
//   name;
//   constructor(name) {
//     this.name = name;
//   }
//   move(distanceInMeters) {
//     console.log(`${this.name} moved ${distanceInMeters}m`);
//   }
// }
// let cat = new Animal("Cat");
// cat.move(10);

// Typescript
// pada javascript semua acces control terhadap propertis and method dari dalam classs adalah public
//
// class Animal {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   move(distanceInMeters: number): void {
//     console.log(`${this.name} moved ${distanceInMeters}m`);
//   }
// }
// let cat = new Animal("Cat");
// cat.move(10);

// menggunakan keyword public pada function move
// class Animal {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   public move(distanceInMeters: number): void {
//     console.log(`${this.name} moved ${distanceInMeters}m`);
//   }
// }
// let cat = new Animal("Cat");
// cat.move(10); // tetap bisa di akses/digunakan
// cat.name = "Dog"; // tetap bisa diakses/digunakan
//

// // menggunakan keyword private pada name
// class Animal {
//   private name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   public move(distanceInMeters: number): void {
//     console.log(`${this.name} moved ${distanceInMeters}m`);
//   }
// }
// let cat = new Animal("Cat");
// cat.move(10); // tetap bisa di akses/digunakan
// cat.name = "Dog"; // tidak bisa di akses/digunakan secara public
//
// class Bird extends Animal {
//   fly(distanceInMeters: number) {
//     console.log(`${this.name} flew ${distanceInMeters}m`); // name tidak bisa diakses/digunakan didalam class lain
//   }
// }

// menggunakan keyword protected pada name
class Animal {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  public move(distanceInMeters: number): void {
    console.log(`${this.name} moved ${distanceInMeters}m`);
  }
}
let cat = new Animal("Cat");
cat.move(10); // tetap bisa di akses/digunakan
cat.name = "Dog"; // tidak bisa di akses/digunakan secara public

class Bird extends Animal {
  fly(distanceInMeters: number) {
    console.log(`${this.name} flew ${distanceInMeters}m`); // name bisa diakses/digunakan didalam class lain
  }
}
