import React from 'react';
import '../Styles/LandingPage.css';
import x from '../Images/X logo.png'
import discord from '../Images/Discord logo.png'
import { useNavigate } from "react-router-dom";
import  { useState, useEffect } from 'react';

const LandingPage = () => {
    const navigate = useNavigate();

    const [roomText, setRoomText] = useState('NO. OF ROOMS ACTIVE:');
    const [fundsText, setFundsText] = useState('FUNDS ENTERED:');

    const updateText = () => {
        if (window.innerWidth <= 600) {
            setRoomText('ROOMS ACTIVE:');
            setFundsText('FUNDS:');
        } else {
            setRoomText('NO. OF ROOMS ACTIVE:');
            setFundsText('FUNDS ENTERED:');
        }
    };

    useEffect(() => {
        updateText();
        window.addEventListener('resize', updateText);
        return () => {
            window.removeEventListener('resize', updateText);
        };
    }, []);


    return (
        <div className="landing-container">
            <div className='logo'>
                <div className='logo-circle'>
                    <div className='circle-text'>
                        true luck
                        <div className='circle-subtitle'>
                        The Multi Chain Casino
                        </div>
                    </div>
                    
                </div>
                <div className='logo-bottom'>
                    <div className='to-enter-app'>
                        <button className='enter-button' onClick={() => { navigate("/Home"); }}>Press to Enter</button>
                    </div>
                    <div className='stats'>
                        <p className="rooms-active">{roomText}</p>
                        <p className="statustext">4</p>
                        <div className="nadula-line"></div>
                        <p className="funds-entered">{fundsText}</p>
                        <p className="statustext">$2500</p>
                    </div>
                </div>
            </div>
            <div className='launch-page'>
                <button className='launch-btn' onClick={() => { navigate("/Home"); }}>Launch App</button>
            </div>
            <div className='social-icons'>
                <img className='discord-logo' src={discord} />
                <img className='x-logo' src={x} />
            </div>
        </div>
    );
};

export default LandingPage;
