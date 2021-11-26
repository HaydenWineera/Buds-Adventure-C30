// light's out
// Hayden Wineera
// 11/17/2021

// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let someText;

function setup() {
  let canvas = createCanvas(1760, 600);
  canvas.position(10, 30);

  someText = createP("Some HTML string");
  someText.position(500, 500);
  someText.style("color", "red");
  someText.style("font-size", "42pt");
}

function draw() {
  background(0);
  circle(mouseX, mouseY, 100);
}

function mousePressed() {
  someText.html("What <em>you<em> change me"); 
}