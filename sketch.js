var spacing = 50;
var pointsize = 10;
var transx = 10;
var transy = 500;
var isShift = false;

function keyPressed() {
  if(keyCode == SHIFT) {
    isShift = true;
  }
}

function keyReleased() {
  if(keyCode == SHIFT) {
    isShift = false;
  }
}

function setup() {
  createCanvas(1800,1000)
}
function draw() {
  translate(transx,transy);
  drawGrid();
  connectPoints();
  drawPoints();
  push();
  drawInformation();
}

function drawInformation() {
  translate(-transx,-transy-300);
  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(width-220,height-120,220,120);
  strokeWeight(1);
  stroke(140);
  fill(0);
  text("Total distance: " + Math.round(getTotalDistance()*1000)/1000,width-200,height-90);
  text("Average Velocity: " + Math.round(getAverageVelocity()*1000)/1000 + " m/s",width-200,height-70);
  text("Average Speed: " + Math.round(getAverageSpeed() * 1000)/1000 + " m",width-200,height-50);
  pop();
  translate(-transx,-transy);
  textSize(18);
  fill(0);
  strokeWeight(0);
  text("Inst. velocity: " + Math.round(instVelocity()*1000)/1000 + "m/s",mouseX+15,mouseY-15);
}