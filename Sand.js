class Sand{
    constructor(x,y){
        var options={
            'density':1,
            'friction':5,
            'restitution':0.3
        }

            this.body=Bodies.circle(x,y,5,options)
        this.radius=1;

        World.add(world,this.body)
        }
            display(){
        var pos=this.body.position
        ellipseMode(CENTER)
        fill("red")
        ellipse(pos.x,pos.y, 20, 20) 
       } 
        
    }
