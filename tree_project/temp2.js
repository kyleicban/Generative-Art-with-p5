function setup() { 
    createCanvas(300, 300);
  } 
  
  function draw() { 
    background(220);
    translate(width/2, height/2);
    leaves(0,0,200);
  }
  
  function leaves(x,y,size) {
    arc(x,y,size,size,-21*PI/20,PI/20);
    if(size > 50) {
      let w = cos(PI/20) * size/2;
      let h = sin(PI/20) * size/2;
      push();
      translate(w,h);
      leaves(0,0,4*size/5);
      pop();
      push();
      translate(-w,h);
      leaves(0,0,4*size/5);
      pop();
    }
  }