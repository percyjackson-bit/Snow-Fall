class Snow{
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
        var option = {
            density : 0.5,
            friction : 0.8,

        }
        this.image = loadImage("snow5.webp");
        this.body = Bodies.circle(this.x,this.y,this.r,option);
        World.add(world,this.body);
    }
    display(){
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,10,10);
    }
    
}
