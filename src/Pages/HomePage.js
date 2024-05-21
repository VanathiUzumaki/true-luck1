import '../App.css';
import jsonData from '../Data.json';
import Navbar from '../Components/Navbar.js';
import Rooms_Available from '../Components/Rooms Available.js';
import Statistics_Overview from '../Components/Statistics Overview.js';

function Home() {
  return (
    <div className="Home-Page">
      <Navbar {...jsonData.Navbar}/>
      <Rooms_Available {...jsonData.Rooms}/>
      <Statistics_Overview {...jsonData.Statistics_Overview}/>
    </div>
  );
}

export default Home;
