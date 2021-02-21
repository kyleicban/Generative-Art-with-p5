function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(255, 0, 0);
    translate(width / 2, height / 2);
    firework(0);
  }
  
  function firework(size) {
    ellipse(0, 0, size * 10, size * 10);
    if (size < 100) {
      firework(size + 10);
    }
  }