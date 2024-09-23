// Image Demo
// Sept 23rd, 2024

let spongebob;

function preload() {
  spongebob = loadImage("Bob.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  image(spongebob, mouseX, mouseY);
}
