var particles = []
var plinkos = []
var divisions = []
var divsionHeight = 300
var ground
function setup() {
  createCanvas(480, 800);
  
  ground = new Ground(240, height,480,20)
  for(var k = 0; k <=width; k = k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight)); 
  }
for(var j = 40; j <=width; j = j + 50){
  plinkos.push(new Plinko (j,75));
}
for(var j = 15; j <= width - 10; j = j+50){
  plinkos.push(new Plinko (j,175))
}
for(var j = 10; j <= width - 20; j = j+50){
  plinkos.push(new Plinko (j,275))
}
for(var j = 5; j <= width - 30; j = j+50){
  plinkos.push(new Plinko (j,375))
}
if(frameCount%90 === 0){
  particles.push(newParticle(random(width/2-10,width/2 + 10),10,10));
}

for (var j = 0; j < particles.length; j++){
  particles[j].display();
}
for(var k = 0; k< divisions.length; k++){
  divisions[k].display();
}
}

function draw() {
  background(255,255,255);  
  
  particles.display();
  plinkos.display();
  divisions.display();
  ground.display();
  drawSprites();
}