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
            <div className='overview-container'>
                <div className='top-container'>
                    <div className="overview">Overview:</div>
                </div>
                <div className='bottom-container'>
                    <div className='total-referrals'>Total referrals : 23</div>
                    <div className='total-earned'>Total earned : <span className='green-text'>$152</span></div>
                </div>
            </div>
        </div>
    );

}

export default Referrals;