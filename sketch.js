const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var engine, world

function preload() {
//preload the images here
 back=loadImage("GamingBackground.png")
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  hero1=new hero(400,200,150,150)
  rope1=new Rope(hero1.body,{x:300,y:10})
  box1=new box(500,300,40,40)
  box2=new box(500,300,40,40)
  box3=new box(500,300,40,40)
  box4=new box(500,300,40,40)
  box5=new box(500,300,40,40)
  box6=new box(600,300,40,40)
  box7=new box(600,300,40,40)
  box8=new box(600,300,40,40)
  box9=new box(600,300,40,40)
  box10=new box(600,300,40,40)
  box11=new box(600,300,40,40)
  box12=new box(600,300,40,40)
  ground1=new ground(400,380,800,10)

}

function draw() {
  rope1.display()
  background(back);
  Engine.update(engine)  
  hero1.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  ground1.display()
  

}
function mouseDragged(){
  Matter.Body.setPosition(hero1.body,{x:mouseX,y:mouseY})
}

