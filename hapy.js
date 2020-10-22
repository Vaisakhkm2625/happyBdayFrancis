
const heart = [];
let a = 0;
let t =0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(0);
  translate(width/2, height/2);

  stroke(255);
  strokeWeight(2);
  fill(150, 0, 100);
  beginShape();
  for (let v of heart) {
    vertex(v.x, v.y);
  }
  endShape();

  const r = height/40;
  const x = r * 16 * pow(sin(a), 3);
  const y = -r*(13 * cos(a) - 5*cos(2*a) - 2*cos(3*a)- cos(4*a));
  heart.push(createVector(x, y));

  fill(255);
  textAlign(CENTER);
  textSize(t);
  text("happy birthday Arun",0,0);
  textSize(10);
  text(' X = 16 * '+r+' * sin('+a+') ^ 3'   ,width/2-100,height/2-20);
  text('Y = -'+r+'*(13 * cos('+a+') - 5*cos(2*'+a+') - 2*cos(3*'+a+')- cos(4*'+a+'))',width/2-100,height/2-10);
  
  // So that it stops
  if (a > TWO_PI) {
    noLoop();
  }
  t += 0.8;
  a += 0.1;
}