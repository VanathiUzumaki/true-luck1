import '../Styles/Statistics Overview.css';



function Statistics_Overview() {
    return (
        <div className='statistics-overview'>
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
        </div>
    );
}

export default Statistics_Overview;