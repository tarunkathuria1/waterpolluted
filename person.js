class Person {
    constructor(x, y) {
      var options = {
        isStatic: true,
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,50,50, options);
		this.image=loadImage("walkingperson.gif");
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      if(keyDown("LEFT_ARROW")){
        pos.x=pos.x-2;
      }
    
      if(keyDown("RIGHT_ARROW")){
        pos.x=pos.x+2;
      }
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(4);
      stroke("green");
      fill("red");
      imageMode(CENTER);
			image(this.image, 0,0,this.r)
      pop();
    }
  };
  