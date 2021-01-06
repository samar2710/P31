class Particle{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.2,
            friction:0.1,
            density:0.1
        }
        this.body=Bodies.circle(x,y,this.r,options);
        this.r=10;
        

        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        color=this.color;
        fill(color);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,20);
    }
}