// Grid-Based Game
// Syhon Rylott
// Oct 28th, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const CELL_SIZE = 25;
let grid;
let cols;
let rows;
let lastTimeSwitched = 0;
let waitTime = 2000;


function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.floor(width/2/CELL_SIZE);
  rows = Math.floor(height/CELL_SIZE);
  grid = generateRandomGrid(cols, rows);
}


function draw() {
  //noLoop();
  background(220);
  displayGrid();
  gameTimer();
}


//
function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      // if (grid[y][x] === 0) {
      //   fill("black");
      // }
      // else if (grid[y][x] === 1) {
      //   fill("white");
      // }

      let r = random(255);
      let g = random(255);
      let b = random(255);

      fill(r, g, b);

      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);

      // if (y < windowHeight/2) {
      //   square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
      // }

      // for building the right side of the window
      if (x > width/2) {
        fill("black");
        square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
      }
    }
  }
}


//
function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for (y = 0; y < rows; y++) {
    newGrid.push([]);
    for (x = 0; x < cols; x++) {
      // toss in a 0 or 1 randomly
      // if (random(100) < 50) {
      //   newGrid[y].push(0);
      // }
      // else {
      //   newGrid[y].push(1);
      // }
    }
  }
  return newGrid;
}


//
function gameTimer() {
  if (millis() > lastTimeSwitched + waitTime) {
    displayGrid();
  }
}


// Want to look at millis demo on p5js to see how to use millis to display a randomly colored grid.
// Also want to split the game board in half with maybe the height.