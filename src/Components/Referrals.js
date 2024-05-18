import React, { useState } from 'react';
import '../Styles/Referrals.css'
import link_img from '../Images/link.png'

function Referrals(){

    const [link, setLink] = useState('');

    const generateLink = () => {
        const newLink = 'https://example.com/referral?code=123456';
        setLink(newLink);
    }

    return(
        <div className='Referrals'>
            <div className='generate-link-container'>
                <p className='generate-text'>Generate Link:</p>
                <input type="text" value={link} readOnly className="link-input"/>
                <button onClick={generateLink} className="link-button">
                    <img className='link-img' src={link_img}/>
                </button>
            </div>
        </div>
    );

}

export default Referrals;