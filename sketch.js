const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,tree;
var stone,boy;
var mango1,mango2,mango3;
var mango4,mango5,mango6;

function preload()
{
	//boy = loadImage("sprites/boy.png");
    //tree = loadImage("sprites/tree.png");
}



function setup() {
	createCanvas(1000,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,600,1000,10);
	stone = new Stone(200,400,30);

	mango1 = new Mango(800,100,20);
	mango2 = new Mango(750,200,20);
	mango3 = new Mango(700,150,20);
	mango4 = new Mango(850,170,20);
	mango5 = new Mango(850,250,20);
	mango6 = new Mango(750,260,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(240);
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  drawSprites();
 
}



