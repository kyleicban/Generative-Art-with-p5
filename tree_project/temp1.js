function setup() { 
    createCanvas(300, 300);
  } 
  
  function draw() { 
    background(220);
    translate(width / 2, height);
    branch(100);
  }
  
  function branch(len) {
    line(0,0,0,-len);
    translate(0, -len);
    if(len > 10) {
      push();
      rotate(PI / 3);
      branch(len / 2);
      pop();
      push();
      rotate(-PI / 3);
      branch(len / 2);
      pop();
    }
  }