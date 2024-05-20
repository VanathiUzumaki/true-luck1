import '../Styles/Tx History.css';
import '../Styles/User.css';
import '../Styles/Statistics Overview.css';
import User from './Tx-History User'

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
            <div className='tx-history-transactions'>
                <div className='tx-history-transaction-headings'>
                    <div className='tx-history-transaction-hash'>
                        <p>TRANSACIION HASH</p>
                    </div>
                    <div className='value'>
                        <p>VALUE</p>
                    </div>
                    <div className='from'>
                        <p>FROM</p>
                    </div>
                    <div className='age'>
                        <p>AGE</p>
                    </div>
                    <div className='view'>
                        <p>VIEW</p>
                    </div>
                </div>
            
            </div>
            {props.Users.map((user, index) => (
                    <User key={index} {...user} />
                ))}
            </div>
        </div>
    );

}

export default Tx_History;