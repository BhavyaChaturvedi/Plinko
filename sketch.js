const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(240, 750, 480, 20);
  line1 = new Divisions(5, 590, 20, 300);
  line2 = new Divisions(160, 590, 20, 300);
  line3 = new Divisions(305, 590, 20, 300);
  line4 = new Divisions(475, 590, 20, 300);
  ball1 = new Particles(14, 5, 20);
  ball2 = new Particles(24, 5, 20);
  ball3 = new Particles(34, 5, 20);
  ball4 = new Particles(44, 5, 20);
  ball5 = new Particles(54, 5, 20);
  ball6 = new Particles(64, 5, 20);
  ball7 = new Particles(74, 5, 20);
  ball8 = new Particles(84, 5, 20);
  ball9 = new Particles(94, 5, 20);
  ball10 = new Particles(108, 5, 20);
  ball11 = new Particles(122, 5, 20);
  ball12 = new Particles(136, 5, 20);
  ball13 = new Particles(150, 5, 20);
  ball14 = new Particles(164, 5, 20);
  ball15 = new Particles(178, 5, 20);
  ball16 = new Particles(192, 5, 20);
  ball17 = new Particles(206, 5, 20);
  ball18 = new Particles(220, 5, 20);
  ball19 = new Particles(234, 5, 20);
  ball20 = new Particles(248, 5, 20);
  ball21 = new Particles(262, 5, 20);
  ball22 = new Particles(276, 5, 20);
  ball23 = new Particles(290, 5, 20);
  ball24 = new Particles(304, 5, 20);
  ball25 = new Particles(318, 5, 20);
  ball26 = new Particles(332, 5, 20);
  ball27 = new Particles(346, 5, 20);
  ball28 = new Particles(360, 5, 20);
  ball29 = new Particles(374, 5, 20);
  ball30 = new Particles(388, 5, 20);


  for(var j = 40; j <= width; j=j + 50){
    plinkos.push(new Plinkos(j, 75));
  }
  for(var j = 15; j<= width - 10; j = j + 50){
    plinkos.push(new Plinkos(j, 175));
  }

}

function draw() {
  background(0);
  Engine.update(engine);
  drawSprites();
  ground.display();
  line1.display();
  line2.display();
  line3.display();
  line4.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
  ball9.display();
  ball10.display();
  ball11.display();
  ball12.display();
  ball13.display();
  ball14.display();
  ball15.display();
  ball16.display();
  ball17.display();
  ball18.display();
  ball19.display();
  ball20.display();
  ball21.display();
  ball22.display();
  ball23.display();
  ball24.display();
  ball25.display();
  ball26.display();
  ball27.display();
  ball28.display();
  ball29.display();
  ball30.display();

  for(var i = 0; i< plinkos.length; i++){
     plinkos[i].display();
  }

}