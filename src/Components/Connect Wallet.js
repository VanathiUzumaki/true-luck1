import '../Styles/Connect Wallet.css';
import metamask from '../Images/MetaMask.png';
import coinbase from '../Images/Coinbase.png';
import connect from '../Images/Connect.png';
import phantom from '../Images/Phantom.png';
import trust from '../Images/Trust.png';
import arrow from '../Images/test.png'

function Connect_Wallet({ onClose }) {
    return (
        <div className="connect_modal">
            <div className="connect_modal_container">
              <div className='choosewallet'>CHOOSE YOUR WALLET
             </div>
             <button  className="close-button" onClick={onClose}>X</button>
                <div className='metamask'>
                    <img className='icon' src={metamask} alt='metamask' />
                    <div className='text'>METAMASK</div>
                    <img className='arrow' src={arrow} alt='arrow' />
                </div>
                <div className='metamask'>
                    <img className='icon' src={phantom} alt='phantom' />
                    <div className='text'>PHANTOM</div>
                    <img className='arrow' src={arrow} alt='arrow' />
                </div>
                <div className='metamask'>
                    <img className='icon' src={connect} alt='connect' />
                    <div className='text'>WALLET CONNECT</div>
                    <img className='arrow' src={arrow} alt='arrow' />
                </div>
                <div className='metamask'>
                    <img className='icon' src={coinbase} alt='coinbase' />
                    <div className='text'>COINBASE WALLET</div>
                    <img className='arrow' src={arrow} alt='arrow' />
                </div>
                <div className='metamask'>
                    <img className='icon' src={trust} alt='trust' />
                    <div className='text'>TRUST</div>
                    <img className='arrow' src={arrow} alt='arrow' />
                </div>
            </div>
        </div>
    );
}

export default Connect_Wallet;
