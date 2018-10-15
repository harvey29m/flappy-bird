let Bird=function(ctx,src,x,y,speed,a,live){
    this.index=0;
    this.src=src;
    this.ctx=ctx;
    this.x=x;
    this.y=y
    this.a=a
    this.speed=speed;
    this.live=live;
}

Bird.prototype.draw=function(){
    
    this.index++;
    if(this.index===3) 
        this.index=0;
    this.ctx.drawImage(this.src[this.index],this.x,this.y);
}

Bird.prototype.update=function(count){
    // if(click==null){
        this.speed=this.speed+this.a*count;
        this.y=this.y+this.speed*count;
    // }
        
    // else this.y=this.y-click
    // if(this.y<0){
    //     this.y=0
    //     this.speed=0;
    // }
        

    
}

Bird.prototype.setSpeed=function(speed){
    // this.speed=this.speed+speed
    this.speed=speed
}
export default Bird