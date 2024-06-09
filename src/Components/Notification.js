import '../Styles/Notification.css';

function Notification(props){
  console.log(props);
    return(
        <div className="Notification-modal">
          <div className='info'> Buy was a Success!</div>
          <div className='time-elapse'></div>
        </div>
    )
}

export default Notification