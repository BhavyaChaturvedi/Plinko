class Plinkos {
    constructor(x, y) {
      var options = { 
        'density': 1, 
        'friction': 0.005,
        isStatic: true
      };
  
      this.body = Bodies.circle(x, y, 14, options);
      this.r = 14;
      World.add(world, this.body);
      this.trajectory =[];

    }
    
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipseMode(RADIUS);
      ellipse(0, 0, this.r/2, this.r/2);
      pop();
    }
  }
  