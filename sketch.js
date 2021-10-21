const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2,box3,box4,box5,box6;
var ground;
var ball;
var rope;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
box1=new Box(700,580,100,100);
box2=new Box(800,580,100,100);
box3=new Box(900,580,100,100);
box4=new Box(700,480,100,100);
box5=new Box(800,480,100,100);
box6=new Box(900,480,100,100);
ground=new Ground(600,590,1200,10);
ball=new Ball(200,100,50);
rope=new SlingShot(ball.body,{x:200,y:50});
}


function draw(){
    background(0);
    Engine.update(engine);
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
ground.display();
   ball.display();
   rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}