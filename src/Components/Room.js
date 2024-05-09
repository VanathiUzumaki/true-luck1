import '../Styles/Room.css';
import up_arrow from '../Images/Up arrow.png'
import down_arrow from '../Images/Down arrow.png'


function Room() {
  return (
    <div className='room'>
        <div className='room-contents'>
            <p className='room-price'>$100 ROOM</p>
            <p className='entree-fee'>ENTREE FEE: $10 USDT</p>
            <p className='participants'>Participants:6</p>
            <p className='tickets-remaining'>tickets remaining: 2/10</p>
            <p className='total-prizes'>total prizes: 3</p>
            <p className='first-prize'>1st prize: $50 USDT</p>
            <div className='buying-section'>
                <div className='counter'>
                    <img src={up_arrow}/>
                    <p className='counter-number'>3</p>
                    <img src={down_arrow}/>       
                </div>
                <div className='buy-container'>
                    <p className='buy-text'>BUY</p>
                </div>
                <p className='view-text'>VIEW</p>
            </div>
        </div>
    </div>
  );
}

export default Room;