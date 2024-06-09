import '../Styles/Notification.css';

function Notification(props){
    return(
        <div className="Notification-modal"> {props.text}  
          <div className='time-elapse'></div>
        </div>
    )
}

export default Notification