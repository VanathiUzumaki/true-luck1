import Carousel from 'react-multi-carousel';
import React, { useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import '../Styles/Rooms Available.css';
import Room from './Room.js'
import Notification from "./Notification";

function Rooms_Available(props) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1300, min: 464 },
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
    <div className='rooms-available'>
      <div className='rooms-available-text'>Rooms Available:</div>
      <Carousel
      infinite={true}
      responsive={responsive} className='carousel'>
        <div className='rooms'> <Room {...props} onBuyClick={handleNotification}/>  </div>
        <div className='rooms'> <Room {...props} onBuyClick={handleNotification}/>  </div>
        <div className='rooms'> <Room {...props} onBuyClick={handleNotification}/>  </div>
        <div className='rooms'> <Room {...props} onBuyClick={handleNotification}/>  </div>
        <div className='rooms'> <Room {...props} onBuyClick={handleNotification}/>  </div>
        <div className='rooms'> <Room {...props} onBuyClick={handleNotification}/>  </div>
        <div className='rooms'> <Room {...props} onBuyClick={handleNotification}/>  </div>
        <div className='rooms'> <Room {...props} onBuyClick={handleNotification}/>  </div>
      </Carousel>
      {showNotification && <Notification/>}
    </div>

  );
}

export default Rooms_Available;