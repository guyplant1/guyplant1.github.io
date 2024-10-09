// Arrays and Object Notation Assignment
// Syhon Rylott
// Oct 8, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(220);
// }

let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if(width > height) {
    cellSize = height/8;
  }
  else {
    cellSize = width/16;
  }
}

function draw() {
  background(220);
  
  console.log(window.innerWidth);

  //let characterXChange = cellSize/2;
  for(let y = 0; y < 8; y++) {
    for(let x = 0; x < 16; x++) {
      if (y === 0) {
        fill("orange");
        stroke("white");
        square(x * cellSize, y * cellSize, cellSize);
        // last here with circle -added: figuring out centering of circle characters  --- //--characterXChange * x + 50
        fill("blue");
        circle(x * cellSize + 50, cellSize/2, 20);
        //characterXChange = cellSize;
      }
      else {
        fill("green");
        stroke("black");
        square(x * cellSize, y * cellSize, cellSize);
      }
    }
  }
}

// function characterPlacement() {

// }

