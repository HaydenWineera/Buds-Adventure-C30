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
    speed: 2,
  });
  instance.go();
}

function draw() {
  background(0);
}

function mousePressed() {
  instance.reset();
  instance.delete();
  instance = new TypeIt("#type-effect", {
    speed: 70,
  })
    .type("You are a detective, Marcus Maclain. And you are currently driving to a crime scene.")
    .pause(500)
    .type(" All you know is that you recieved a very urgent call from your collegues.")
    .pause(500)
    .type("\n\"What is going on?\" You think to yourself\n")
    .go();
  //when pressed it should change the words that show up...
}
