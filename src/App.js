import './App.css';
import { Footer } from './components/Footer';
import { Subtitle } from './components/Subtitle';
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
        <Subtitle></Subtitle>
        </div>
        <br></br>
        <button onClick={() =>setButtonPopup(true)} className="submit-button">BRING ME IN!</button>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3 className="popup-heading">Congratulations!</h3>
          <div className="popup-content">
          <p>
          <span>Youve decided to make</span><br/>
          <span>money by joining the</span><br/> 
          <span>AmioTalio</span><br/>
          <span>Affiliate Program!</span><br/>
          </p>
          <p>
          <span>Join Our AmioTalio Affiliate </span><br/>
          <span>Telegram group for more info!</span></p>
          </div>
        </Popup>
        
        <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
          <h3 className="popup-heading">Congratulations!</h3>
          <div className="popup-content">
          <p className='popup-p'>
          <span>For Joining Up The</span><br/>
          <span>AmioTalio</span><br/>
          <span>Affiliate Program!</span>
          </p>
          <p className='popup-p'>Every 24 hours Your Payment <br/>will be submitted</p>  
          <p className='popup-p'>Join Our Paradox Affiliate Telegram group for more info!</p>
          </div>
        </Popup>
        <Footer></Footer>
        </main>
    </div>
  );
}

export default App;
