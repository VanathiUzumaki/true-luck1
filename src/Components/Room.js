import '../Styles/Room.css';
import up_arrow from '../Images/Up arrow.png'
import down_arrow from '../Images/Down arrow.png'


function Room() {

    const OnBuyButtonclick = () => {
        console.log('Buy button clicked!');
      };
  return (
    <div className='room'>
        <div className='room-contents'>
            <p className='room-price'>$100 ROOM</p>
            <p className='entree-fee'>ENTREE FEE: $10 USDT</p>
            <div className='text-container'>
                <p className='participants'>Participants:6</p>
                <p className='tickets-remaining'>tickets remaining: 2/10</p>
                <p className='total-prizes'>total prizes: 3</p>
            </div>
            <p className='first-prize'>1st prize: $50 USDT</p>
            <div className='buying-section'>
                <div className='counter'>
                    <img src={up_arrow}/>
                    <p className='counter-number'>3</p>
                    <img src={down_arrow}/>       
                </div>
                <button className='buy-container' onClick={OnBuyButtonclick}>
                    <p className='buy-text'>BUY</p>
                </button>
                <a href="https://www.example.com" className='view-text'>VIEW</a>
            </div>
        </div>
    </div>
  );
}

export default Room;