import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import CashRegisterAudio from '../Styles/Audio/cash-register-purchase.mp3';
import '../Styles/Room.css';
import up_arrow from '../Images/Up arrow.png'
import down_arrow from '../Images/Down arrow.png'
import Notification from "./Notification";


function Room(props) {

    const [tickets, setTickets] = useState(0);
    const [showNotification, setShowNotification] = useState(false);

    const UpButton = () => {
        setTickets(tickets+1);
      };
      const DownButton = () => {
        if (tickets > 0){
          setTickets(tickets-1);
        }
      };

    const OnBuyButtonclick = () => {
        const audio = new Audio(CashRegisterAudio);
        audio.play();
        console.log(showNotification);
        setShowNotification(true);
        console.log(showNotification);
        
      };

      const navigate = useNavigate();
  return (
    <div className='room'>
        <div className='room-contents'>
            <p className='room-price'>{props.roomName}</p>
            <p className='entree-fee'>ENTREE FEE: {props.entryFee}</p>
            <div className='text-container'>
                <p className='participants'>Participants:{props.participants}</p>
                <p className='tickets-remaining'>tickets remaining: {props.ticketsRemaining}/10</p>
                <p className='total-prizes'>total prizes: {props.totalPrizes}</p>
            </div>
            <p className='first-prize'>1st prize: {props.onePrize}</p>
            <div className='buying-section'>
                <div className='counter'>
                    <img src={up_arrow} onClick={UpButton}/>
                    <p className='counter-number'>{tickets}</p>
                    <img src={down_arrow} onClick={DownButton}/>       
                </div>
                <button className='buy-container' onClick={OnBuyButtonclick}>
                    <p className='buy-text'>BUY</p>
                </button>
                <div onClick={() => { navigate("/Room"); }} className='view-text'>VIEW</div>
            </div>
        </div>
        {setShowNotification && <Notification/>}
    </div>
  );
}

export default Room;