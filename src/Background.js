let Background=function(ctx,img,x,speed){
    this.img=img;
    this.ctx=ctx;
    this.x=x;
    this.speed=speed;

    //ctx.drawImage(img,0,0);

  }
Background.prototype.draw=function(){
    
    // console.log('draw')
    this.ctx.drawImage(this.img,this.x,0)
    this.ctx.drawImage(this.img,288+this.x,0)
}
Background.prototype.update=function(){
    // console.log('update')
    this.x=this.x+this.speed;
    if(this.x<-288) 
        this.x=0;
    // console.log('x is: '+this.x)
}
  export default Background