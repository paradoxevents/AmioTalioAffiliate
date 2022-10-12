import "./Title.css";
import logo from '../image/amioaffiliate.png';
import React from "react";
import video from '../image/video.mp4';

export function Title(){
  return(
    <header>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <video src={video} className="App-video">
        </video>
        <p className="App-text-header">
        LISTEN TO ME AND I'LL
        <br/>
        MAKE YOU RICH!
        </p>
        </div>
      </header>
  )
};