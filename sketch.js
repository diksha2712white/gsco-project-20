var car;
var wall;
var deformation;
var speed, weight;
var gameState="play";

function setup() {
  createCanvas(1600,400);

  speed=random(55, 99);
  weight=random(400, 1500);
  
  wall = createSprite(1500, 200, 60, height/2);
car = createSprite(50, 200, 50, 50);
car.shapeColor="white";
car.velocityX=speed;


}

function draw() {
  background("black");  

if(wall.x-car.x < (car.width+wall.width)/2) {
car.velocityX=0;
deformation=0.5*weight*speed*speed/22500;
if(deformation>180) {
car.shapeColor="red";
}
if(deformation<180 && deformation>100) {
car.shapeColor="yellow";
}
if(deformation<100) {
car.shapeColor="green";
}
}

  drawSprites();
}