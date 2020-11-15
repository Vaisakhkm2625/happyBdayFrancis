


const heart = [];
let a = 0;
let t =0,dt;
var r;



class fallball{
  xpos;
  ypos;
  yvel;
  yacc;
  sise;
  constructor(){
    
    this.setu();
  } 
  setu(){
    this.xpos = random(-width/2,width/2);
    this.ypos = random(-height/2,0);
    this.yvel = 0;
    this.yacc = 0.1;
    this.sise = random(10,100);
  }
  show(){
    fill(color(random(250),random(250),random(250)));
    circle(this.xpos,this.ypos,this.sise);
  }
  nextstep(){
    this.yvel +=this.yacc; 
    this.ypos +=this.yvel;
this.show();
    if(height/2<(this.ypos+this.sise)){
      this.setu();
    } 
  }

}


let balls = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
if(width<height){ 
     r = width/40;
    dt = 0.2}
   else{
     r = height/40
    dt =0.32}

    for(var i=0;i<4;i++){
      balls[i] = new fallball();
    }



}


function draw() {
  background(color(100,100,255));
  translate(width/2, height/2);


  for(var i=0;i<4;i++){
    balls[i].nextstep();
  }

  
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
   text("Best Wishes",0,-50);
  text("Lakshmi Priya maam! ",0,dt*50);
  textSize(10);


  
  
 
  if (a > TWO_PI) {
    noLoop();
  }
  t += dt;
  a += 0.04;
 // delay(100);
}
