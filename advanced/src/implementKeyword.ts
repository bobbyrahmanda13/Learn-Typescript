type Animals = {
  name: string
  voice(): string
}
function logss(animal: Animals) {
  console.log(`Animal ${animal.name}: ${animal.voice()} `)
}

// class Cat implements Animals {} //  error "Cat" => Type 'Cat' is missing the following properties from type 'Animals': name, voicets(2420)
// how to fix
class Cat implements Animals {
  constructor(public name: string) {}
  voice() {
    return "meow"
  }
}

class Dog implements Animals {
  constructor(public name: string) {}
  voice() {
    return "woff"
  }
}

logss(new Cat("Salem"))
logss(new Dog("Lassie"))
