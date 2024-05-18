import '../Styles/Analytics.css';

function Analytics(){
    return(
        <div className="Analytics">
            <div className="RaffleStats">RAFFLES STATS</div>
            <div className="FirstStats">
                <div className='stat'>
                    <div>Rooms won</div>
                    <div>7</div>
                </div>
                <div className='stat'>
                    <div>WIN RATE</div>
                    <div>17.95%</div>
                </div>
                <div className='stat'>
                    <div>TOTAL VOLUME</div>
                    <div>1.744</div>
                </div>
            </div>
            <div className="FirstStats">
                <div className='stat'>
                    <div>WINNING VOLUME</div>
                    <div>0.072</div>
                </div>
                <div className='stat'>
                    <div>TICKETS BOUGHT</div>
                    <div>3455</div>
                </div>
                <div className='stat'>
                    <div>ENDED</div>
                    <div>1369</div>
                </div>
            </div>
        </div>
    );
}

export default Analytics;
