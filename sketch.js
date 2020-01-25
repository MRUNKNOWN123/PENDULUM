const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

      ground= new Ground(600,400,1200,20);
      box1= new  Box(600,150,200,300);
      bird1=new Bird(600,125,1,1);
      log1= new Log(500,0,25,25);
      var options=
      {
        bodyA : bird1.body,
        bodyB : log1.body,
        stiffness : 3,
        length : 225
     }
 
     var chain=Constraint.create(options);
 
     World.add(world,chain);
 
    

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    
   
    ground.display();
    box1.display();
    bird1.display();
    log1.display();
    line(bird1.body.position.x,bird1.body.position.y,log1.body.position.x,log1.body.position.y);
    
}
