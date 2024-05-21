import React, { useState, useEffect } from 'react';
import '../Styles/Expanded Room.css';
import expanded_room_bg from '../Images/Expanded-room-bg.png'
import up_arrow from '../Images/Up arrow.png'
import down_arrow from '../Images/Down arrow.png'
import CashRegisterAudio from '../Styles/Audio/cash-register-purchase.mp3';

function Expanded_Room(props){

    const [tickets, setTickets] = useState(0);

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
      };

    return (
        <div className='Expanded-Room'>
            <div className='left-container'>
                <div className='title'>$100 Room</div>
                <div className='tickets-container'>
                    <div className='tickets-owned-container'>
                        <div className='tickets-owned'>TICKETS OWNED</div>
                        <div className='tickets-number'>5</div>
                    </div>
                    <div className='winning-chance-container'>
                        <div className='winning-chance'>Winning Chance</div>
                        <div className='winning-percentage'>50%</div>
                    </div>
                </div>
                <div className='total-prizes'>Total Prizes : 3</div>
                <div className='first-prize'>1st : <span>$60 USDT/USDC</span></div>
                <div className='second-prize'>2nd : <span>$60 USDT/USDC</span></div>
                <div className='third-prize'>3rd : <span>$60 USDT/USDC</span></div>
            </div>
            <div className='right-container'>
                <div className='entry-fee'>Entry fee : $10 usdt/usdc</div>
                <div className='participants'>Participants : 6</div>
                <div className='tickets-remaining'>Ticket remaining : 2</div>
                <div className='buying-section'>
                    <div className='counter'>
                        <img src={up_arrow} onClick={UpButton}/>
                        <p className='counter-number'>{tickets}</p>
                        <img src={down_arrow} onClick={DownButton}/>       
                    </div>
                    <button className='buy-container' onClick={OnBuyButtonclick}>
                        <p className='buy-text'>BUY</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Expanded_Room;