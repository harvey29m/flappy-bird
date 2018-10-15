import React, { Component } from 'react';
import Canvas from './Canvas'
export default class App extends Component {
  constructor(){
    super();
    this.state={
      canvasSize:{
        width:288,
        height:512
      },
      imgList:{
        bird:['bird0_0.png','bird0_1.png','bird0_2.png'],
        bg:['bg_day.png'],
        pipe:['pipe_down.png','pipe_up.png'],
        tutorial:['tutorial.png'],
        title:['title.png'],
        status:['button_play.png','text_game_over.png'],
        land:['land.png'],
        num:['number_score_00.png','number_score_01.png','number_score_02.png',
        'number_score_03.png','number_score_04.png','number_score_05.png',
        'number_score_06.png','number_score_07.png','number_score_08.png',
        'number_score_09.png']


      },
      live:false,
      start:false,
      imgNum:20
    }
  }
  render() {
    return (
      <div>
        <Canvas {...this.state}/>
        
      </div>
    )
  }
}
