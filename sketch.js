const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var engine,world;
var snow1
var bgImage;
var snows = [];
function preload(){
  bgImage = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(800,400);
  // createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  
  Engine.run(engine);
}

function draw() {

  background(bgImage);
  // image(bgImage,width/2, height/2, width, height);  
  for(i = 0;i <= 200; i++){
    snow1 = new Snow(random(0,800), 0, 10)
    snows.push(snow1);
    }
  for(i = 0; i< snows.length; i++){
    snows[i].display();
  }
  
}