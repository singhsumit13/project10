var shipImg,seaImg;
var ship,sea;

function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200,200,400,400);
  sea.addImage(seaImg);
sea.scale=0.8;

  ship = createSprite(200,200,20,20);
  ship.addAnimation("running", shipImg);
ship.scale = 0.4;

  
}

function draw() {
  background("blue");
  sea.velocityX = -4;
  if(sea.x < 0){
    sea.x = width/2;
  }
 drawSprites();
}