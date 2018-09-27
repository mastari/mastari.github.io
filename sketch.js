var viewX, viewY;
var isPressed = false;
var finalX=0, finalY=0;
var initialX=0, initialY=0;
var spacing = 70;
var canvasW=window.innerWidth, canvasH=window.innerHeight;
var dilateSize = 0.9;
var screenW, screenH;

function setup() {
  createCanvas(canvasW,canvasH);
  pixelDensity(1);
  viewX = (width/2)/dilateSize;
  viewY = (height/2)/dilateSize;
  screenW = window.innerWidth;
  screenH = window.innerHeight;
  for(let i = -100; i < 100; i = i +0.03) {
    let formula = sin(4*i-1.5) + 0.1*pow(i,2);
    points.push(new Point(i, formula))
  }
}
function mouseWheel(event) {
  console.log(event.delta);
  let added = event.delta/3000;
  if(dilateSize > 0.5) {
    dilateSize += added;
    viewX -= added*(mouseX/dilateSize-viewX);
    viewY -= added*(mouseY/dilateSize-viewY);
  } else if(dilateSize < 0.5 && added > 0) {
    dilateSize += added;
    viewX -= added*(mouseX/dilateSize-viewX);
    viewY -= added*(mouseY/dilateSize-viewY);
  }
  //Compensate transshift TESTTHING
}
function draw() {
  background(253);
  push(); //Grid View
  scale(dilateSize);
  translate(viewX,viewY);
  drawGrid();
  fill(255,0,0);
  strokeWeight(0);
  drag();
  click();
  strokeWeight(3);
  
  for(let i = 0; i < points.length; i++) {
    stroke(200,40,40);
    if(points[i+1] != null)
      line(points[i].x*spacing, -points[i].y*spacing, points[i+1].x*spacing, -points[i+1].y*spacing )
  }
  pop();

  push(); //UI View
  textSize(30);
  text(`f(x) = 0.1x^2 + sin(4x - 1.5)`,width-400,height-80);
  pop();
  console.log(points);
}
var points = [];

function addPoint() {
  points.push(new Point(Math.round((mouseX/dilateSize-viewX)/spacing), -Math.round((mouseY/dilateSize-viewY)/spacing)))
}
class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
}

function iss() {
  if(isPressed)
    return "yes";
  else
    return "no";
}
function drawGrid() {
  textSize(15/dilateSize);
  strokeWeight(1);
  stroke(160);
  fill(0);
  let tx = (Math.round(-canvasW/spacing)*spacing)*10;
  let ty = (Math.round(-canvasH/spacing)*spacing)*10;

  for (var x=tx; x < -tx; true) {
		line(x, tx, x, -tx);
    text(x/spacing, x+3/dilateSize, 16/dilateSize);
    x = x + spacing;
	}
	for (var y=ty; y < -ty; true) {
		line(tx, y, -tx, y);
    text(-y/spacing, 3/dilateSize, y+16/dilateSize);
    y = y + spacing;
	}
}
function mousePressed() {
  isPressed = true;
  initialX = mouseX;
  initialY = mouseY;
}
function mouseReleased() {
  isPressed = false;
}
function drag() {
  if(isPressed && mouseButton == LEFT) {
    finalX=mouseX;
    finalY=mouseY;
    let changeX = finalX - initialX;
    let changeY = finalY - initialY;
    viewX += changeX/dilateSize;
    viewY += changeY/dilateSize;
    initialX = mouseX;
    initialY = mouseY;
  }
}
var mouseReset = false;
function click() {
  if(isPressed && mouseButton == RIGHT && !mouseReset) {
    addPoint();
    mouseReset = true;
  } else if(!isPressed && mouseReset) {
    mouseReset = false;
  }
}