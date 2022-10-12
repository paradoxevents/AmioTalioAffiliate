import logo from "../image/paraffiliate.png";
import youtube from "../image/youtube.png";
import twitter from "../image/twitter.png";
import discord from "../image/discord.png";
import twich from "../image/twich.png";
import "./Footer.css";
import React from "react";
import info from "../info.js";

export function Footer() {
  return (
  <div className="footer">
    <div className="paralogo">
      <img src={logo} className="app-logo" alt="logo"/>
      <p>Terms and Conditions</p>
      <p>Privacy Policy</p>
    </div>
    <div className="sociallist">
      <div>
      <a href={info.links.youtube} target="_blank" rel="noopener noreferrer"><img src={youtube} className="socialicon" alt="youtube"/></a>
      <a href={info.links.discord} target="_blank" rel="noopener noreferrer"><img src={discord} className="socialicon" alt="discord"/></a>
      <a href={info.links.twich} target="_blank" rel="noopener noreferrer"><img src={twich} className="socialicon" alt="twich"/></a>
      <a href={info.links.twitter} target="_blank" rel="noopener noreferrer"><img src={twitter} className="socialicon" alt="twitter"/></a>
      </div>
      <p>Paradox © 2022, All rights reserved</p>
    </div>
  </div>
    )

};


