// light's out
// Hayden Wineera
// 11/17/2021

// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let someText;
let instance;
let stringList = ["Hey this should work, if it doesn't, then that sucks... I guess", "", "", "", ""];
let sringlist1 = ["", "", ""];
let i = 0;

function setup() {
  let canvas = createCanvas(1760, 800);
  canvas.position(10, 10);

  someText = createP("The story begins <span style=\"color: white;\">here</span>");
  someText.position(500, 500);
  someText.style("color", "red");
  someText.style("font-size", "42pt");

  instance = new TypeIt("#type-effect", {
    strings: "Welcome, user, to the best text-based game you've ever played! Whenever your ready just click your LEFT MOUSE BUTTON and we will start your story... Im going to just keep writing to test out the scrolling feature of this library so yeah, i'm going to keep writing and writing, how was your day? how are the kids? how is ife welp i don't actually care looks like im done talking. AAHHH everything's on fire we are all gonna die ahhhhh im on fire and talking about fire what else should i talk about i care about spelling mistakes.",
    speed: 2,
  });
  instance.go();
}

function draw() {
  background(0);
}

function mousePressed() {
  console.log("here");
  //when pressed it should change the words that show up...
  newType();
  i += 1;
}

function newType() {
  instance = new TypeIt("#type-effect", {
    string: "hello there",
    speed: 2,
  });
  instance.delete.go();
}