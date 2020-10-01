

function setup() {
  createCanvas(400,400);
}

function draw() {
  angleMode(DEGREES);
  background(0); 
  translate(200,200);
  rotate(-90)

   hr = hour();
   mn = minute();
   sc = second();

  console.log(hr);

  hrAngle = map(hr%12,0,60,0,360);
  mnAngle = map(mn,0,60,0,360); 
  scAngle = map(sc,0,60,0,360);

 // translate(hr,hr);
 push()
 rotate(hrAngle)
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  noFill();
  stroke(255,0,0);
  arc(0,0,260,260,0,hrAngle);

  push()
 rotate(mnAngle)
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  
  stroke(0,255,0);
  noFill();
  arc(0,0,280,280,0,mnAngle);

  push()
 rotate(scAngle)
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,70,0);
  pop();
  
  stroke(0,0,255);
  noFill();
  arc(0,0,300,300,0,scAngle);
  drawSprites();
}