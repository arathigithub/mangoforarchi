/*class Stone{
  constructor(x, y,radius) {
      var options = {
        isStatic:false,
          restitution:0,
          friction:1,
          density:1.2
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.image = loadImage("sprites/stone.png");
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position
      //ellipse(pos.x,pos.y,this.radius,this.radius)
      
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(pos.x,pos.y,this.radius,this.radius);
      pop();
    }
}*/

class Stone {

  constructor(x, y,radius) {
      var options = {
          isStatic:false,
          restitution:0,
          friction:1,
          density:1.2
      }
      this.body = Bodies.circle(x,y,radius,options)      
      World.add(world, this.body);
    }
   display(){
    var pos = this.body.position
     ellipseMode(CENTER)
     fill ("red");
     ellipse(pos.x,pos.y,this.radius,this.radius)


   }

}