const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground,hammer,stone;
var balls,iron,sand1,sand2,sand3,sand4;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(600,height,1200,30);
hammer=new Hammer(200,500,70,30);
stone=new Stone(300,670,60,60);
balls=new Ball(100,200);
iron=new Iron(500,680,60,30);
sand1=new Sand(400,690);
sand2=new Sand(100,690);
sand3=new Sand(600,690);
sand4=new Sand(450,690);
	Engine.run(engine);
  
}


function draw() {


  rectMode(CENTER);
  background(100)
ground.display();
  hammer.display();
stone.display();
iron.display();
ellipseMode(CENTER);
balls.display();
sand1.display();
sand2.display();
sand3.display();
sand4.display();


}



