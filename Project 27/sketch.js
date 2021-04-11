
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var b1,b2,b3,b4,b5, roof;
var r1;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,200,300,50)
	b1 = new Bob(300,400,50)
	b2 = new Bob(350,400,50)
	b3 = new Bob(400,400,50)
	b4 = new Bob(450,400,50)
	b5 = new Bob(500,400,50)
	
	r1 = new Rope(b1.body,roof.body,-100,0)
	r2 = new Rope(b2.body,roof.body,-50,0)
	r3 = new Rope(b3.body,roof.body,0,0)
	r4 = new Rope(b4.body,roof.body,50,0)
	r5 = new Rope(b5.body,roof.body,100,0)
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  roof.display();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(b1.body,b1.body.position,{x:-50,y:-45});

	}
}
