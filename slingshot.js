class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:100
        }
        this.pointB=pointB;
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA!==null){
        var pointA=this.sling.bodyA.position
        var pointB=this.pointB
        strokeWeight(4)
        stroke("green");
        line(pointB.x,pointB.y,pointA.x,pointA.y)
        }
    }
}