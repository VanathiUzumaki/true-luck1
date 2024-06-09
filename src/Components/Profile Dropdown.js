import React, { useState } from 'react';
import '../Styles/Profile Dropdown.css';
import { useNavigate } from "react-router-dom";
import profileicon from '../Images/profile-icon.png';




function Profile_Dropdown() {
    const navigate = useNavigate();
  return (
    <div className="Profile-Dropdown">
        <img src={profileicon} alt='profile-icon' className='profile-icon' onClick={() => { navigate("/ProfileDashboard"); }} />
        <div class="menu-dropdown-wrapper">
            <div className="menu-dropdown">
                <div className='option'> Rooms Live : 5</div>
                <div className='option'> Rooms Ended : 4</div>
                <div className='option'> Rooms Won : 1</div>
                <div className='option'> Dashboard</div>
                <div className='option'> Logout</div>
            </div>
        </div>
    </div>
  );
}

export default Profile_Dropdown;