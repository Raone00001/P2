class BC {
    constructor(x, y, radius) {

      var paper_options = {
          
        'isStatic':true

      }

      this.body = Bodies.circle(x, y, radius, paper_options);
      World.add(world, this.body);

    }

    display(){

      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("white");
      ellipseMode(RADIUS);
      ellipse(0, 0, 10, 10);
      pop();
                                                                                
    }
  }
  