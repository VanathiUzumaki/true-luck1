import '../Styles/Referral User.css'
import profile_pic from '../Images/profile-pic.png'
import clock from '../Images/clock.png'
import ticket from '../Images/ticket.png'

function Referral_User() {
    return (
        <div className='Referral-User'>
            <div className='users'>
                <img className='profile-pic' src={profile_pic} alt="Profile" />
                <p>Monkeyguy</p>
            </div>
            {/* <div className='transaction-hash'>
                <p className='transaction-site'>Polygon</p>
                <p className='transaction-id'>98ys87dfha870hf8a0hdf78a23j880whef</p>
            </div>
            <div className='time'>
            <p>29 seconds ago</p>
                <img className='clock' src={ticket} />
                
            </div> */}
            <div className='time'>
                <img className='clock' src={clock} />
                <p>29 seconds ago</p>
            </div>
        </div>
    );

}

export default Referral_User;