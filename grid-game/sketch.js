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
let timerState = "five";
let lastTimeTimerSwitched = 0;
let lastTimeGridSwitched = 0;
let timerWaitTime = 1000;
let gameWaitTime = 5000;
let timerNumbers = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.floor(width/2/CELL_SIZE);
  rows = Math.floor(height/CELL_SIZE);
  grid = generateRandomGrid(cols, rows);
  for (let i = 0; i < 6; i++) {
    drawTimerNumber();
  }
}


function draw() {
  background(0);
  timerChanges();
  displayGrid();
  displayTextTest();
}


//
function displayTextTest() {
  textSize(windowHeight/4);
  fill("white");
  text("5", 1100, 450);
}


function drawTimerNumber() {
  let number = {
    x: 1100,
    y: 450,
  };
  timerNumbers.push(number);
}


//
function timerChanges() {
  if (millis() > lastTimeGridSwitched + gameWaitTime) {
    grid = generateRandomGrid(cols, rows);
    lastTimeGridSwitched = millis();
  }

  if (millis() > lastTimeTimerSwitched + timerWaitTime) {
    textSize(windowWidth/4);
    fill("white");
    text(timerStateCheck());

    // for (let number of timerNumbers) {
    //   if (timerState === "five") {
    //     text("4", number.x, number.y); //use number y and x, maybe look at how it is done in the array-object project
    //     timerState = "four";
    //   }
  
    //   else if (timerState === "four") {
    //     text("3", number.x, number.y);
    //     timerState = "three";
    //   }
  
    //   else if (timerState === "three") {
    //     text("2", number.x, number.y);
    //     timerState = "two";
    //   }
  
    //   else if (timerState === "two") {
    //     text("1", number.x, number.y);
    //     timerState = "one";
    //   }
  
    //   else if (timerState === "one") {
    //     text("0", number.x, number.y);
    //     timerState = "zero";
    //   }
  
    //   else if (timerState === "zero") {
    //     text("5", number.x, number.y);
    //     timerState = "five";
    //   }
    // }

    lastTimeTimerSwitched = millis();
  }
}


function timerStateCheck() {
  let timerTextDisplay;
  if (timerState === "five") {
    //text("4", number.x, number.y);
    timerState = "four";
    timerTextDisplay = ["4", 1100, 450];
    //return timerTextDisplay;
  }

  else if (timerState === "four") {
    //text("3", number.x, number.y);
    timerState = "three";
    timerTextDisplay = ["3", 1100, 450];
    //return timerTextDisplay;
  }

  else if (timerState === "three") {
    //text("2", number.x, number.y);
    timerState = "two";
    timerTextDisplay = ["2", 1100, 450];
    //return timerTextDisplay;
  }

  else if (timerState === "two") {
    //text("1", number.x, number.y);
    timerState = "one";
    timerTextDisplay = ["1", 1100, 450];
    //return timerTextDisplay;
  }

  else if (timerState === "one") {
    //text("0", number.x, number.y);
    timerState = "zero";
    timerTextDisplay = ["0", 1100, 450];
    //return timerTextDisplay;
  }

  else if (timerState === "zero") {
    //text("5", number.x, number.y);
    timerState = "five";
    timerTextDisplay = ["5", 1100, 450];
    //return timerTextDisplay;
  }
  //return timerTextDisplay;
}


//
function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 1) {
        fill("orange");
      }

      else if (grid[y][x] === 2) {
        fill("yellow");
      }

      else if (grid[y][x] === 3) {
        fill("green");
      }

      else if (grid[y][x] === 4) {
        fill("blue");
      }

      else if (grid[y][x] === 5) {
        fill("purple");
      }

      else if (grid[y][x] === 6) {
        fill("white");
      }

      else if (grid[y][x] === 7) {
        fill("black");
      }

      else if (grid[y][x] === 8) {
        fill("brown");
      }

      else if (grid[y][x] === 9) {
        fill(70, 70, 50);
      }

      else {
        fill("pink");
      }

      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
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
      if (random(100) <= 10) {
        newGrid[y].push(1);
      }

      else if (random(100) > 10 && random(100) <= 20) {
        newGrid[y].push(2);
      }

      else if (random(100) > 20 && random(100) <= 30) {
        newGrid[y].push(3);
      }

      else if (random(100) > 30 && random(100) <= 40) {
        newGrid[y].push(4);
      }

      else if (random(100) > 40 && random(100) <= 50) {
        newGrid[y].push(5);
      }

      else if (random(100) > 50 && random(100) <= 60) {
        newGrid[y].push(6);
      }

      else if (random(100) > 60 && random(100) <= 70) {
        newGrid[y].push(7);
      }

      else if (random(100) > 70 && random(100) <= 80) {
        newGrid[y].push(8);
      }

      else if (random(100) > 80 && random(100) <= 90) {
        newGrid[y].push(9);
      }

      else {
        newGrid[y].push(10);
      }
    }
  }
  return newGrid;
}


// Want to now display the timer numbers, maybe similar as an array from the array-object project.
// Want to also fix how the display size and other details of the number texts are displayed, for now using a text test function to display a still number.