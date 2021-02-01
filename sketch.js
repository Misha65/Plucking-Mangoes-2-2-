
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
   stone=new Stone(180,400,50)
  mango1=new mango(1100,100,30);
  mango2=new mango(1150,120,30);
  mango3=new mango(1100,180,30);
  mango4=new mango(900,170,30);
  mango5=new mango(970,120,30);
	slingshot = new Slingshot(stone.body,{x:200,y:400});
  //  stone=
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  Engine.update(engine);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
 slingshot.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display()
  groundObject.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){

    slingshot.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;
  
var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

if(distance <=((lmango.r)+(lstone.r))) {
Matter.Body.setStatic(lmango.body,false)
}
}