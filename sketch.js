const Engine=Matter.Engine;
const World =Matter.World;
const Bodies = Matter.Bodies;

var engine,world;




function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var options = {
  isStatic:true
  }
 ground=Bodies.rectangle(250,390,800,20,options);
 World.add(world,ground);  
 
var ball_options={
  restitution:1.0
}

 ball=Bodies.circle(100,100,20,ball_options);
 World.add(world,ball);

}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);








}


