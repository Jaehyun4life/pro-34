class Ball{
    constructor(x,y,radius){
        var boxopt={density:1.0};
        this.body=Bodies.circle(x,y,radius,boxopt);
        this.radius=radius;
        World.add(world,this.body);
    }
display(){
push ();
translate (this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
   ellipseMode(RADIUS);
ellipse (0,0,this.radius);  
  pop ();
}

}