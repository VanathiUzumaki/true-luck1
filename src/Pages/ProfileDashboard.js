import React, { useState } from 'react';
import '../App.css';
import '../Styles/Room.css';
import jsonData from '../Data.json';
import Navbar from '../Components/Navbar.js';
import Profile_Details from '../Components/Profile Details.js';
import Profile_Options from '../Components/Profile Options.js';
import Rooms_Entered from '../Components/Rooms Entered.js';




function ProfileDashboard() {
  const [activeItem, setActiveItem] = useState('ROOMS ENTERED');

  const handleItemClick = (item) => {
      setActiveItem(item);
  };

 
    return (
      <div className="App">
      <Navbar {...jsonData.Navbar}/>
      <Profile_Details/>
      <Profile_Options activeItem={activeItem} handleItemClick={handleItemClick}/>
      {activeItem === 'ROOMS ENTERED' && <Rooms_Entered {...jsonData.Rooms} />}
    </div>
    );
  }
  
  export default ProfileDashboard;