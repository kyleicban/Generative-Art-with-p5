function setup() {
    createCanvas(1000, 1000);
  }
  
  function draw() {
    background(255, 255, 255, 45);
    if (mouseIsPressed) {
      let x = mouseX;
      let y = mouseY;
      let radius = 70;
      let npoints =  y / 70;
      polygon(x, y, radius, npoints);
    }
  }
  
  function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
      fill(255, 255, 255, 50);
    }
    endShape(CLOSE);
  }