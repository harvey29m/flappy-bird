import React, { Component } from 'react'
import load from './Load'

export default class Canvas extends Component {
    componentDidMount(){
        const {width, height}=this.props.canvasSize;
        let imgNum=this.props.imgNum;
        this.canvas.width=width;
        this.canvas.height=height;

      

        // const cvs=this.canvas;
        // console.log(this.canvas)
        const ctx=this.canvas.getContext('2d')
        
        const imgList=this.props.imgList;
        const url='http://127.0.0.1:8887/';
        
        
        
        load(imgNum,imgList,ctx,url,this.canvas)
           
    }

  render() {
    return (
      <canvas ref={(canvas)=>this.canvas=canvas}></canvas>
    )
  }
}

