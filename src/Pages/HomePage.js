import '../App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import jsonData from '../Data.json';
import Navbar from '../Components/Navbar.js';
import Rooms_Available from '../Components/Rooms Available.js';
import Statistics_Overview from '../Components/Statistics Overview.js';
import DisclaimerPopup from '../Components/Disclaimer Popup.js';

function Home() {


  const [disclaimerPopup,setDisclaimerPopup] = useState(true);

  return (
    <div className="Home-Page">
      <Navbar {...jsonData.Navbar}/>
      <Rooms_Available {...jsonData.Rooms}/>
      <Statistics_Overview {...jsonData.Statistics_Overview}/>
      {disclaimerPopup && <DisclaimerPopup onClose={() => setDisclaimerPopup(false)} />}
    </div>
  );
}

export default Home;
