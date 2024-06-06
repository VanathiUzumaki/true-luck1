import '../Styles/Analytics.css';
import React, { useState } from 'react';
import Dropdown from './Dropdown';

function Analytics(){

    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
      setIsOpen(!isOpen);
    };

    return(
        <div className="Analytics">
            <div className='summa-container'>
                <a href="#click" className={`menu ${isOpen ? '' : 'menu-hidden'}`} onClick={handleMenuClick}>
                    <h2 className="menu-title">animals</h2>
                    <ul className="menu-dropdown">
                        <li>cat</li>
                        <li>dog</li>
                        <li>horse</li>
                        <li>cow</li>
                        <li>pig</li>
                    </ul>
                </a>
            <Dropdown/>
            </div>
            <div className="RaffleStats">RAFFLES STATISTICS</div>
            <div className="Stats_container">
                <div className='stat'>
                    <div>Rooms won</div>
                    <div>7</div>
                </div>
                <div className='stat'>
                    <div>WIN RATE</div>
                    <div>17.95%</div>
                </div>
                <div className='stat'>
                    <div>TOTAL VOLUME</div>
                    <div>1.744</div>
                </div>
                <div className='stat'>
                    <div>WINNING VOLUME</div>
                    <div>0.072</div>
                </div>
                <div className='stat'>
                    <div>TICKETS BOUGHT</div>
                    <div>3455</div>
                </div>
                <div className='stat'>
                    <div>ENDED</div>
                    <div>1369</div>
                </div>
            </div>
        </div>

    );
}

export default Analytics;
