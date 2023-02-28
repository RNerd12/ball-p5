var x = 100;
var y = 100;
var spdx = 10;
var spdy = 10;
var fx = 1;
var fy = 1;
function setup() {
  createCanvas(windowWidth, windowHeight-1);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(1);
  noFill();
  ellipse(x,y,100,100);
  spdx = round(map(mouseX,0,width,0,10));
  spdy = round(map(mouseY,0,height,0,10));
  x+=spdx*fx;
  y+=spdy*fy;
  if(x > width-50 || x < 50)
    fx = -fx;
  if(y > height-50 || y < 50)
    fy = -fy
}
