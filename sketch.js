function setup() {
  createCanvas(windowWidth,windowHeight );
}

function draw() {
  translate(height/2,width/2);
  stroke(255);
  background(0);
  beginShape();
  let r= 5.00;
  for(a=0; a<=TWO_PI ; a+=0.01){
  let x=r*16*pow(sin(a),3);
  let y	=-r*(13*cos(a)-5*cos(2*a)-2*cos(3*a)-cos(4*a));
    vertex(x,y);
  }
  endShape();
 fill(255,255,255);
}