import '../Styles/Participants.css'
import Referral_User from './Referral User';

function Participants(){
    return(
        <div className='Participants'>
            <div className='options-container'>
                <div className='option'>Participants</div>
                <div className='option'>Activity</div>
            </div>
            <div className='referrals-users'>
                <Referral_User/>
                <Referral_User/>
                <Referral_User/>
                <Referral_User/>
            </div>
        </div>
    );

}

export default Participants;