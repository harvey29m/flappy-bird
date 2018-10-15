let Pipes=function(ctx,src,x,speed){
    this.ctx=ctx;
    this.src=src;
    this.x=x;
    this.y=-Math.random()*120-100;
    this.speed=speed;
    this.count=false
    
}

Pipes.prototype.draw=function(){
    
    this.ctx.drawImage(this.src[0],this.x,this.y)
    this.ctx.drawImage(this.src[1],this.x,this.y+490)
}

Pipes.prototype.update=function(pipeNum,gap){
    this.x=this.x+this.speed;
    

    if(this.x<-52){
        this.y=-Math.random()*200-120
        this.x=this.x+pipeNum*gap
        this.count=false;
    }
    
    
//     console.log(this.x)
 }


export default Pipes