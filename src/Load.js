import Background from './Background'
import Bird from './Birds';
import Pipe from './Pipe';
import Land from './Land'
export default function load(imgNum,imgList,ctx,url,cvs) {
    let srcList={};

    for(let key in imgList){
        srcList[key]=[]
        for(let i in imgList[key]){
          let img=new Image()
          img.src=url+imgList[key][i]
          srcList[key].push(img)
          // console.log(srcList[key])
          img.addEventListener('load',function(){
            imgNum--;
            if(imgNum===0){
              console.log('load');
              start(ctx,srcList,cvs);
              
            }
          })
        }
      }
}

function start(ctx,srcList,cvs){
  const speed=-3;
  let start=false;
  cvs.onclick=function(){
    console.log('start')
    start=true;
  }
  var defaultBird=new Bird(ctx,srcList['bird'],80,256,0,0,false);
  var bg1=new Background(ctx,srcList['bg'][0],0,speed);
  var land=new Land(ctx,srcList['land'][0],0,400,speed);

  var interval=setInterval(()=>{
    if(start==true){
      clearInterval(interval);
      callback(ctx,srcList,cvs)
    }
    
    bg1.draw();
    bg1.update();
    defaultBird.draw();
    ctx.drawImage(srcList['tutorial'][0],87,150)
    ctx.drawImage(srcList['title'][0],55,20)
    land.draw();
    land.update();
    ctx.drawImage(srcList['status'][0],86,320)
  },50);
  
}


function callback(ctx,srcList,cvs){
    const speed=-3;
    const pipeNum=4;
    const length=25;
    const gap=150;
    let count=0;
    let score=0;
    var bg1=new Background(ctx,srcList['bg'][0],0,speed);
    var bird=new Bird(ctx,srcList['bird'],80,256,0.0003,0.00035,true);
    var land=new Land(ctx,srcList['land'][0],0,400,speed);
    var pipeList=[];

    for(var i=0;i<pipeNum;i++){
      var x=gap*i+288
      var pipe=new Pipe(ctx,srcList['pipe'],x,speed);
      pipeList.push(pipe)
    }
    
    let checkDeath=function(){
      for(var i in pipeList){
        
        if(bird.y+12<=pipeList[i].y+320 || bird.y+36>=pipeList[i].y+490){
          if(bird.x+36>=pipeList[i].x && bird.x+36+6<=pipeList[i].x+52)
          bird.live=false;
        }
        if(bird.y+36>=400) 
          bird.live=false;
        
      }
    }
    
      cvs.onclick=function(){
        console.log('click')
        bird.setSpeed(-0.25)
        count=0;
      }
    
      var interval=setInterval(()=>{
          checkDeath();
          // bird.live=true;
          bg1.draw();
          bg1.update();
          bird.draw();
          bird.update(count);
          count++;

          for(var i in pipeList){
            pipeList[i].draw();
            pipeList[i].update(pipeNum,gap);
            if(!pipeList[i].count && pipeList[i].x+52<=80){
              score++;
              pipeList[i].count=true;
            }
          }
         
          var num=score.toString();
          // if(score<10) num='00'+num;
          // else if(score>=10 && score<100) num='0'+num;

          for(var i=0;i<num.length;i++){
            ctx.drawImage(srcList['num'][num.charAt(i)-''],15*i,0)
          }
          
          land.draw();
          land.update();

          if(bird.live==false){
            
            clearInterval(interval);
            ctx.drawImage(srcList['status'][1],42,100)
            cvs.onclick=()=>{
              start(ctx,srcList,cvs);
            }
            // start(ctx,srcList,cvs);
          } 
          
      },length)

}

