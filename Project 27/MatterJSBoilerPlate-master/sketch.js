const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

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

    ball1 = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball1);
	ball2 = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball2);
	ball3 = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball3);
	ball4 = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball4);
	ball5 = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball5)


 

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(200,20,300,20);
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