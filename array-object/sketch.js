// Arrays and Object Notation Assignment
// Syhon Rylott
// Oct 8, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cellSize;
let selectedBeverage = "water";


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
  
  noLoop(); //causes one blue circle to to be drawn in the top left corner, instead of all circles being brown (chocolate milk). The solution I feel is making all the states for the beverages so that noLoop() can be removed.

  console.log(window.innerWidth);

  graphDraw();

}


function graphDraw() {
  //let characterXChange = cellSize/2;
  for(let y = 0; y < 8; y++) {
    for(let x = 0; x < 16; x++) {
      if (y === 0) {
        fill("orange");
        stroke("white");
        square(x * cellSize, y * cellSize, cellSize);
        
        displayBeverageSelection(x, y);

      }
      else {
        fill("green");
        stroke("black");
        square(x * cellSize, y * cellSize, cellSize);
      }
    }
  }
}


function displayBeverageSelection(x, y) {
  // -added: figuring out centering of circle characters  --- //--characterXChange * x + 50
  if (selectedBeverage === "water") {
    fill(0, 150, 255);
    rect(x * cellSize + 30, cellSize/2 - 35, 40, 70); // last here: I think I may add a rect on top of the first rect to make the beverage look not entirely full
    circle(x * cellSize + 50, cellSize/2, 20);
    //characterXChange = cellSize;
    selectedBeverage = "chocolate milk";
  }
  
  else if (selectedBeverage === "chocolate milk") {
    fill("brown");
    rect(x * cellSize + 30, cellSize/2 - 35, 40, 70);
    circle(x * cellSize + 50, cellSize/2, 20);
    selectedBeverage = "lemonade";
  }
        
  else if (selectedBeverage === "lemonade") {
    fill("yellow");
    rect(x * cellSize + 30, cellSize/2 - 35, 40, 70);
    circle(x * cellSize + 50, cellSize/2, 20);
    selectedBeverage = "ice tea";
  }

  else {
    fill("orange");
    circle(x * cellSize + 50, cellSize/2, 20);
  }

  //last here: to continue the beverage states
        
}


// function displaySelectedBeverage() {
//   circle(x * cellSize + 50, cellSize/2, 20);
// }


// function characterPlacement() {

// }