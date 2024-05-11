import '../Styles/Navbar.css';
import eth from '../Images/icon-eth.png';
import drop from '../Images/icon-dropdown.png';
import profileicon from '../Images/profile-icon.png'

function Navbar(props) {

  const handleConnectWallet = () => {
    console.log('Connect Wallet button clicked!');
  };
 
  return (
    <div className='Nav'>
        <div className='logo'>true luck</div>
        <div className='nav-elements'>
            <div className='points'>POINTS:{props.points}</div>
            <div className='dropdown'>
                <img src={eth} alt='eth' className='eth' />
                <p className='dropdown-text'>ETH</p>
                <img src={drop} alt='drop' className='drop'/>
            </div>
            <button className='connect-wallet'  onClick={handleConnectWallet}>
              <p className='connect-wallet-text'>CONNECT WALLET</p>
            </button>
            <img src={profileicon} alt='profile-icon' className='profile-icon' />
        </div>
    </div>
  );
}

export default Navbar;