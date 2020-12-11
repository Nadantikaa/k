var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,paper1,trashCan1,trashCan2,trashCan3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;




	Engine.run(engine);
	paper1 = new Paper(100,200,30,30);
	ground = new Ground(800,690,1600,20);
	Dustbin1= new Dustbin(1550,590,20,180);
	Dustbin2 = new Dustbin(1400,670,280,20);
	Dustbin3= new Dustbin(1250,590,20,180);
	keyPressed();
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground.display();
  Dustbin1.display();
  Dustbin2.display();
  Dustbin3.display();

 

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:200,y:200});
	}
}


