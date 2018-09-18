function drawGrid() {
  background(245);
  textSize(14);
  strokeWeight(1);
  stroke(140);
  fill(0);
  tx = -width;
  ty = -height;

  for (var x=tx; x < width; tx = 0) {
		line(x, -height, x, height);
    text(x/spacing, x+1, 12);
    x = x + spacing;
	}
	for (var y=ty; y < height; ty = 0) {
		line(-width, y, width, y);
    text(-y/spacing, 1, y+12);
    y = y + spacing;
	}
}
function drawPoints() {
  for(let p = 0; p < points.length; p++) {
    points[p].draw();
  }
}

class Point {
  constructor(x,y) {
    this.x = x*spacing;
    this.y = y*spacing;
  }
  draw() {
    fill(245);
    stroke(27,93,198);
    strokeWeight(3);
    ellipse(this.x,this.y, pointsize, pointsize);
  }
  getX() {
    return this.x/spacing;
  }
  getY() {
    return -this.y/spacing;
  }
}
var points = [];

function mousePressed() {
  let xpos, ypos;
  if(isShift) {
    xpos = Math.round((mouseX-transx)/spacing * 4)/4;
    ypos = Math.round((mouseY-transy)/spacing * 4)/4;
  } else {
    xpos = Math.round((mouseX-transx)/spacing); //Translates to grid space
    ypos = Math.round((mouseY-transy)/spacing);
  }
  createPoint(xpos, ypos);
}

function validatePoint(x,y) {
  for(let p = 0; p < points.length; p++) {
    if(points[p].x == x*spacing && points[p].y == y*spacing) {
      console.log("NOPE!");
      return true;
    }
  }
  return false;
}

function createPoint(x,y) {
  if(!validatePoint(x,y))
    points.push(new Point(x,y));
}
function addPoint(x,y) { //ONLY FOR INTERFACE, USES REVERSE Y-AXIS TO COMPENSATE FOR DRAW LOCATION
  createPoint(x,-y); //NOT THE SAME CHANGES TO NEGATIVE Y
}
function connectPoints() {
  for(let i = 0; i < points.length; i++) {
    if(points[i+1] != null)
      drawLine(points[i].x,points[i].y,points[i+1].x,points[i+1].y);
    else
      break;
  }
}

function drawLine(x1, y1, x2, y2) {
  stroke(120);
  strokeWeight(3);
  line(x1,y1,x2,y2);
}