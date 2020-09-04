var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var particles = [];
function preload(){
    
}

function setup(){
    engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Drop(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Drop(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new (j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Drop(j,375));
    }
   umbrella=new Umbrela(50,50,20)
   man=createSprite(50,30,20,100)
    
}

function draw(){
createCanvas(400,400);
    
}   

