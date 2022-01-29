var ball

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,leftWall,rightWall

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(650,680,1300,10)
	leftWall = new Ground(950,615,15,120)
	rightWall = new Ground(1130,615,15,120)

	var ball_options = {
		restitution: 0.3,
		density: 1.2
	  }
	  ball = Bodies.circle(200,100,20,ball_options)
	  World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show()
  leftWall.show()
  rightWall.show()
  
  push()
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  pop()

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:80,y:-80})
	}
}

