// light's out
// Hayden Wineera
// 11/17/2021

// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let someText;
let instance;

function setup() {
  let canvas = createCanvas(1760, 800);
  canvas.position(10, 10);

  someText = createP("The story begins <span style=\"color: white;\">here</span>");
  someText.position(500, 500);
  someText.style("color", "red");
  someText.style("font-size", "42pt");

  instance = new TypeIt("#type-effect", {
    strings: "Welcome, user, to the best text-based game you've ever played! Whenever your ready just click your LEFT MOUSE BUTTON and we will start your story...",
  });
  instance.go();
}

function draw() {
  background(0);
}

function mousePressed() {
  console.log("here");
  //when pressed it should change the html of the words that show up...
  instance.delete().go();
  instance.type("Testing this out...");
  instance.go();
}

