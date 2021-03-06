var car;
var wall;
speed=random(55,90);
weight=random(400,1500);

function setup() {
  createCanvas(800,400);
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  wall=createSprite(1500,200,60,height/2);
}

function draw() {
  background(255,255,255);
  if(wall.x=car.x<(car.width+wall.width)/2){
      car.velocityX=0;
      var deformation=0.5 * width * speed* speed/22509;
      if(deformation>180){
          car.shapeColor=color(225,0,0);
        }
      if(deformation<180 && deformation<100){
          car.shapecolor=color(230,230,0);
      }
      if(deformation<100){
        car.shapecolor=color(0,225,0);
    }
  }  
  drawSprites();
}