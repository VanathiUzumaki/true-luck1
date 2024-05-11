import '../Styles/Statistics Overview.css';



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
                    <p className='users'>USERS</p>
                    <p className='transaction-hash'>TRANSACTION HASH</p>
                    <p className='value'>VALUE</p>
                    <p className='from'>FROM</p>
                    <p className='age'>AGE</p>
                    <p className='view'>VIEW</p>
                </div>
            </div>
        </div>
    );
}

export default Statistics_Overview;