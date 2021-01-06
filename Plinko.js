class Plinko {
    constructor(x,y,radius){
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,10,options);
        this.x=x;
        this.y=y;
        this.radius=10;
    }
    display(){
        fill("white");
        ellipseMode(CENTER);
        ellipse(this.x,this.y,20);
    }
}