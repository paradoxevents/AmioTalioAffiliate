import "./Signup.css";
import React from "react";
import info from "../info.js";


export function Signup () {

  return (
    
    <div className="check-box ">
      <form id="signup-contact">
        <div className="check-text-box ">
        <div className="check-box-text">
        <p className="text">HUBOI EXCHANGE</p>
        <a href={info.links.huobi} target="_blank" rel="noopener noreferrer" className="link"><p className="text">SIGN UP LINK</p></a> 
        <p className="text"><input type="checkbox" required></input>  SIGNED UP!</p>
        </div>
        </div>

        <div className="check-text-box">
        <div className="check-box-text">
        <p className="text">BYBIT EXCHANGE</p>
        <a href={info.links.bybit} target="_blank" rel="noopener noreferrer" className="link"><p className="text">SIGN UP LINK</p></a>
        
        <p className="text"><input type="checkbox" required></input>  SIGNED UP!</p>
        </div>
        </div>

        <div className="check-text-box">
        <div className="check-box-text">
        <p className="text">PARADOX TELEGRAM</p>
        <input className="input-box" type="tel" placeholder="MOBILE NUMBER" id="phone"></input>
        <a href={info.links.paradoxtg} target="_blank" rel="noopener noreferrer" className="link"><p className="text">JOIN LINK</p></a>
        <p className="text"><input type="checkbox" required></input> JONED UP!</p>
        </div>
        </div>

        <div className="check-text-box">
        <div className="check-box-text">
        <p className="text">EMAIL ADDRESS</p>
        <p className="text"><input className="input-box" type="text" placeholder="INSERT EMAIL ADDRESS" id="email"></input></p>
        <p className="text"><input type="checkbox"></input>DONE!</p>
        </div>
        </div>
        </form>
        {/* <button type="submit">submit</button> */}
        </div>
  )
};