 import '../App.css';
import '../Styles/Room.css';
import jsonData from '../Data.json';
import Navbar from '../Components/Navbar.js';
import Profile_Details from '../Components/Profile Details.js';




function ProfileDashboard() {
 
    return (
      <div className="App">
      <Navbar {...jsonData.Navbar}/>
      <Profile_Details/>
    </div>
    );
  }
  
  export default ProfileDashboard;