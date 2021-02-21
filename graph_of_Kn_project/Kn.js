function setup() {
  createCanvas(550, 550);
  slider = createSlider(0, 50, 23, 1);
  slider.position(10, 560);
  slider.style('width', '530px');
}

function draw() {
  background(0);
  const n = slider.value();
  textSize(32);
  fill(255);
  text('n = ' + n, 10, 40);
  const angle = calcAngle(n)
  const r = 265;
  const nodeR = 8;
  const coords = [];
  
  stroke(0.5)
  translate(width/2, height/2);
  
  for (let i = 0; i < n; i++) {
    let a = i * angle - (Math.PI / 2);
    const xCoord = getX(r, a)
    const yCoord = getY(r, a);
    
    for (let j = 0; j < coords.length; j++) {
      stroke(Math.random() * 255, Math.random() * 255, Math.random() * 255, 150)
      line(xCoord, yCoord, coords[j][0], coords[j][1])
    }
    coords.push([xCoord, yCoord]);
  }
  
  fill("red")
  noStroke()
  for (let i = 0; i < n; i++) {
    ellipse(coords[i][0], coords[i][1], nodeR, nodeR);
  }
}

function calcAngle(n) {
  return(2*Math.PI / n)
}

function getX(radius, angle) {
  return(radius * Math.cos(angle))
}

function getY(radius, angle) {
  return(radius * Math.sin(angle))
}

