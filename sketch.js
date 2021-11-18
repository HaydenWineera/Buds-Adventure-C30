// light's out
// Hayden Wineera
// 11/17/2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state;

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = "menuScreen";
}

function draw() {
  if (state === "menuScreen") {
    background(25);
  }
}