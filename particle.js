class Particle{
    constructorx(x,y,r){
    var options={
        restitution:0.4
    }

    this.body = Bodies.circle(x,r,this,r,options);
    this.color = color (random(0,255), random(0,255), random(0,255));
    this.r = r;
    world.add(world,this.body);
}

display(){
var pos = this.body.position
push();
fill(this.color);
ellipseMode(RADIUS);
ellipse(0,0,this.r,this.r);
pop();
}
}