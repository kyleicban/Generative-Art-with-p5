function setup() {
    createCanvas(1000, 1000);
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(255);
      const R = min(100, max(50, mouseY / 5));
      console.log(R);
      const M = max(2, mouseX / 100);
      polygon(mouseX, mouseY, R, M);
    }
  }
  
  function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
      noFill();
    }
    endShape(CLOSE);
  }