class Resortera{
  constructor(bodyA,pointB){
    var options ={
      bodyA:bodyA,
      pointB:pointB,
      stiffness:0.04,
      length:0
    }
    this.image1 = loadImage("sprites/sling1.png");
    this.image2 = loadImage("sprites/sling2.png");
    this.image3 = loadImage("sprites/sling3.png");
    
    this.pointB=pointB;
    this.sling = Constraint.create(options);
    World.add(world,this.sling);
  }
  fly(){
    this.sling.bodyA=null;
  }
  agarrar(bodyA){
    this.sling.bodyA=bodyA;
  }
  display(){
    image(this.image1,200,63);
    image (this.image2,173,59);
    if (this.sling.bodyA){
      var pointA= this.sling.bodyA.position;
      var pointB=this.pointB;
    push();
      if(pointA.x<190){
      strokeWeight(5);
      line(pointA.x-20,pointA.y,pointB.x-15,pointB.y)
      image(this.image3,pointA.x-30,pointA.y-10,15,30)
       line(pointA.x-20,pointA.y,pointB.x+32,pointB.y)
    }
     else {
      strokeWeight(2);
      line(pointA.x-20,pointA.y,pointB.x-15,pointB.y)
      image(this.image3,pointA.x-30,pointA.y-10,15,30)
       line(pointA.x-20,pointA.y,pointB.x+32,pointB.y)
    }
    
      pop();
      
    }
    
    
      
  
  }
}
