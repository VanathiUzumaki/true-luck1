import React from 'react';
import '../Styles/LandingPage.css';
import x from '../Images/X logo.png'
import discord from '../Images/Discord logo.png'
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();
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
                        <p className="rooms-active">NO. OF ROOMS ACTIVE:</p>
                        <p className="statustext">4</p>
                        <div className="nadula-line"></div>
                        <p className="funds-entered">FUNDS ENTERED:</p>
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
