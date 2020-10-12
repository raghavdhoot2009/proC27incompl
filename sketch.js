const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var roofobj;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
createCanvas(1600, 700); 
rectMode(CENTER);

engine = Engine.create();
world = engine.world;

//Create the Bodies Here.
roofobj=new roof(width/2,height/4,width/7,20); 
bobDiameter=40; 
startBobPositionX=width/2; 
startBobPositionY=height/4+500; 
bob1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 
bob2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter); 
bob3=new bob(startBobPositionX,startBobPositionY,bobDiameter); 
bob4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
bob5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
rope1 = new rope(bob1.Body,roofobj.body,bobDiameter*2,0);
rope2 = new rope(bob2.Body,roofobj.body,bobDiameter*2,0);
rope3 = new rope(bob3.Body,roofobj.body,bobDiameter*2,0);
rope4 = new rope(bob4.Body,roofobj.body,bobDiameter*2,0);
rope5 = new rope(bob5.Body,roofobj.body,bobDiameter*2,0);

var render = Render.create({
element: document.body,
engine: engine,
options: { 
width: 1600,
height: 700,
wireframes: false 
}
}
);
    
    
Engine.run(engine);
Render.run(render);

  
}


function draw() {
rectMode(CENTER);
background(0);
roofobj.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

drawSprites();
 
}

function keyPressed() { 
if (keyCode === UP_ARROW) { 
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45}); 
} 
}