import React, { useState } from 'react';
import '../Styles/Side Popup.css';
import x from '../Images/X logo.png';
import discord from '../Images/Discord logo.png';

function Side_Popup({ onClose }) {

    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 500);
    };
    
    return (
        <div className={`modal ${isClosing ? 'closing' : ''}`}>
            <div className={`modal_container ${isClosing ? 'closing' : ''}`}>
                <div className="modal_top">
                    <span className="modal_code">TYIUDXFLC 78FKJHUH</span>
                    <button className="modal_close" onClick={handleClose}>X</button>
                </div>
                <div className="modal_nickname">
                    <label htmlFor="nickname">Nickname:</label>
                    <input type="text" id="nickname" name="nickname" />
                </div>
                <div className="modal_logos">
                    <div className="logo_container">
                        <img className="x_logo" src={x} alt="X logo" />
                        <a href="https://www.example.com/" className="connect_button">Connect</a>
                    </div>
                    <div className="logo_container">
                        <img className="discord_logo" src={discord} alt="Discord logo" />
                        <a href="https://www.example.com/" className="connect_button">Connect</a>
                    </div>
                </div>
                <button className="modal_verifywallet">Verify Wallet</button>
                <button className="modal_signup">Sign Up</button>
            </div>
        </div>
    );
}

export default Side_Popup;
