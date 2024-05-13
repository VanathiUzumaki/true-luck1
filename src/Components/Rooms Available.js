import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Styles/Rooms Available.css';
import Room from './Room.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';



function Rooms_Available(props) {
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
  return (
    <div className='rooms-available'>
      <div className='rooms-available-text'>Rooms Available:</div>
      <Carousel
      infinite={true}
      responsive={responsive} className='carousel'>
        <div className='rooms'> <Room {...props}/> </div>
        <div className='rooms'> <Room {...props} /> </div>
        <div className='rooms'> <Room {...props} /> </div>
        <div className='rooms'> <Room {...props} /> </div>
        <div className='rooms'> <Room {...props} /> </div>
        <div className='rooms'> <Room {...props} /> </div>
        <div className='rooms'> <Room {...props} /> </div>
        <div className='rooms'> <Room {...props} /> </div>
      </Carousel>
    </div>

  );
}

export default Rooms_Available;