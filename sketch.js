
// Setup code goes here
function setup() {
  createCanvas(600, 400);
  textSize(40);
  textAlign(CENTER);
}


// Draw code goes here
function draw() {
  background(0);


  fill(255);
  text("Hello, world!", width / 2, height / 2);

  // A rectangle
  rect(40, 120, 120, 40);
  // A circle
  ellipse(240, 240, 80, 80);
  // A triangle
  triangle(300, 100, 320, 100, 310, 80);

  // A design for a simple flower
  translate(580, 200);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(0, 30, 20, 70);
    rotate(PI / 5);
  }
}