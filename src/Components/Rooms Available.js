import '../Styles/Rooms Available.css';
import Room from './Room.js'


function Rooms_Available() {
  return (
    <div className='rooms-available'>
        <p className='rooms-available-text'>Rooms Available:</p>
        <div className='rooms'>
            <Room/>
            <Room/>
            <Room/>
        </div>
    </div>
  );
}

export default Rooms_Available;