// Traffic Light Simulator
// Syhon Rylott
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Traffic Light Starter Code
// Your Name Here
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

// let waitTimeGreen = 2000;
// let waitTimeYellow = 1000;
// let waitTimeRed = 4000;
// let lastTimeSwitched = 0;
// let lightState = "greenlight";

// function setup() {
//   createCanvas(600, 600);
// }

// function draw() {
//   background(255);
//   drawOutlineOfLights();
//   trafficLightSwitch();
// }

// function drawOutlineOfLights() {
//   //box
//   rectMode(CENTER);
//   fill(0);
//   rect(width/2, height/2, 75, 200, 10);

//   //lights
//   fill(255);
//   ellipse(width/2, height/2 - 65, 50, 50); //top
//   ellipse(width/2, height/2, 50, 50); //middle
//   ellipse(width/2, height/2 + 65, 50, 50); //bottom
// }

// function trafficLightSwitch() {
//   // if (millis() > lastTimeSwitched + waitTimeGreen) {
//   //   lightState = "yellowlight";
//   //   lastTimeSwitched = millis();
//   // }

//   if (lightState === "greenlight") {
//     fill("green");
//     ellipse(width/2, height/2 - 65, 50, 50);
//   }
//   else if (lightState === "yellowlight") {
//     fill("yellow");
//     ellipse(width/2, height/2, 50, 50);
//   }
//   else {
//     fill("red");
//     ellipse(width/2, height/2 + 65, 50, 50);
//   }
// }

let lightState = "green";
let lastSwitchedTime = 0;
const GREEN_LIGHT_DURATION = 3000;
const YELLOW_LIGHT_DURATION = 500;
const RED_LIGHT_DURATION = 3500;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  changeStateIfNeeded();
  displayCorrectLight();
}

function changeStateIfNeeded() { 
  if (lightState === "green" && millis() > lastSwitchedTime + GREEN_LIGHT_DURATION) {
    lightState === "yellow";
    lastSwitchedTime === millis();
  }
  else if (lightState === "yellow" && millis() > lastSwitchedTime + YELLOW_LIGHT_DURATION) {
    lightState === "red";
    lastSwitchedTime === millis();
  }
  else if (lightState === "red" && millis() > lastSwitchedTime + RED_LIGHT_DURATION) {
    lightState === "green";
    lastSwitchedTime === millis();
  }
}

function displayCorrectLight() {
  if (lightState === "green") {
    fill("green");
    ellipse(width/2, height/2 + 65, 50, 50);
  }
  else if (lightState === "yellow") {
    fill("yellow");
    ellipse(width/2, height/2, 50, 50);
  }
  else if (lightState === "red") {
    fill("red");
    ellipse(width/2, height/2 - 65, 50, 50);
  }
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}