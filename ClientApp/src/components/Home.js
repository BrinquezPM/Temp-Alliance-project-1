import React, { Component } from 'react';
import Illustration from '../Images/LandingPage/Illustration.png';
import ButtonPlay from '../Images/LandingPage/ButtonPlay.png';
import Zigzag from '../Images/LandingPage/ZigzagLines.png';
import Arrow from '../Images/LandingPage/Arrow.png';
import './StyleSheet.css';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
            <p style={{ float: "right" }} ><img src={Illustration}></img></p>
            <p className="zigzag"><img src={Zigzag} alt="zig zag lines"></img></p>
            
            <ul style={{ listStyleType: 'none' }}>
          <li><h1>Launch your career with Alliance</h1></li>
                <li>Join out dynamic team and discover how we can help you achieve your professional goals</li>
                <li><img src={ButtonPlay} alt="play button"></img><b>    Start Your Journey</b></li>
                <li className="arrow"><img src={Arrow} alt="Arrow"></img></li>
          </ul>
           
           

        </div>
    );
  }
}
