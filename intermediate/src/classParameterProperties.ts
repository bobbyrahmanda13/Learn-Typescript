class Personss {
  // public name: string;
  // public age: number;
  constructor(public name: string, public age: number) {
    // this.name = name;
    // this.age = age;
  }
}

const adam = new Personss("Adam", 120000);
console.log(adam.name, adam.age); // 'Adam', 120000
