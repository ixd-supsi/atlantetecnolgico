var x = 0;
var y = 0;
var vel = 2;

function setup() {
  createCanvas(windowWidth, 650);
  fill(255);
}

function draw() {
  text(key, x, y); // Display last key pressed
  textSize(25);
  textFont('Helvetica');
}
function keyPressed() {
  x = random (0, width);
  y = random (0, height);
}

