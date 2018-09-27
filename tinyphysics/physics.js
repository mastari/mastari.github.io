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
}


function getTotalDistance() {
  let sum = 0;
  for(let i = 0; i < points.length; i++) {
    if(points[i+1] != null)
      sum += Math.abs(points[i+1].getY() - points[i].getY()); 
    else {
      break;
    }
  }
  return sum;
}
function getAverageVelocity() {
  let dsum = 0;
  if(points.length > 1) {
    for(let i = 0; i < points.length; i++) {
      if(points[i+1] != null)
        dsum += points[i+1].getY() - points[i].getY();
    }
    return dsum / (points[points.length-1].getX() - points[0].getX());
  }
}
function getAverageSpeed() {
  if(points.length > 1)
    return getTotalDistance() / (points[points.length-1].getX() - points[0].getX());
}
function instVelocity() {
  let t = mouseX-transx;
  if(points.length > 1)
    for(let i = 0; i < points.length; i++) {
      if(points[i+1] != null)
        if(points[i].x < t && points[i+1].x > t) {
          return getVelocity(points[i+1],points[i]);
        }
    }
  return 0;
}
function getVelocity(f,i) {
  return (f.getY() - i.getY())/(f.getX() - i.getX());
}


function getTotalDistance() {
  let sum = 0;
  for(let i = 0; i < points.length; i++) {
    if(points[i+1] != null)
      sum += Math.abs(points[i+1].getY() - points[i].getY()); 
    else {
      break;
    }
  }
  return sum;
}
function getAverageVelocity() {
  let dsum = 0;
  if(points.length > 1) {
    for(let i = 0; i < points.length; i++) {
      if(points[i+1] != null)
        dsum += points[i+1].getY() - points[i].getY();
    }
    return dsum / (points[points.length-1].getX() - points[0].getX());
  }
}
function getAverageSpeed() {
  if(points.length > 1)
    return getTotalDistance() / (points[points.length-1].getX() - points[0].getX());
}