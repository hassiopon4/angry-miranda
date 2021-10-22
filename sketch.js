


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gamestate="agarrado";


var engine, world;
var fondo
var piso;
var plataforma1;
var pajarito;

var caja1,caja2,caja3,caja4,caja5,caja6,caja7;
var cerdito1,cerdito2,cerdito3,cerdito4,cerdito5,cerdito6,cerdito7,cerdito8;
var tronco1,tronco2,tronco3;
var resortera;





function preload() {
 fondo=loadImage("sprites/bg.png");
}

function setup(){
 engine = Engine.create();
  world = engine.world;
  createCanvas(1200,400);
 
 piso=new Piso(600,390,1200,20);
 plataforma1=new Piso (151,319,300,120);
   
pajarito=new Pajarito (150,200,20,20);
  
  cerdito1=new Cerdito (655,350,50,50);
  cerdito2=new Cerdito (600,250,50,50);
  cerdito3=new Cerdito (717,250,50,50);
  cerdito4=new Cerdito (657,200,50,50);
  cerdito5=new Cerdito (655,100,50,50);
 // cerdito6=new Cerdito (617,100,50,50);
 // cerdito7=new Cerdito (630,60,50,50);
  cerdito8=new Cerdito (690,50,50,50);
  
  
  caja1=new Cajas (590,350,70,70);
  caja2=new Cajas (720,350,70,70);
  caja3=new Cajas (541,290,70,70);
  caja4=new Cajas (765,290,70,70);
  caja5=new Cajas (650,290,70,70);
  caja6=new Cajas (590,190,70,70);
  caja7=new Cajas (720,190,70,70);
  
  tronco1=new Troncos (660,300,20,350,PI/2);
  tronco2=new Troncos (660,200,20,350,PI/2);
  tronco3=new Troncos (660,100,20,350,PI/2);
  
  resortera=new Resortera (pajarito.body,{x:190,y:65});
  
  
  
}

function draw(){
Engine.update(engine);
  background(fondo);
  piso.display();
  plataforma1.display();
 pajarito.display();
  caja1.display();
  caja2.display();
  cerdito1.display();
  tronco1.display();
  caja3.display();
  caja4.display();
  cerdito2.display();
  cerdito3.display();
  caja5.display();
  tronco2.display();
  caja6.display();
  caja7.display();
  cerdito4.display();
  tronco3.display();
  cerdito5.display();
//  cerdito6.display();
 // cerdito7.display();
  cerdito8.display();
  resortera.display();
  //pajarito2.display();
}
function mouseDragged(){
  
 if (gamestate==="agarrado"){
     Matter.Body.setPosition(pajarito.body,{x:mouseX,y:mouseY})
}
}

function mouseReleased(){
  resortera.fly();
  gamestate="suelto";
}

function keyPressed(){
  if (keyCode===32){
    Matter.Body.setPosition(pajarito.body,{x:200,y:80})
    resortera.agarrar(pajarito.body);
    gamestate="agarrado";
  }
}


