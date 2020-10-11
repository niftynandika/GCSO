//create the variables
var car, wall;
var speed, weight;

function setup() {
  var wide = 1600; var height = 400;
  //canvas
  createCanvas(wide,height);

  //random numbers for speed and weight
  speed = random(55,90);
  weight = random(400,1500);

  //assign sprite for car and wall
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, 60, height/2);
  wall.shapeColor = color(80,80,80);
  car.velocityX = speed;
}

function draw() {
  background(40,50,60);

  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight *speed *speed/22509;
    if(deformation>180){
      car.shapeColor = color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor = color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}