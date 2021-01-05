class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");

    this.trajectroy=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();

if(this.body.velocity.x>10 && this.body.position.x>200){
var position=[this.body.position.x,this.body.position.y]
this.trajectroy.push(position)
}

console.log(this.trajectroy)
for(var i=0;i<this.trajectroy.length;i++){
  image (this.smokeimage,this.trajectroy[i][0],this.trajectroy[i][1])
}
  }
}
