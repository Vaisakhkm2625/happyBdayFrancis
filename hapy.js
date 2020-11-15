
const heart = [];
let a = 0;
let t =0,dt;
var r;

function setup() {
  createCanvas(windowWidth, windowHeight);
if(width<height){ 
     r = width/40;
    dt = 0.5}
   else{
     r = height/40
    dt =0.8}
}


function draw() {
  background(color(100,100,255));
  translate(width/2, height/2);

  stroke(255);
  strokeWeight(2);
  fill(150, 0, 100);
  beginShape();
  for (let v of heart) {
    vertex(v.x, v.y);
  }
  endShape();

  
  const x = r * 16 * pow(sin(a), 3);
  const y = -r*(13 * cos(a) - 5*cos(2*a) - 2*cos(3*a)- cos(4*a));
  heart.push(createVector(x, y));

  fill(255);
  textAlign(CENTER);
  textSize(t);
  text("happy wedding ",0,0);
  text("Lakshmi Priya maam! ",0,dt*5);
  // So that it stops
  if (a > TWO_PI) {
    noLoop();
  }
  t += dt;
  a += 0.1;
 // delay(100);
}
