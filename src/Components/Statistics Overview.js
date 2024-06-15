import '../Styles/Statistics Overview.css';
import User from './User'



function Statistics_Overview(props) {
    return (
        <div className='statistics-overview'>
            <p className='statistics-overview-text'>STATISTICS OVERVIEW:</p>
            <div className='statistics-content'>
                <div className='statistics-amount'>
                    <div class="text-container">
                        <div class= 'stat-uppertext'>AMOUNT:</div>
                        <div class= 'stat-Lowertext'>{props.amount}</div>
                    </div>
                </div>
                <div className='statistics-transactions'>
                    <div class="text-container">
                        <div class= 'stat-uppertext'>TRANSACTIONS:</div>
                        <div class= 'stat-Lowertext'>{props.transactions}</div>
                    </div>
                </div>
                <div className='statistics-addresses'>
                    <div class="text-container">
                        <div class= 'stat-uppertext'>ADDRESSES:</div>
                        <div class= 'stat-Lowertext'>{props.address}</div>
                    </div>
                </div>
            </div>
            <div className='recent-transactions'>
                <div className='transaction-headings'>
                    <div className='users'>
                        <p>USERS</p>
                    </div>
                    <div className='transaction-hash'>
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
                {props.Users.map((user, index) => (
                    <User key={index} {...user} />
                ))}
  <div className='pagination'>
            </div>
          

            </div>
        </div>
    );
}

export default Statistics_Overview;