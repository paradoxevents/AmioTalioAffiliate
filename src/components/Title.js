import "./Title.css";
import logo from '../image/paraffiliate.png';
import React from "react";

export function Title(){
  return(
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-text-header">
        EARN £10 FOR SINGING UP!
        </p>
        <p className="App-text-subheader">
          &
        </p >
        <p className="App-text-subheader2">
        EARN £5 FOR EVERY PERSON YOU SIGN UP!
        </p>
      </header>
  )
};