import '../Styles/Navbar.css';
import eth from '../Images/icon-eth.png';
import drop from '../Images/icon-dropdown.png';
import profileicon from '../Images/profile-icon.png'

function Navbar() {
  return (
    <div className='Nav'>
        <p className='logo'>true luck</p>
        <div className='nav-elements'>
            <p className='points'>POINTS:600</p>
            <div className='dropdown'>
                <img src={eth} alt='eth' className='eth' />
                <p className='dropdown-text'>ETH</p>
                <img src={drop} alt='drop' className='drop'/>
            </div>
            <div className='connect-wallet'>
              <p className='connect-wallet-text'>CONNECT WALLET</p>
            </div>
            <img src={profileicon} alt='profile-icon' className='profile-icon' />
        </div>
    </div>
  );
}

export default Navbar;