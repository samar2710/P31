class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true

        }
        this.body=Bodies.rectangle(400,395,840,5,options);
        this.x=x;
        this.y=y;
        this.width=840;
        this.height=5;

    }
    display(){
        rectMode(CENTER);
        rect(400,395,840,5);
    }
}