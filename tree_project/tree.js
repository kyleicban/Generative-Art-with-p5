let angle;

function setup() { 
  createCanvas(300, 300);
} 

function draw() { 
  background(220);
  noFill();
  angle = mouseX / (50 * PI);
  translate(width / 2, height);
  branch(50);
  
}

function branch(len) {
  curve(-10 * len / 3, len / 3, 0, 0, 0, -len, 10 * len / 3, 2 * len / 3);
  translate(0, -len);
  if (len > 10) {
    push();
    rotate(angle);
    branch(len * 0.75)
    pop();
    push();
    rotate(-angle);
    branch(len * 0.75)
    pop();
    push();
    branch(len * 0.75)
    pop();
  }
  else {
    push();
    noStroke();
    fill(255, 0, 0, 75);
    ellipse(0, 0, 10, 10);
    pop();
  }
}