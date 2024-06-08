import React, { useState } from 'react';
import profileicon from '../Images/profile-icon.png';
import '../Styles/Sign In.css';
import SignUp from '../Components/Side Popup';

function Sign_In({ onClose }) {

    const [isClosing, setIsClosing] = useState(false);
    const [signUp,setSignUP] =useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 500);
    };

    // const signUpCall= () => {
    //     setSignUP(true);
    //    console.log("asdfsdr");
    // };
    
    const signUpCall =() =>{
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 500);
    }
    return (
        <div className={`signin_modal ${isClosing ? 'closing' : ''}`}>
            <div className={`signin_modal_container ${isClosing ? 'closing' : ''}`}>
                <div className='signin_modal_header'>
             <button  className="close-button" onClick={handleClose}>X</button>
             <img src={profileicon} alt='profile-icon' className='profile-icon'/>
                </div>
                <div className="modal_nickname">
                    <label htmlFor="nickname">NAME:</label>
                    <input type="text" id="nickname" name="nickname" />
                </div>
                <div className='orelement'>
                    <hr className='line1'></hr>
                    <div className='or'>
                        OR
                    </div>
                    <hr className='line2'></hr>
                </div>
                <button className="modal_signup" onClick={signUpCall}>SIGN UP WITH 
                </button>
                <div className='info'>SIGN UP WITH TRUE LUCK FOR BENEFITS</div>
                
            </div>
            {signUp && <SignUp onClose={() => setSignUP(false)} />}
        </div>
    );
}

export default Sign_In;
