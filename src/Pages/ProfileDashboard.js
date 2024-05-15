 import '../App.css';
import '../Styles/Room.css';
import jsonData from '../Data.json';
import Navbar from '../Components/Navbar.js';




function ProfileDashboard() {
 
    return (
      <div className="App">
      <Navbar {...jsonData.Navbar}/>
    </div>
    );
  }
  
  export default ProfileDashboard;