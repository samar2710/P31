const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  engine = Engine.create();
    world = engine.world;
  createCanvas(400,800);
  createSprite(400, 200, 50, 50);
  ground=new Ground();
  
}

function draw() {
  
  Engine.update(engine);
  background(0,0,0);  
  for (var i =20; i<=800; i=i+150){
    divisions.push(new Division(i,300,5,200));
  }
  for (var p =20; p<=400; p=p+10){
    plinkos.push(new Plinko(p,50,10));
  }
  for (var p=30; p<=380; p=p+10){
    plinkos.push(new Plinko(p,100,10)); 

  }
  for (var p =20; p<=400; p=p+10){
    plinkos.push(new Plinko(p,150,10));
  }
  for (var p =30; p<=380; p=p+10){
    plinkos.push(new Plinko(p,200,10));
  }
  for (var p =30; p<=380; p=p+10){
    plinkos.push(new Plinko(p,250,10));
  }

  
  
  
  drawSprites();
  ground.display();
  

}
