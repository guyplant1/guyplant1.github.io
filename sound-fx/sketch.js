// Sound Effects Demo
//opengameart.org for sounds

let bgMusic;
let clickFx;

function preload() {
  bgMusic = loadSound("background-music.ogg");
  clickFx = loadSound("door.ogg");
  bgMusic.amp(0.3);
  clickFx.amp(1.0);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

function mousePressed() {
  if (!bgMusic.isPlaying()) {
    bgMusic.loop();
  }
}

function keyPressed() {
  clickFx.play();
}