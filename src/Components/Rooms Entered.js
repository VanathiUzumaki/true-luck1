import React, { useState } from 'react';
import '../Styles/Rooms Entered.css';
import Room from './Room';
import Notification from "./Notification";

const Rooms_Entered = (props) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const [showNotification, setShowNotification] = useState(false);
  const handleNotification = () => {
    setShowNotification(true)
    setTimeout(() => {
      setShowNotification(false);
  }, 4000);
}
    return (
        <div className="Rooms-Entered">
            <div className='Room-Stats'>
                <div>Live : 3</div>
                <div>Ended : 4</div>
                <div>Won : 6</div>
            </div>
            <div className='rooms-container'>
              <div className='room-container'><Room {...props} onBuyClick={handleNotification}/></div>
              <div className='room-container'><Room {...props} onBuyClick={handleNotification}/></div>
              <div className='room-container'><Room {...props} onBuyClick={handleNotification}/></div>
              <div className='room-container'><Room {...props} onBuyClick={handleNotification}/></div>
              <div className='room-container'><Room {...props} onBuyClick={handleNotification}/></div>
              <div className='room-container'><Room {...props} onBuyClick={handleNotification}/></div>
              <div className='room-container'><Room {...props} onBuyClick={handleNotification}/></div>
              <div className='room-container'><Room {...props} onBuyClick={handleNotification}/></div>
            </div>
            {showNotification && <Notification/>}
        </div>
    );
}

export default Rooms_Entered;