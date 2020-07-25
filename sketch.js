const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var base;
var side1;
var side2;
var dustBinImg;
var slingshot;

function preload()
{
	paperImg= loadImage("paper.png");
	dustBinImg= loadImage("dustbingreen.png")

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	//Create the Bodies Here.
	ball1= new Paper(200,100,20,20);
	
	ball1.scale=10;

	
	ground = new Ground(400,650,800,20)
	
	base=createSprite(600,500,200,20);
	base.shapeColor=color(255);

	base.addImage(dustBinImg);

	base.scale=0.8;


	side1=createSprite(490,560,20,160);
	side1.shapeColor=color(255);

	side2=createSprite(710,560,20,160);
	side2.shapeColor=color(255);

	base = Bodies.rectangle(600,630,200,20,{isStatic:true} );
	World.add(world, base);
 
	side1 = Bodies.rectangle(490,560,20,160,{isStatic:true} );
	World.add(world, side1);

	side2 = Bodies.rectangle(710,560,20,160,{isStatic:true} );
	World.add(world, side2);

	slingshot = new SlingShot(ball1.body,{x:200,y:300});
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ball1.display();
 ground.display();
}

function keyPressed(){
if (keyCode === UP_ARROW){

Matter.Body.applyForce(ball1.body,ball1.body.position,{x:3,y:-10});

}

}

function mouseDragged(){
	//if (gameState!=="launched"){
		Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
	//}
  }
  
  function mouseReleased(){
	slingshot.fly();
  
  
  }
  


