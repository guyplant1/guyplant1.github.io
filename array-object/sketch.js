// Arrays and Object Notation Assignment
// Syhon Rylott
// Oct 8, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cellSize;
let selectedBeverage = "water";
let beverageX;
let beverageY;


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
  beverageX = x * cellSize + 30;
  beverageY = cellSize/2 - 35;
  // -added: figuring out centering of circle characters  --- //--characterXChange * x + 50
  if (selectedBeverage === "water") {
    fill(0, 150, 255);
    circle(x * cellSize + 50, cellSize/2, 20);
    drawBeverageCharacter(x, y);
    // last here: I think I may add a rect on top of the first rect to make the beverage look not entirely full
    selectedBeverage = "chocolate milk";
  }
  
  else if (selectedBeverage === "chocolate milk") {
    fill(120, 40, 0);
    circle(x * cellSize + 50, cellSize/2, 20);
    drawBeverageCharacter(x, y);
    selectedBeverage = "lemonade";
  }
        
  else if (selectedBeverage === "lemonade") {
    fill("yellow");
    circle(x * cellSize + 50, cellSize/2, 20);
    drawBeverageCharacter(x, y);
    selectedBeverage = "ice tea";
  }

  else if (selectedBeverage === "ice tea") {
    fill(180, 50, 0);
    circle(x * cellSize + 50, cellSize/2, 20);
    drawBeverageCharacter(x, y);
    selectedBeverage = "coffee";
  }

  else if (selectedBeverage === "coffee") {
    fill(50, 0, 0);
    circle(x * cellSize + 50, cellSize/2, 20);
    drawBeverageCharacter(x, y);
    selectedBeverage = "orange juice";
  }

  else if (selectedBeverage === "orange juice") {
    fill(250, 120, 0);
    circle(x * cellSize + 50, cellSize/2, 20);
    drawBeverageCharacter(x, y);
    selectedBeverage = "water";
  }

  else {
    fill("green");
    circle(x * cellSize + 50, cellSize/2, 20);
    drawBeverageCharacter(x, y);
  }

  //last here: to continue the beverage states
        
}


// function displaySelectedBeverage() {
//   circle(x * cellSize + 50, cellSize/2, 20);
// }


// function characterPlacement() {

// }


function drawBeverageCharacter(x, y) {
  rect(beverageX, beverageY, 40, 70);
  fill(160);
  rect(beverageX, beverageY, 40, 10);
}


function mousePressed() {
  if (mouseX > beverageX && mouseX < beverageX + w && mouseY > beverageY && mouseY < beverageY + h) {
    beverageX = mouseX - w/2;
    beverageY = mouseY - h/2;
  }
}
// Last here in working on this function, taking away noLoop() makes the beverages flash different colors, and I want to make the beverage follow the mouse, so I want to work on both of these.
// Also added/made the beverageX/Ys, using them in this function, want to look at the light demos more to make the mouse alignment within a beverage's area possible.