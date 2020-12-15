function setup() {
    createCanvas(1000, 1000);
    background('#efefef');
  }
  
  function draw() {
    if (mouseIsPressed) {
      const x = mouseX;
      const y = mouseY;
      const radius = 70;
      const npoints = max(2.1, y / 70);
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