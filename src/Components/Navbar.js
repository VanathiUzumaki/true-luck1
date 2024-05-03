import '../Styles/Navbar.css';
import eth from '../Images/icon-eth.png';
import drop from '../Images/icon-dropdown.png';

function Navbar() {
  return (
    <div className='Nav'>
        <div className='Logo'>
            <p className='l'>true luck</p>
        </div>
        <div className='nav-elements'>
            <p className='points'>POINTS:600</p>
            <div className='dropdown'>
                <img src={eth} alt='eth' className='eth'/>
                <p>ETH</p>
                <img src={drop} alt='drop' className='drop'/>
            </div>
        </div>
    </div>
  );
}

export default Navbar;