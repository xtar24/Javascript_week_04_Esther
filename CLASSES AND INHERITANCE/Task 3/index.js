const { JSDOM } = require("jsdom");
const dom = new JSDOM(
  `<body><div id="actionDisplay"></div><button id="barkbtn"></button><button id="runBtn"></button><button id="wiggleTailBtn"></button><button id="getAngryBtn"></button></body>`
);

const document = dom.window.document;

class Dog {
  constructor(breed, color, size, tail) {
    this.breed = breed;
    this.color = color;
    this.size = size;
    this.tail = tail;
  }

  bark() {
    return `${this.breed} is barking! woof!! woof!!!`;
  }

  run() {
    return `${this.breed} is running! argh!! argh!!!`;
  }

  wiggleTail() {
    return `${this.breed} is wiggling its tail! shh!! shh!!`;
  }

  getAngry() {
    return `${this.breed} is getting angry! grr!! grr!!!`;
  }
}

const germanShephard = new Dog(
  "German Shepherd",
  "Black and Tan",
  "large",
  true
);
const chihuahua = new Dog("Chihuahua", "Brown", "Small", true);

const actionDisplay = document.getElementById("actionDisplay");

document.getElementById("barkbtn").addEventListener("click", () => {
  actionDisplay.textContent = germanShephard.bark();
});

document.getElementById("runBtn").addEventListener("click", () => {
  actionDisplay.textContent = germanShephard.run();
});

document.getElementById("wiggleTailBtn").addEventListener("click", () => {
  actionDisplay.textContent = germanShephard.wiggleTail();
});

document.getElementById("getAngryBtn").addEventListener("click", () => {
  actionDisplay.textContent = germanShephard.getAngry();
});
