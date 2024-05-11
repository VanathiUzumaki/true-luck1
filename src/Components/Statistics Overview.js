import '../Styles/Statistics Overview.css';
import User from './User'



function Statistics_Overview() {
    return (
        <div className='statistics-overview'>
            <p className='statistics-overview-text'>STATISTICS OVERVIEW:</p>
            <div className='statistics-content'>
                <div className='statistics-amount'>
                    <div class="text-container">
                        <p class= 'stat-uppertext'>AMOUNT:</p>
                        <p class= 'stat-Lowertext'>$12,234.34</p>
                    </div>
                </div>
                <div className='statistics-transactions'>
                    <div class="text-container">
                        <p class= 'stat-uppertext'>TRANSACTIONS:</p>
                        <p class= 'stat-Lowertext'>234,324</p>
                    </div>
                </div>
                <div className='statistics-addresses'>
                    <div class="text-container">
                        <p class= 'stat-uppertext'>ADDRESSES:</p>
                        <p class= 'stat-Lowertext'>12,536</p>
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
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>

            </div>
        </div>
    );
}

export default Statistics_Overview;