class Mango {

    constructor(x, y,radius) {
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
        }
        this.image=loadImage("Plucking mangoes/mango.png")
        this.body = Bodies.circle(x,y,radius-10,options) 
        this.radius = radius;     
        World.add(world, this.body);
      }
     display(){
      var pos = this.body.position
      imageMode(CENTER)
       fill ("yellow");
       image (this.image,pos.x,pos.y,this.radius,this.radius)
      // ellipse(pos.x,pos.y,this.radius,this.radius)
  
  
     }
  
  }