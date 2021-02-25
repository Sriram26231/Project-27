const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ball1, ball2, ball3, ball4, ball5;
var rope1, rope2, rope3, rope4, rope5;
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

    ball1 = Bodies.circle(100,140,20, ball_options);
    World.add(world,ball1);
	ball2 = Bodies.circle(150,180,20, ball_options);
    World.add(world,ball2);
	ball3 = Bodies.circle(200,50,20, ball_options);
    World.add(world,ball3);
	ball4 = Bodies.circle(250,310,20, ball_options);
    World.add(world,ball4);
	ball5 = Bodies.circle(300,10,20, ball_options);
    World.add(world,ball5)
    roof = Bodies.rectangle(200,20,300,20)

    //rope1 = new Rope(ball1.body,roof.body, 23, 0)


 

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(roof.position.x,roof.position.y,300,20);
	ellipseMode(RADIUS);
    ellipse(ball1.position.x, ball1.position.y, 20, 20);
	ellipseMode(RADIUS);
    ellipse(ball2.position.x, ball2.position.y, 20, 20);
	ellipseMode(RADIUS);
    ellipse(ball3.position.x, ball3.position.y, 20, 20);
	ellipseMode(RADIUS);
    ellipse(ball4.position.x, ball4.position.y, 20, 20);
	ellipseMode(RADIUS);
    ellipse(ball5.position.x, ball5.position.y, 20, 20);

    

}