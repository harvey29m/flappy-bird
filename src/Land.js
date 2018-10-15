let Land=function(ctx,src,x,y,speed){
    this.ctx=ctx;
    this.src=src;
    this.x=x;
    this.y=y;
    this.speed=speed;
}

Land.prototype.draw=function(){
    this.ctx.drawImage(this.src,this.x,this.y)
    this.ctx.drawImage(this.src,336+this.x,this.y)
}

Land.prototype.update=function(){
    this.x=this.x+this.speed;
    if(this.x<-336) 
        this.x=0;
}

export default Land