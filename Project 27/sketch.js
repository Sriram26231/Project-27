const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var b1,b2,b3,b4,b5;
var r1,r2,r3,r4,r5; 
var roof;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

	var ball_options ={
        restitution: 1.0
    }
    b1 = new Bob(300,400,50)
	b2 = new Bob(350,400,50)
	b3 = new Bob(400,400,50)
	b4 = new Bob(450,400,50)
	b5 = new Bob(500,400,50)
	roof = new Roof(400,200,300,50)
	
	r1 = new Rope(b1.body,roof.body,-100,0)
	r2 = new Rope(b2.body,roof.body,-50,0)
	r3 = new Rope(b3.body,roof.body,0,0)
	r4 = new Rope(b4.body,roof.body,50,0)
	r5 = new Rope(b5.body,roof.body,100,0)


 

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
   
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