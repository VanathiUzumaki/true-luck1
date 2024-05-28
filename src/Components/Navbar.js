import React, { useState } from 'react';
import { useEffect } from 'react';
import '../Styles/Navbar.css';
import eth from '../Images/icon-eth.png';
import drop from '../Images/icon-dropdown.png';
import profileicon from '../Images/profile-icon.png';
import hamburgerIcon from '../Images/hamburger-icon.png';
import closeIcon from '../Images/close-icon.png';
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (menuOpen || menuClosing) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [menuOpen, menuClosing]);

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setMenuClosing(false);
      }, 300);
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <div className='Nav'>
      <div className='logo' onClick={() => { navigate("/Home"); }}>true luck</div>
      <div className='nav-elements'>
        <div className='points'>POINTS:{props.points}</div>
        <div className='dropdown'>
          <img src={eth} alt='eth' className='eth' />
          <p className='dropdown-text'>ETH</p>
          <img src={drop} alt='drop' className='drop' />
        </div>
        <button className='connect-wallet'>
          <p className='connect-wallet-text'>CONNECT WALLET</p>
        </button>
        <img src={profileicon} alt='profile-icon' className='profile-icon' onClick={() => { navigate("/ProfileDashboard"); }} />
      </div>
      <div className='hamburger' onClick={toggleMenu}>
        <img src={menuOpen && !menuClosing ? closeIcon : hamburgerIcon} alt='menu-icon' />
      </div>
      {(menuOpen || menuClosing) && (
        <div className={`mobile-menu ${menuClosing ? 'closing' : ''}`}>
          <div className='mobile-menu-content'>
            <div className='points'>POINTS:{props.points}</div>
            <div className='dropdown'>
              <img src={eth} alt='eth' className='eth' />
              <p className='dropdown-text'>ETH</p>
              <img src={drop} alt='drop' className='drop' />
            </div>
            <button className='connect-wallet'>
              <p className='connect-wallet-text'>CONNECT WALLET</p>
            </button>
            <img src={profileicon} alt='profile-icon' className='profile-icon' onClick={() => { navigate("/ProfileDashboard"); }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
