var ground, paper, dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{
	paper_image.loadImage('paper.png')
}

function setup() {
	createCanvas(1700, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	
	World.add(world);
	

	//Create a Ground
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.x= paper.position.x 
  paper.y= paper.position.y 
  drawSprites();
  line1.display(); 
  line2.display(); 
  line3.display(); 
  paper.display();
  
}


