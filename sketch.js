var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var BB1,BB2,BB3;
var B1

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
 	World.add(world, ground);
BB1 = Bodies.rectangle(400,650,200,20,{isStatic:false,});
World.add(world, BB1);
B1 = createSprite(0,0,200,10);
B1.shapeColor="red";
BB2 = Bodies.rectangle(295,660,10,100);
World.add(world,BB2);
B2 = createSprite(0,0,10,100);
B2.shapeColor = "red";
BB3 = Bodies.rectangle(495,657,10,100);
World.add(world, BB3);
B3 = createSprite(0,0,10,100);
B3.shapeColor = "red";
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
  B1.x = BB1.position.x;
  B1.y = BB1.position.y;
  
  B2.x = BB2.position.x;
  B2.y = BB2.position.y;
  B3.x = BB3.position.x;
  B3.y = BB3.position.y;


/*box1.x = boxB1.position.x;
box1.y = boxB1.position.y;
box2.x = boxB2.position.x;
box2.y = boxB2.position.y;
box3.x = boxB3.position.x;
box3.y = boxB3.position.y;
**/



  keyPressed();
  
 
  
  drawSprites();
 
}

function keyPressed() {
 if (keyDown("DOWN_ARROW")) {
	 Matter.Body.setStatic(packageBody,false);
    

    
  }
}



