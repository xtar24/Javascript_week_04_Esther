const Human = {
  species: "Homo sapiens",
  
  speak() {
    console.log(`${this.name} says: Hello!`);
  },

  walk() {
    console.log(`${this.name} is walking.`);
  },

  eat() {
    console.log(`${this.name} is eating`);
  },
}

const John = Object.create(Human);
John.name = 'John';
John.age = 30;

John.speak();
John.walk();
John.eat();