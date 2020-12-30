function setup() { 
    createCanvas(500, 500);
  } 
  
  function draw() { 
    background(2, 138, 153);
    push();
    noStroke();
    fill(79, 48, 15);
    rect(0,0.8*height,width,height);
    pop();
    fill(78, 148, 25,95);
    push();
    translate(width/2,height);
    stroke(0,0,0,90);
    strokeWeight(3);
    branch(200);
    pop();
    push();
    translate(width/2, height/2);
    strokeWeight(0.2);
    leaves(0,0,300);
    pop();
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
  
  function leaves(x,y,size) {
    arc(x,y,size,size,-21*PI/20,PI/20);
    if(size > 50) {
      let w = cos(PI/20) * size/2;
      let h = sin(PI/20) * size/2;
      push();
      translate(w/1.5,h);
      leaves(0,0,0.8*size);
      pop();
      push();
      translate(-w/1.5,h);
      leaves(0,0,0.8*size);
      pop();
    }
  }