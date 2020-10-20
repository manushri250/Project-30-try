class Blueground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          friction: 1,
          density: 1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255
      World.add(world, this.body);
    }
    display(){
      push();
      
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
      if(this.body.speed>3){
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity-5
        tint(255,this.Visiblity);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
        }
       
      pop();
    }
  };