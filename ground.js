class ground{
    constructor(x,y,width,height){
        var opions={
            isStatic:true

        }

        this.body=Bodies.rectangle(x,y,width,height,opions)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
        pop()
    }
}