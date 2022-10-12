import './App.css';
import { Footer } from './components/Footer';
import { Signup } from './components/Signup';
import { Subtitle1 } from './components/Subtitle1';
import { Subtitle2 } from './components/Subtitle2';
import { Title } from './components/Title';
import Popup from './components/Popup';
import React, { useState, useEffect } from "react";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <main>
        <Title></Title>
        <div className="subtitle-box">
        <Subtitle1></Subtitle1>
        <Subtitle2></Subtitle2>
        </div>

        <Signup></Signup>
        <br></br>
        <button onClick={() =>setButtonPopup(true)} className="submit-button">SUBMIT!</button>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3 className="popup-heading">Congratulations!</h3>
          <div className="popup-content">
          <p>
          <span>Youve decided to make</span><br/>
          <span>money by joining the</span><br/> 
          <span>Paradox</span><br/>
          <span>Affiliate Program!</span><br/>
          </p>
          <p>
          <span>Join Our Paradox Affiliate </span><br/>
          <span>Telegram group for more info!</span></p>
          </div>
        </Popup>
        
        <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
          <h3 className="popup-heading">Congratulations!</h3>
          <div className="popup-content">
          <p>
          <span>For Joining Up The</span><br/>
          <span>Paradox</span><br/>
          <span>Affiliate Program!</span>
          </p>
          <p>Every 24 hours Your Payment will be submitted Join Our Paradox Affiliate Telegram group for more info!</p>
          </div>
        </Popup>
        <Footer></Footer>
        </main>
    </div>
  );
}

export default App;
