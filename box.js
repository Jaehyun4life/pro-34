class Box{
    constructor(x,y,width,height){
        var boxopt={restitution:0.8,friction:0.5,density:1.0};
        this.body=Bodies.rectangle(x,y,width,height,boxopt);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
display(){
push ();
translate (this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
  rect (0,0,this.width,this.height);  
  pop ();
}

}