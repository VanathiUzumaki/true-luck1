import '../Styles/Referral User.css'
import profile_pic from '../Images/profile-pic.png'
import clock from '../Images/clock.png'

function Referral_User(){
    return(
        <div className='Referral-User'>
            <div className='users'>
                <img className='profile-pic' src={profile_pic} alt="Profile" />
                <p>Monkeyguy</p>
            </div>
            <div className='time'>
                <img className='clock' src={clock}/>
                <p>29 seconds ago</p>
            </div>
        </div>
    );

}

export default Referral_User;