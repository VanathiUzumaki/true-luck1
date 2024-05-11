import '../Styles/User.css';
import profile_pic from '../Images/profile-pic.png'
import eye from '../Images/eye.png'

function App() {
  return (
    <div className="user-component">
        <div className='users'>
            <img className='profile-pic' src={profile_pic}/>
            <p>CRACKHEAD47</p>
        </div>
        <div className='transaction-hash'>
            <p className='transaction-site'>POLYGON</p>
            <p className='transaction-id'>98ys87dfha870hf8a0hdf78a23j880whef</p>
        </div>
        <div className='value'>
            <p>2.123 ETH</p>
        </div>
        <div className='from'>
            <p>0xcsewsdga2234</p>
        </div>
        <div className='age'>
            <p>29 seconds ago</p>
        </div>
        <div className='view'>
            <img className='eye' src={eye}/>
        </div>
    </div>
  );
}

export default App;