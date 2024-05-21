import '../App.css';
import jsonData from '../Data.json';
import Navbar from '../Components/Navbar.js';
import Expanded_Room from '../Components/Expanded Room.js';
import Statistics_Overview from '../Components/Statistics Overview.js';

function Home() {
  return (
    <div className="App">
      <Navbar {...jsonData.Navbar}/>
      <Expanded_Room {...jsonData.Rooms}/>
    </div>
  );
}

export default Home;
