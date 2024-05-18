import '../Styles/Tx History.css';
import '../Styles/User.css';
import '../Styles/Statistics Overview.css';
import User from './User'

function Tx_History(props){
    console.log(props.Users);

    return(
        <div className='TX-History'>
            <div className="Funds-Entered-Container">
                <div  className='FundsEntered'>
                    <div className='Funds'>FUNDS ENTERED:</div>
                    <div className='EnteredNumerical'>$ 5000</div>
                </div>
            </div>
            <div>
            {props.Users.map((user, index) => (
                        <User key={index} {...user} showProfile={true}/>
                    ))}
            </div>
        </div>
    );

}

export default Tx_History;