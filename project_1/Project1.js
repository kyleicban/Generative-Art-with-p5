function setup() {
    createCanvas(400, 400);
    frameRate(5);
}
  
function draw() {
    background(218, 240, 239, 80);

    noStroke();
    for (let i = -20; i < 410; i = i + 20) {
        for (let j = 1; j < 410; j = j * 1.15) {
        let color = random() * 3.5;
        if(color < 1) {
            fill(122, 197, 240, 75);
        }
        else if(color >= 1 && color < 2) {
            fill(50, 104, 230, 75);
        }
        else if(color >= 2 && color < 3) {
            fill(0, 0, 255, 75);
        }
        else {
            fill(252, 236, 0, 30);
        }

        let radius = 5 + (random() * 15);
        
        ellipse(i + (random() * 40), 410 - j + (random() * 40), radius, radius);
        }
    }
}