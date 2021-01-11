const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var backGround,backGroundImage,person,personImage,garbage,slingshot;
var engine,world;
var gameState="clean";
function preload(){
  backGroundImage=loadImage("water.gif");
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  
  createCanvas(1200,800);
  //garbage=new Garbage(200,200,30)



 
  person=new Person(1000,500);
 
 garbage=new Garbage(1000,500,50,50); 
 

 //slingshot = new Slingshot(garbage.body,{x:person.body.position.x, y:person.body.position.y});

}

function draw() {
    background(backGroundImage);  
Engine.update(engine);
 person.display();
//slingshot.display();
garbage.display();
  drawSprites();
}
